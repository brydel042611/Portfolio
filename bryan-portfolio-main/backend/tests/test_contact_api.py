"""Backend API tests for Bryan Delgado Portfolio - /api/contact and /api/ root."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback to frontend/.env file
    env_path = "/app/frontend/.env"
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip()
                    break
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health / root
def test_api_root(client):
    r = client.get(f"{API}/", timeout=15)
    assert r.status_code == 200
    body = r.json()
    assert "message" in body
    assert "Bryan" in body["message"] or "Portfolio" in body["message"]


# Contact POST - success
class TestContactCreate:
    def test_create_contact_message_success(self, client):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_user_{unique}",
            "email": f"test_{unique}@example.com",
            "message": "TEST_MSG hello, this is an integration test message.",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        # Validate response structure
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert data["email"] == payload["email"]
        assert data["name"] == payload["name"]
        assert data["message"] == payload["message"]
        # No leaked Mongo _id
        assert "_id" not in data

        # Verify persistence via GET
        list_r = client.get(f"{API}/contact", timeout=15)
        assert list_r.status_code == 200
        msgs = list_r.json()
        assert isinstance(msgs, list)
        ids = [m.get("id") for m in msgs]
        assert data["id"] in ids
        # Ensure no _id leakage in list responses either
        for m in msgs[:20]:
            assert "_id" not in m

    def test_create_contact_invalid_email(self, client):
        payload = {
            "name": "TEST_invalid",
            "email": "not-an-email",
            "message": "TEST_MSG should fail validation.",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_create_contact_empty_message(self, client):
        payload = {
            "name": "TEST_empty",
            "email": "valid@example.com",
            "message": "",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_create_contact_missing_email(self, client):
        payload = {"name": "TEST_no_email", "message": "TEST_MSG hello there."}
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_create_contact_optional_name(self, client):
        """name is optional — should still succeed with just email + message."""
        unique = uuid.uuid4().hex[:8]
        payload = {
            "email": f"noname_{unique}@example.com",
            "message": "TEST_MSG no name attached.",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["email"] == payload["email"]
        assert data.get("name") in (None, "")


# Contact GET
class TestContactList:
    def test_list_contact_messages(self, client):
        r = client.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        if data:
            sample = data[0]
            assert "id" in sample
            assert "email" in sample
            assert "message" in sample
            assert "created_at" in sample
            assert "_id" not in sample

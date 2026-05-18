# Bryan Delgado Portfolio — PRD

## Problem Statement
Create a modern premium personal portfolio website for Bryan Delgado, a young creative web designer and digital creator. Style: professional, minimal, modern, premium, responsive, smooth. Color palette: matte black, dark charcoal, white typography, electric blue accents.

## Architecture
- Backend: FastAPI + MongoDB (Motor) — endpoints `/api/contact` (POST/GET), `/api/status` (legacy), `/api/`
- Frontend: React 19 + Tailwind + framer-motion + lucide-react + shadcn/sonner
- Single-page anchored navigation (Home/About/Projects/Skills/Contact)

## User Personas
- Potential clients (businesses, founders) evaluating Bryan for design work
- Recruiters and creative collaborators
- Peers in design community

## Core Requirements
- Sticky glassmorphism navbar with smooth scroll and mobile menu
- Cinematic hero with subtle floating shapes
- About section with portrait image + stats
- Featured Projects: "Premium Pitch" (cinematic + UI mockup combo) with tags + CTAs
- Skills (7 items) bento grid
- 5-step creative process timeline
- Testimonials (3 cards)
- Contact form (stored in MongoDB) + email display
- Modern footer with social placeholders

## Implementation Status (Dec 2025)
- [x] Backend `/api/contact` endpoint (Pydantic, EmailStr, MongoDB)
- [x] Full single-page portfolio frontend (9 sections)
- [x] Framer-motion entry animations + hover states
- [x] Responsive layouts (mobile/tablet/desktop)
- [x] Dark theme (matte black + charcoal + electric blue)
- [x] Outfit/Manrope Google Fonts
- [x] Contact form submission with toast feedback
- [x] data-testid on all interactive elements

## Backlog (P1/P2)
- [P2] Add real social media links once provided
- [P2] Multiple project case studies (currently 1 featured)
- [P2] Optional: send email via Resend/SendGrid in addition to MongoDB
- [P2] Blog / writings section
- [P2] Light theme toggle (optional)


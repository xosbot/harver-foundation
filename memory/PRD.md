# Harver Technologies Landing Page - PRD

## Original Problem Statement
Create a landing page showing interactive details about Harver Technologies - a pioneering tech company specializing in Wireless Energy Harvesting with 35+ integrated technology verticals, $2.8B valuation, and global operations across 14 countries.

## User Requirements & Choices
1. **Primary Focus**: Both technologies showcase + company information combined
2. **Interactivity Level**: Advanced animations with scroll-triggered effects and dynamic content
3. **Design Theme**: Classy, Industrial, Big Industry feel with real images (NOT vector-like)
4. **Brand Colors**: Signal Orange (#FF3B00), Jet Black (#050505), Gunmetal borders (#222225)
5. **Backend Functionality**: Yes - Contact/inquiry form with MongoDB database storage

## Architecture

### Tech Stack
- **Frontend**: Next.js 16 (TypeScript) + Tailwind CSS v4
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Animation**: Framer Motion + Lenis Smooth Scrolling + React Fast Marquee
- **Styling**: Swiss Brutalist design system with industrial aesthetic

### Design System (Updated Jan 2026)
- **Background**: #050505 (Jet Black)
- **Surface**: #0C0C0E
- **Primary Accent**: #FF3B00 (Signal Orange)
- **Borders**: #222225 (Gunmetal)
- **Typography**: IBM Plex Sans (body), JetBrains Mono (data), Space Grotesk (headings)
- **Grid System**: Control Room Grid (border-collapse, dense hierarchy)
- **Images**: Real photography (industrial, corporate portraits)

### Key Files
- `/app/frontend/src/app/page.tsx` - Main landing page
- `/app/frontend/src/components/harver/` - All component files
- `/app/backend/server.py` - FastAPI backend with MongoDB

## Core Features Implemented

### Frontend Sections
1. **Header** - Glass navigation with Signal Orange CTA button
2. **Hero** - Industrial power plant background, side stats, kinetic marquee
3. **Stats** - Control Room Grid with animated JetBrains Mono counters
4. **Core Expertise** - Circuit board background, 68% efficiency highlight
5. **Technologies** - Bento grid (6 featured + 24 dense), category filters, modals
6. **Timeline** - Vertical minimalist line with alternating milestones
7. **Leadership** - Real executive portraits with hover effects
8. **Contact Form** - Brutalist inputs, Signal Orange submit button
9. **Footer** - Brand tagline with subtle links

### Backend APIs
- `GET /api/health` - Health check endpoint
- `GET /api/technologies` - Returns 30 technologies data
- `POST /api/contact` - Submits contact inquiry to MongoDB
- `GET /api/inquiries` - Retrieves all inquiries (with .limit(100))

## What's Been Implemented (Jan 2026)
- [x] Industrial hero with real power plant photography
- [x] Stats Control Room Grid with animated counters
- [x] Core Expertise with circuit board imagery
- [x] Bento grid technologies showcase (6 featured + 24 dense)
- [x] Category filtering for technologies
- [x] Minimalist vertical timeline (2012-2026)
- [x] Leadership with real executive portraits
- [x] Brutalist contact form with MongoDB persistence
- [x] Smooth scrolling with Lenis
- [x] Signal Orange accent throughout

## Test Results
- Backend: 100% pass
- Frontend: 100% pass
- Integration: 100% pass
- Design: 100% pass

## Deployment Status
- **Ready for Deployment**: YES
- All blockers resolved (blockchain deps removed, queries optimized, env vars externalized)

## Prioritized Backlog

### P0 (Critical) - DONE
- All core sections with industrial design
- Real photography integration
- Contact form with database storage

### P1 (High Priority) - Future
- Video background option for hero
- Case studies with real deployment images
- Downloadable PDF corporate dossier

### P2 (Medium Priority) - Future
- Multi-language support
- Blog/News section
- Interactive world map

## Next Tasks
1. Add SEO meta tags and Open Graph images
2. Performance optimization (image lazy loading, WebP)
3. Analytics integration

# SESHN Website

## Project Overview
One-page marketing/landing page for the SESHN app — an outdoor/action sports social platform for logging sessions, discovering spots, and sharing with the community. Replacing an underperforming Framer site that was visually weak and turning off potential users despite the concept resonating strongly in person.

## The Problem We're Solving
The concept resonates when people hear about it, but the old site was too sparse/amateur to build credibility. New site needs to convey the quality of the actual MVP and get people excited to sign up for beta.

## Five Sport Categories
1. ❄️ **Snow** — Ski / Snowboard
2. 🌊 **Surf**
3. 🏔️ **Trail** — MTB, hiking, backpacking
4. 💨 **Wind** — Kiteboarding, windsurfing, etc.
5. 🧗 **Rock** — Climbing

## App Features / Nav Tabs
- **Feed** — Social feed of session posts from followed users
- **Discover** — Map-based discovery of trending spots and recent sessions, filterable by sport
- **Edit** — In-app video editor for session highlight clips (NOT YET IMPLEMENTED — no screenshot)
- **Library** — Personal photo/video library organized chronologically by date and location
- **Profile** — Stats (sessions, followers/following), activity type breakdown, location heatmap, session grid

## Assets Available
### Logos (`Assets/`)
- `logo.png` — Icon mark: X/cross pattern in SESHN cyan with 4 sport icons (skis, surfboard, MTB, rock climber)
- `name_logo.png` — Wordmark: "SESHN" in bold bubbly sky-blue font

### Stock Photos (`Assets/`)
- `thijs-kennis-7GZjtBGnTiM-unsplash (1).jpg` → **Snow** (skier in deep powder)
- `sebastian-staines-mfzdRsWsiRA-unsplash (1).jpg` → **Surf** (surfer on wave)
- `frederik-rosar-vrFQA8uMvkE-unsplash (1).jpg` → **Trail** (MTB rider on mountain ridge)
- `uniqsurface-_Jre6T0rQr0-unsplash.jpg` → **Wind** (kiteboarder airborne)
- `sylvain-mauroux-WI8phMvAEMI-unsplash.jpg` → **Rock** (climbers on mountain ridge)

### App Screenshots (`Screenshots/`)
- `IMG_3939.PNG` — Profile view: stats (4 Sessions, 5 Followers), activity icons, location heatmap
- `IMG_3935.PNG` — Feed view: "My Feed / Featured" tabs, session posts
- `IMG_3933.PNG` — Library view: photo/video grid organized by date
- `IMG_3938.PNG` — Session post: Ocean Beach, SF — sunset lifestyle content
- `IMG_3934.PNG` — Discover view: map with activity filter tabs (Snow, Surfing, MTB)
- `IMG_3932.PNG` — Session detail: Palisades Lake Tahoe ski post with map + social stats

## Screenshot Assignments (current site)
- **Hero phones**: `IMG_3939` (front, profile+heatmap) + `IMG_3935` (back, feed)
- **Library section**: `IMG_3933`
- **Share/Feed section**: `IMG_3938` (lifestyle sunset post)
- **Discover section**: `IMG_3934`
- **Profile/Journey section**: `IMG_3932`

## Site Structure (one page)
1. Nav — logo + "Join Beta" CTA
2. Hero — tagline + description + activity form + dual phone mockups
3. Sports Strip — 5 photo cards (one per sport category)
4. Feature: Library — "Every session, beautifully organized."
5. Feature: Share — "Share the moments that matter."
6. Feature: Discover — "Find where it's going off."
7. Feature: Journey — "Track your journey."
8. Beta Signup — dark section, full form (name + email + activity)
9. Footer — logo + tagline + contact

## Design System
- **Primary color**: `#12ADEE` (SESHN sky blue, matched to wordmark/app UI)
- **Primary dark**: `#0D96D1`
- **Primary light**: `#E0F5FD`
- **Background**: `#FFFFFF`
- **Surface tint**: `#F0F9FF` (alternating section backgrounds)
- **Dark section**: `#0F172A` (beta signup CTA)
- **Text**: `#1E293B` (near black)
- **Text secondary**: `#64748B`
- **Font**: Plus Jakarta Sans (Google Fonts) — bold, modern, sporty feel

## Tech Stack
- Pure HTML/CSS/JS — no framework, no build step
- Google Fonts: Plus Jakarta Sans
- Intersection Observer for scroll reveal animations
- GitHub: https://github.com/thopkins98/seshnwebsite

## Beta Form
- **Current state**: Placeholder behavior (console.log + visual success state)
- **TODO**: Set up Google Sheets integration via Google Apps Script web app
- Original Framer site output to Google Sheets — need to replicate this
- Form fields: Name, Email, Primary activity (dropdown)
- Walk user through Google Apps Script setup when ready

## Brand
- Contact: contact@seshnnetworks.com
- Tagline: "Get out there."
- Note: Edit page ("Edit" tab in app nav) not yet implemented — mention video editing in copy but don't dedicate a section to it

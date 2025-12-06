# NovaStack Technologies – 3 Page React Site

A fully responsive 3-page marketing site built for the ByteArc 72-hour technical assignment (Founding Software Engineer role). The requirement was to use React only and deploy the site so that it can be reviewed easily.

---

## Live Demo

- **Live site:** https://novastack-website-ashen.vercel.app
- **Repository:** https://github.com/saidurr1220/novastack-website

---

## Pages

- **Home**

  - Hero section with clear primary CTA
  - Three services cards
  - Two testimonials
  - Final CTA section

- **About**

  - Short company story and context
  - Team section with three team members
  - Mission & vision section
  - CTA leading to the Contact page

- **Contact**
  - Contact form (name, email, message) with client-side validation
  - Success state and inline error messages
  - Form submits to a serverless API route and sends a real email
  - Additional contact info (email, phone, LinkedIn)

---

## Tech Stack

- **Frontend:** React (Vite)
- **Routing:** React Router
- **Styling:** Custom CSS (mobile-first, responsive)
- **Deployment:** Vercel
- **Email:** Resend API via Vercel serverless function (`/api/contact`)

---

## Running Locally

```bash
git clone https://github.com/saidurr1220/novastack-website.git
cd novastack-website
npm install
npm run dev
Then open: http://localhost:5173

Production Build
bash
Copy code
npm run build
npm run preview
This simulates the production build locally.

Contact Form & Email Flow
The React contact form sends a POST request to the serverless endpoint at /api/contact.

The API route is implemented in api/contact.js using Resend.

Environment variable required (configured on Vercel):

RESEND_API_KEY – API key from Resend.

On successful submission, the form:

Validates fields on the client,

Calls the API route,

Shows a success message when the email is sent,

Shows an inline error message if something goes wrong.

Screenshots & Recording
Screenshots are stored under docs/screenshots:

Desktop: docs/screenshots/desktop_view.png

Mobile: docs/screenshots/mobile_view.png

You can view them here:



Screen recording:

Short demo (20–30 seconds) showing:

VS Code folder structure

Terminal with npm run dev or build

Live site: navigate Home → About → Contact and submit the form

Recording link (to be added later):

Screen recording: https://www.loom.com/share/6d0fd11ff267440b8337206b6e57234d?t=7

Design Rationale
I chose a clean, grid-based layout with a dark, slightly glassy theme to keep the three pages visually consistent and focused on content. Reusable components (layout, section headings, cards, form fields) keep the codebase small and easy to maintain while satisfying the assignment’s structure. The spacing and typography are tuned for readability first, with clear primary CTAs on every page. The layout is built mobile-first and then extended with simple breakpoints so it behaves well from small screens up to large desktops. The contact form is wired to a serverless email endpoint to feel like a real production-ready workflow instead of just a fake success state.
```

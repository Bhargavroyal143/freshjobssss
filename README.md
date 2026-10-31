# FreshJobs website

Fresher jobs, internships, company prep guides, mock tests, coding lab, resume tools and more.

## Folder structure

```
freshjobs/
├── index.html            ← the website (open this)
├── assets/
│   ├── css/style.css     ← all styles and animations
│   ├── js/app.js         ← all features
│   └── img/              ← logo.jpg, hero.jpg
├── data/
│   ├── config.js         ← WhatsApp number & social links (EDIT THIS)
│   └── jobs.js           ← job list (add/remove jobs here)
└── pdf-guides/           ← 20 company prep guide PDFs (optional extra)
```

## Hosting

Upload the whole `freshjobs` folder (keep the structure) to any static host:

- **Netlify:** app.netlify.com/drop → drag the folder
- **Vercel:** `vercel` in this folder, or import the GitHub repo
- **GitHub Pages:** push to a repo → Settings → Pages → deploy from `main`
- **Hostinger / cPanel:** upload into `public_html`

To test on your computer, run `npx serve .` (or `python3 -m http.server`) in this folder and open the address it shows.

## Editing

- **WhatsApp & socials:** open `data/config.js` and fill `whatsappNumber` (country code + number, e.g. `919876543210`), `whatsappChannel`, `instagram`, `linkedin`, `youtube`.
- **Jobs:** open `data/jobs.js`, copy one job block, change the fields and give it a new unique `id`.

## Reviews

Pop-ups and the "What freshers say" section show real reviews only (max 40):
- Reviews students submit on the Feedback page (with their permission).
- Reviews you add to `reviews:[...]` in `data/config.js` — only add genuine reviews with the student's consent.
Until reviews exist, the pop-up shows live "now hiring" job alerts instead.

## Payments (Razorpay)

All services and the AI Interview Pass are ₹999. The first 3 AI interviews are free.

1. Sign up at dashboard.razorpay.com and finish KYC (PAN + bank account).
2. Create two **Payment Pages** (Payment Pages → Create): "FreshJobs Service ₹999" and "AI Interview Pass ₹999". Ask for name, phone and email.
3. Optional: in each page's settings set the redirect/success URL to your site, e.g. `https://yoursite.com/?#mock-interview`.
4. Paste the page links into `data/config.js` → `razorpay.serviceLink` and `razorpay.interviewLink`.
5. Every payment shows in your Razorpay dashboard — match the Payment ID the student enters on the site with the dashboard before starting work.

Legal pages required by Razorpay are included: `#terms`, `#privacy`, `#refund`, `#contact`. Fill the WhatsApp number and email in `config.js`.

## What works on your own hosting

Jobs, internships, company guides, monitored mock tests, coding lab (JavaScript, TypeScript, Python, SQL run in the browser), resume checker & builder (PDF download), notes, roadmaps, path finder, sign up / sign in with PIN, services form and referral codes. Accounts and progress are saved in each visitor's browser.

## Needs a backend (not included)

- **AI features** (Ask FreshJobs chat, AI interviewer, AI code judge for Java/C/C++ etc.) — fall back to built-in answers/questions. Add an AI API through a small server to enable them.
- **Owner tools** (add jobs online, members list, feedback, service requests, referral counts) and **login across devices** — need a database such as Firebase.

© 2026 FreshJobs

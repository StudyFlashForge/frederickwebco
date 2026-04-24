# Frederick Web Co. — Portfolio Site

Built with Next.js 14, deployed on Vercel, domain on Namecheap.

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
```
Follow the prompts. Your site will be live on a `.vercel.app` URL within 60 seconds.

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a new GitHub repo
2. Go to vercel.com → Add New Project
3. Import the repo
4. Click Deploy — done

---

## Connect Your Namecheap Domain

1. In Vercel dashboard → your project → Settings → Domains
2. Add `frederickwebco.com` and `www.frederickwebco.com`
3. Vercel gives you DNS records to add
4. In Namecheap → Domain List → Manage → Advanced DNS:
   - Add the A record and CNAME record Vercel gives you
5. Wait 10–30 minutes for DNS to propagate

---

## Wire Up the Contact Form

The form currently just shows a success state. To make it actually send emails, pick one:

### Easiest — Formspree (free tier available)
1. Sign up at formspree.io
2. Create a form, get your form ID
3. In `components/Contact.tsx`, replace the `submit` function:

```tsx
const submit = async (e: React.FormEvent) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSubmitted(true)
}
```

### Alternative — Next.js API Route + Resend
Create `app/api/contact/route.ts` and use Resend (resend.com) to send emails directly.

---

## Customization Checklist

- [ ] Replace `(301) 555-0198` with your real phone number in `components/Contact.tsx`
- [ ] Replace `hello@frederickwebco.com` with your real email
- [ ] Update the service areas in `components/Hero.tsx` if needed
- [ ] Add real photos or a portfolio section once you have client work
- [ ] Connect contact form (Formspree or API route)
- [ ] Add Google Analytics (paste GA4 script into `app/layout.tsx`)

---

## File Structure

```
frederickwebco/
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Design tokens and base styles
├── components/
│   ├── Nav.tsx         # Sticky nav with mobile menu
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # 6-service grid
│   ├── Pricing.tsx     # Build plans + management plans
│   ├── Process.tsx     # 4-step how it works
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
└── package.json
```

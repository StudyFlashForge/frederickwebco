'use client'

const services = [
  { icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>), title: 'Website design & build', desc: 'Custom, mobile-friendly websites built to represent your business and turn visitors into customers.' },
  { icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a15 15 0 010 18M3 12h18"/></svg>), title: 'Domain & hosting setup', desc: 'We handle your domain name, hosting, and SSL certificate so everything just works from day one.' },
  { icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>), title: 'Monthly management', desc: 'Updates, changes, security patches — we keep your site fresh and running so you never have to touch it.' },
  { icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>), title: 'Local SEO', desc: 'Get found when Frederick customers search for what you offer. We optimize for Google Maps and local search.' },
  { icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.99 1.18 2 2 0 012.96 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>), title: 'Same-day support', desc: 'Have a question or need a quick change? Reach us by text or email and get a real response fast.' },
  { icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>), title: 'Google Analytics', desc: 'See how many people visit your site, where they come from, and what they look at — in plain English.' },
]

export default function Services() {
  return (
    <section id="services" style={{ background: '#fff', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>What we do</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Everything your business needs online,<br />handled for you.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
          {services.map((s, i) => (
            <div key={i} style={{ padding: '1.75rem', background: '#fff', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: 40, height: 40, background: 'var(--blue-light)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', marginBottom: '1rem' }}>{s.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: '0.4rem' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const plans = [
  {
    name: 'Starter',
    price: '$399',
    desc: 'Get your business online fast with a clean, simple site.',
    features: ['1–3 pages', 'Mobile friendly', 'Contact form', 'Google Maps embed', 'Domain setup', '1 round of revisions'],
    featured: false,
    cta: 'Get started',
  },
  {
    name: 'Standard',
    price: '$649',
    desc: 'A complete web presence for your business.',
    features: ['4–6 pages', 'Photo gallery', 'Social media links', 'Basic SEO setup', 'Google Analytics', '2 rounds of revisions'],
    featured: true,
    cta: 'Most popular',
  },
  {
    name: 'Business',
    price: '$999',
    desc: 'For businesses ready to grow their online presence.',
    features: ['6–10 pages', 'Blog or booking form', 'Advanced local SEO', 'Google Business setup', 'Priority turnaround', 'Unlimited revisions'],
    featured: false,
    cta: 'Get started',
  },
]

const management = [
  { tier: 'Basic', price: '$75/mo', desc: 'Hosting, domain renewal, security updates, uptime monitoring.' },
  { tier: 'Standard', price: '$125/mo', desc: 'Everything in Basic plus content updates and a monthly report.' },
  { tier: 'Growth', price: '$250/mo', desc: 'Everything in Standard plus SEO monitoring and Google Business management.' },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '5rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
          Pricing
        </p>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(26px, 4vw, 36px)',
          letterSpacing: '-0.02em', lineHeight: 1.2,
        }}>
          Simple, transparent pricing.
        </h2>
      </div>

      {/* Build plans */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: '4rem' }}>
        {plans.map((plan) => (
          <div key={plan.name} style={{
            background: plan.featured ? '#fff' : '#fff',
            border: plan.featured ? '2px solid var(--blue)' : '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '1.75rem',
            position: 'relative',
          }}>
            {plan.featured && (
              <div style={{
                position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
                background: 'var(--blue)', color: '#fff',
                fontSize: 12, fontWeight: 500, padding: '3px 14px',
                borderRadius: 100,
              }}>
                Most popular
              </div>
            )}
            <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: '0.25rem' }}>{plan.name}</h3>
            <div style={{ fontSize: 32, fontWeight: 300, letterSpacing: '-0.03em', margin: '0.5rem 0' }}>
              {plan.price}
              <span style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 400 }}> one-time</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>{plan.desc}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: '1.5rem' }}>
              {plan.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-muted)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill={plan.featured ? 'var(--blue)' : '#e2e8f0'}/>
                    <polyline points="4,7 6,9 10,5" stroke={plan.featured ? '#fff' : '#64748b'} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" style={{
              display: 'block', textAlign: 'center',
              padding: '10px',
              borderRadius: 'var(--radius-sm)',
              fontSize: 14, fontWeight: 500,
              background: plan.featured ? 'var(--blue)' : 'transparent',
              color: plan.featured ? '#fff' : 'var(--text)',
              border: plan.featured ? 'none' : '1px solid var(--border-strong)',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Get started
            </a>
          </div>
        ))}
      </div>

      {/* Monthly management */}
      <div style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '2rem',
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, marginBottom: '0.4rem' }}>Monthly management plans</h3>
          <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>Add a management plan to any build. We keep your site running — you do nothing.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {management.map(m => (
            <div key={m.tier} style={{
              background: 'var(--bg)',
              borderRadius: 'var(--radius-sm)',
              padding: '1.25rem',
              border: '1px solid var(--border)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{m.tier}</span>
                <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--blue)' }}>{m.price}</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

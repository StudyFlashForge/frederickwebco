'use client'

const steps = [
  { num: '01', title: 'We talk', desc: 'Quick conversation about your business, your customers, and what you need. No tech jargon — just plain talk. Takes about 15 minutes.' },
  { num: '02', title: 'We build', desc: 'We design and build your site, usually within 5–7 days. You get a preview link before anything goes live so you can give feedback.' },
  { num: '03', title: 'You approve & launch', desc: "Once you're happy with it, we push it live. We handle the domain, hosting, and make sure everything loads fast and looks great." },
  { num: '04', title: 'We maintain (optional)', desc: 'Sign up for a monthly plan and we keep your site updated, secure, and running. You text us changes, we handle them — same day.' },
]

export default function Process() {
  return (
    <section id="process" style={{ background: '#fff', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>How it works</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>From first call to live site<br />in under a week.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ padding: '2rem 1.75rem', borderRight: i < steps.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontSize: 48, color: 'var(--blue-light)', lineHeight: 1, marginBottom: '1rem', userSelect: 'none' }}>{step.num}</div>
              <h3 style={{ fontSize: 16, fontWeight: 500, marginBottom: '0.6rem' }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

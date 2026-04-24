'use client'

export default function Hero() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '6rem 1.5rem 5rem', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'radial-gradient(ellipse at top right, rgba(26,86,219,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 680, position: 'relative' }}>
        <div className="animate-fade-up delay-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--blue-light)', color: 'var(--blue)', padding: '5px 14px', borderRadius: 100, fontSize: 13, fontWeight: 500, marginBottom: '1.5rem' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
          Serving Frederick, MD & surrounding areas
        </div>
        <h1 className="animate-fade-up delay-2" style={{ fontSize: 'clamp(38px, 6vw, 62px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Your business deserves<br />to be found online.
        </h1>
        <p className="animate-fade-up delay-3" style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 520 }}>
          We build clean, professional websites for local Frederick businesses — fast, affordable, and completely hassle-free. You focus on your work. We handle the web.
        </p>
        <div className="animate-fade-up delay-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#contact" style={{ background: 'var(--blue)', color: '#fff', padding: '13px 28px', borderRadius: 'var(--radius-sm)', fontSize: 15, fontWeight: 500, display: 'inline-block' }}>
            Get a free quote
          </a>
          <a href="#pricing" style={{ background: 'transparent', color: 'var(--text)', padding: '13px 28px', borderRadius: 'var(--radius-sm)', fontSize: 15, border: '1px solid var(--border-strong)', display: 'inline-block' }}>
            See pricing
          </a>
        </div>
        <div className="animate-fade-up delay-5" style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ fontSize: 13, color: 'var(--text-faint)' }}>Trusted by local businesses in:</div>
          {['Downtown Frederick', 'Middletown', 'Urbana', 'Brunswick'].map(area => (
            <span key={area} style={{ fontSize: 13, color: 'var(--text-muted)', padding: '3px 10px', border: '1px solid var(--border)', borderRadius: 100 }}>{area}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

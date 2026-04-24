'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', business: '', email: '', message: '' })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, wire this to an API route or Formspree
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    fontSize: 14,
    border: '1px solid var(--border-strong)',
    borderRadius: 'var(--radius-sm)',
    background: '#fff',
    color: 'var(--text)',
    outline: 'none',
    fontFamily: 'var(--font-sans)',
    transition: 'border-color 0.15s',
  } as React.CSSProperties

  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 500,
    color: 'var(--text-muted)',
    marginBottom: '0.4rem',
  } as React.CSSProperties

  return (
    <section id="contact" style={{ padding: '5rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        {/* Left side */}
        <div>
          <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
            Contact
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(26px, 4vw, 36px)',
            letterSpacing: '-0.02em', lineHeight: 1.2,
            marginBottom: '1.25rem',
          }}>
            Let's get your business online.
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Fill out the form and we'll get back to you within a few hours —
            usually the same day. No commitment, no pressure.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Email', value: 'hello@frederickwebco.com' },
              { label: 'Phone', value: '(301) 555-0198' },
              { label: 'Location', value: 'Frederick, MD' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: 'var(--text-faint)', width: 60 }}>{item.label}</span>
                <span style={{ fontSize: 14, color: 'var(--text)' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{
          background: '#fff',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '2rem',
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{
                width: 48, height: 48,
                background: 'var(--blue-light)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1rem',
              }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <polyline points="4,11 9,16 18,6" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, marginBottom: '0.5rem' }}>Message sent!</h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>We'll get back to you within a few hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>Your name</label>
                  <input name="name" required value={form.name} onChange={handle} placeholder="Jane Smith" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Business name</label>
                  <input name="business" required value={form.business} onChange={handle} placeholder="Jane's Salon" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Email address</label>
                <input name="email" type="email" required value={form.email} onChange={handle} placeholder="jane@example.com" style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
                />
              </div>
              <div>
                <label style={labelStyle}>What do you need?</label>
                <textarea name="message" required value={form.message} onChange={handle}
                  placeholder="Tell us about your business and what you're looking for..."
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-strong)')}
                />
              </div>
              <button type="submit" style={{
                background: 'var(--blue)', color: '#fff',
                padding: '12px', borderRadius: 'var(--radius-sm)',
                fontSize: 15, fontWeight: 500, border: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--blue-dark)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--blue)')}
              >
                Send message
              </button>
              <p style={{ fontSize: 12, color: 'var(--text-faint)', textAlign: 'center' }}>
                We typically respond within a few hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

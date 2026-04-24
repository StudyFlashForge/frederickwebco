'use client'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(250,250,248,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      padding: '0 1.5rem',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
      }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, letterSpacing: '-0.01em' }}>
          Frederick <span style={{ color: 'var(--blue)' }}>Web Co.</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {['Services', 'Pricing', 'Process'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontSize: 14, color: 'var(--text-muted)',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link}
            </a>
          ))}
          <a href="#contact" style={{
            background: 'var(--blue)', color: '#fff',
            padding: '8px 18px', borderRadius: 'var(--radius-sm)',
            fontSize: 14, fontWeight: 500,
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--blue-dark)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--blue)')}
          >
            Get a quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', display: 'none', padding: 4 }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          borderTop: '1px solid var(--border)',
          padding: '1rem 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '0.75rem',
        }}>
          {['Services', 'Pricing', 'Process', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ fontSize: 15, color: 'var(--text-muted)', padding: '4px 0' }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

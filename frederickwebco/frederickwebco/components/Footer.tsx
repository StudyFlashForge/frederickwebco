export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem 1.5rem',
      background: '#fff',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18 }}>
          Frederick <span style={{ color: 'var(--blue)' }}>Web Co.</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {['Services', 'Pricing', 'Process', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              style={{ fontSize: 13, color: 'var(--text-faint)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-faint)')}
            >
              {link}
            </a>
          ))}
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-faint)' }}>
          © {new Date().getFullYear()} Frederick Web Co. — Frederick, MD
        </p>
      </div>
    </footer>
  )
}

export default function LoadingOverlay({ visible = false }) {
  return (
    <div
      className="popup-loading-wrapper"
      style={{
        display: visible ? 'flex' : 'none',
        position: 'fixed',
        inset: 0,
        background: 'rgba(254,253,245,0.9)',
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="loader" style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', animation: 'l4 1.2s ease infinite' }} />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            animation: 'l4 1.2s ease 0.2s infinite',
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            animation: 'l4 1.2s ease 0.4s infinite',
          }}
        />
      </div>
    </div>
  )
}

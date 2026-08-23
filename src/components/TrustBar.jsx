const iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const SEALS = [
  {
    label: 'USDA Organic',
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    label: 'Non-GMO',
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Vegan',
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z" />
        <path d="M14.1 6a7 7 0 0 1 5.5 3.8c1.1 2.6.2 4.4-1 5.3-1.2.9-3.1.8-4.8-.2C12.4 12.3 13.3 8.3 14.1 6Z" />
      </svg>
    ),
  },
  {
    label: 'Gluten-Free',
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M12 3v18" />
        <path d="M12 7c1.4-1.8 3.3-2.6 5-2.2-.2 2.4-1.8 4-5 5.2" />
        <path d="M12 7C10.6 5.2 8.7 4.4 7 4.8c.2 2.4 1.8 4 5 5.2" />
        <path d="M12 12c1.4-1.4 3.2-2 4.8-1.6-.1 2-1.6 3.4-4.8 4.6" />
        <path d="M12 12c-1.4-1.4-3.2-2-4.8-1.6.1 2 1.6 3.4 4.8 4.6" />
        <path d="m4 4 16 16" />
      </svg>
    ),
  },
  {
    label: 'Made in USA',
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

export default function TrustBar() {
  return (
    <div className="seal-row" role="list">
      {SEALS.map((item) => (
        <div key={item.label} className="seal" role="listitem">
          <span className="seal__mark" aria-hidden="true">
            {item.icon}
          </span>
          {item.label}
        </div>
      ))}
    </div>
  )
}

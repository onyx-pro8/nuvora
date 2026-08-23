import { COMPANY } from '../data/site'

export default function LegalAside() {
  return (
    <aside className="legal-aside">
      <h3>{COMPANY.name}</h3>
      <p>{COMPANY.fullAddress}</p>
      <p>
        <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
      </p>
      <p>
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
      </p>
      <p>{COMPANY.hours}</p>
      <p>Charges appear as {COMPANY.name}.</p>
    </aside>
  )
}

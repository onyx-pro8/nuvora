export default function Comparison() {
  return (
    <section className="comparison-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Compare</span>
          <h2 className="section-title title-with-highlight">
            Why Choose <strong>NUVORA</strong>?
          </h2>
          <p className="section-subtitle">
            See how Organic Beet Root Capsules stack up against common competitors.
          </p>
        </div>
        <div className="comparison-table-wrapper animate-item">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="comparison-highlight">NUVORA</th>
                <th>Brand X</th>
                <th>Brand Y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USDA Organic</td>
                <td className="comparison-highlight">
                  <span className="comparison-check">✓</span>
                </td>
                <td>
                  <span className="comparison-x">✗</span>
                </td>
                <td>
                  <span className="comparison-maybe">~</span>
                </td>
              </tr>
              <tr>
                <td>Non-GMO &amp; Vegan</td>
                <td className="comparison-highlight">
                  <span className="comparison-check">✓</span>
                </td>
                <td>
                  <span className="comparison-x">✗</span>
                </td>
                <td>
                  <span className="comparison-x">✗</span>
                </td>
              </tr>
              <tr>
                <td>Gluten-Free</td>
                <td className="comparison-highlight">
                  <span className="comparison-check">✓</span>
                </td>
                <td>
                  <span className="comparison-maybe">~</span>
                </td>
                <td>
                  <span className="comparison-check">✓</span>
                </td>
              </tr>
              <tr>
                <td>Made in the USA</td>
                <td className="comparison-highlight">
                  <span className="comparison-check">✓</span>
                </td>
                <td>
                  <span className="comparison-x">✗</span>
                </td>
                <td>
                  <span className="comparison-maybe">~</span>
                </td>
              </tr>
              <tr>
                <td>2040 mg Extra Strength</td>
                <td className="comparison-highlight">
                  <span className="comparison-check">✓</span>
                </td>
                <td>
                  <span className="comparison-x">✗</span>
                </td>
                <td>
                  <span className="comparison-x">✗</span>
                </td>
              </tr>
              <tr>
                <td>Capsule Form</td>
                <td className="comparison-highlight">
                  <span className="comparison-check">✓</span>
                </td>
                <td>
                  <span className="comparison-maybe">~</span>
                </td>
                <td>
                  <span className="comparison-x">✗</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

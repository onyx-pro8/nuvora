export default function Comparison() {
  return (
    <section className="comparison-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Compare</span>
          <h2 className="section-title title-with-highlight">
            Why Choose <strong>Tokyos Health</strong>?
          </h2>
          <p className="section-subtitle">See how Sleep Bloom stacks up against common competitors.</p>
        </div>
        <div className="comparison-table-wrapper animate-item">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="comparison-highlight">
                  <img
                    src="/images/tokyoshealth-logo.png"
                    alt="Tokyos Health"
                    className="comparison-logo"
                  />
                </th>
                <th>Competitor A</th>
                <th>Competitor B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Natural Ingredients</td>
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
                <td>Doctor Formulated</td>
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
                <td>30-Day Guarantee</td>
                <td className="comparison-highlight">
                  <span className="comparison-check">✓</span>
                </td>
                <td>
                  <span className="comparison-x">✗</span>
                </td>
                <td>
                  <span className="comparison-check">✓</span>
                </td>
              </tr>
              <tr>
                <td>Free Shipping Over $75</td>
                <td className="comparison-highlight">
                  <span className="comparison-check">✓</span>
                </td>
                <td>
                  <span className="comparison-expensive">$9.99</span>
                </td>
                <td>
                  <span className="comparison-expensive">$12.99</span>
                </td>
              </tr>
              <tr>
                <td>VIP Pricing</td>
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
                <td>Non-GMO</td>
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

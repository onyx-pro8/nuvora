import { Link } from 'react-router-dom'
import { BRAND, COMPANY } from '../../data/site'

export default function TermsContent() {
  return (
    <>
      <h2>
        <strong>Overview</strong>
      </h2>
      <p>
        Thank you for choosing {BRAND.name}. Throughout these terms, &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; refer
        to {BRAND.name}, a brand of {COMPANY.name}. We operate this website and online store, providing you with access to
        our full range of content, features, tools, products, and services designed to deliver a premium shopping
        experience (collectively, the &quot;Services&quot;).
      </p>
      <p>
        These terms and conditions, along with any supplemental policies referenced within them (collectively, the
        &quot;Terms of Service&quot; or &quot;Terms&quot;), outline both your rights and your obligations when using the
        Services.
      </p>
      <p>
        We encourage you to review these Terms of Service thoroughly. They contain important details regarding your legal
        rights, including warranty disclaimers and limitations on liability.
      </p>
      <p>
        By accessing, browsing, or otherwise using our Services, you acknowledge and accept these Terms of Service as well
        as our <Link to="/privacy-policy">Privacy Policy</Link>. If you do not accept these Terms or our Privacy Policy,
        please refrain from using our Services.
      </p>

      <h2>
        <strong>Section 1 – Access and Account</strong>
      </h2>
      <p>
        By accepting these Terms of Service, you confirm that you have reached the age of majority in your state or
        province of residence. You agree not to use the Services for any purpose that is illegal or unauthorized under
        applicable law, and you must comply with all laws within your jurisdiction while using the Services.
      </p>
      <p>
        Should you register for an account, you bear full responsibility for safeguarding your login credentials and
        password. All activity conducted through your account is your responsibility. Accounts are non-transferable and
        may not be assigned to any other individual or entity.
      </p>

      <h2>
        <strong>Section 2 – Our Products</strong>
      </h2>
      <p>
        We strive to display our products as accurately as possible across our online store. However, variations in color
        or appearance may occur depending on your device and display settings. Product descriptions, availability, and
        specifications are subject to modification at any time without prior notice, at our sole discretion. We also
        reserve the right to discontinue any product without advance notice.
      </p>

      <h2>
        <strong>Section 3 – Orders</strong>
      </h2>
      <p>
        Placing an order constitutes an offer to purchase from {BRAND.name}. We retain the right to accept or decline any
        order at our discretion, for any reason. Orders that have been accepted and fulfilled are final and cannot be
        canceled. For product returns, please consult our <Link to="/refund-policy">Refund Policy</Link>.
      </p>

      <h2>
        <strong>Section 4 – Prices and Billing</strong>
      </h2>
      <p>
        You will be charged the price displayed at the time your order is submitted. All prices are quoted in U.S.
        dollars and are exclusive of applicable taxes and shipping fees unless specifically noted otherwise. We reserve
        the right to adjust product pricing at any time without prior notice.
      </p>
      <p>
        You are responsible for ensuring that all purchase and account details you provide are accurate, current, and
        complete. This includes keeping your email address, payment card number, and expiration date up to date so we can
        process your orders and reach you when necessary.
      </p>

      <h2>
        <strong>Section 5 – Shipping and Delivery</strong>
      </h2>
      <p>
        Estimated delivery dates are provided as approximations and are not guaranteed. {BRAND.name} assumes no
        responsibility for shipping delays attributable to carriers, customs clearance, adverse weather, or other
        circumstances beyond our control.
      </p>

      <h2>
        <strong>Section 6 – Subscription Services</strong>
      </h2>
      <p>
        Certain products may be offered through a subscription program. By placing your monthly recurring order — you
        will be charged the displayed subscription price now and every 28 days thereafter until you cancel your
        subscription. You will receive an electronic notification 5 to 7 days prior to each transaction and a receipt
        after each successful transaction. Subscriptions are only activated when explicitly selected during checkout. By
        enrolling, you authorize us to charge your payment method on a recurring basis until you cancel.
      </p>
      <p>
        Any promotional items or complimentary gifts are included with your initial order only, unless expressly stated
        otherwise. You may cancel your subscription at any time by contacting us via email or our{' '}
        <Link to="/cancellation-request">Easy Cancel</Link> page. Cancellation will be processed before your next
        scheduled billing date.
      </p>

      <h2>
        <strong>Section 7 – Intellectual Property</strong>
      </h2>
      <p>
        All materials on this website, including but not limited to text, graphics, logos, images, audio, digital
        downloads, data compilations, and software, are owned by {BRAND.name} or our content licensors and are protected
        under United States and international copyright and intellectual property laws. Reproduction, distribution,
        modification, creation of derivative works, or public display of any content without our prior written consent is
        strictly prohibited. Usage is limited to personal, non-commercial purposes only.
      </p>

      <h2>
        <strong>Section 8 – Optional Tools</strong>
      </h2>
      <p>
        From time to time, we may offer access to third-party tools that we do not monitor, control, or manage. You
        acknowledge that such tools are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without
        warranties, representations, or conditions of any kind. We accept no liability arising from or connected to your
        use of any third-party tools made available through our Services.
      </p>

      <h2>
        <strong>Section 9 – Third-Party Links</strong>
      </h2>
      <p>
        Our Services may feature content, products, or services that originate from third parties. Links on this website
        may redirect you to external sites that are not affiliated with or endorsed by us. We do not review or evaluate
        such third-party content for accuracy or completeness, and we disclaim all liability and responsibility for
        third-party materials and websites.
      </p>

      <h2>
        <strong>Section 10 – Third-Party Service Providers</strong>
      </h2>
      <p>
        You acknowledge that your use of third-party services, including but not limited to payment processors, is
        governed by those providers&apos; own terms and conditions. {BRAND.name} and its affiliated service providers
        disclaim any liability arising from transactions processed through third-party platforms.
      </p>

      <h2>
        <strong>Section 11 – Privacy Policy</strong>
      </h2>
      <p>
        Any personal information you provide through our store is handled in accordance with our{' '}
        <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>
        <strong>Section 12 – Feedback</strong>
      </h2>
      <p>
        By submitting any feedback, suggestions, or ideas to {BRAND.name}, you grant us a perpetual, worldwide,
        sublicensable, royalty-free license to use, adapt, publish, and distribute such contributions for any purpose,
        without any obligation to provide compensation or attribution.
      </p>

      <h2>
        <strong>Section 13 – Errors, Inaccuracies and Omissions</strong>
      </h2>
      <p>
        Information on our website or within the Services may occasionally contain typographical errors, inaccuracies, or
        omissions related to product descriptions, pricing, promotions, offers, or availability. We reserve the right to
        correct such errors and to modify or update information, including canceling orders based on inaccurate details,
        at any time and without prior notice.
      </p>

      <h2>
        <strong>Section 14 – Prohibited Uses</strong>
      </h2>
      <p>
        Beyond the restrictions outlined elsewhere in these Terms, you may not use our website or its content: (a) for
        any illegal purpose; (b) to encourage or facilitate unlawful activity by others; (c) to violate any applicable
        international, federal, state, provincial, or local laws or regulations; (d) to infringe upon our intellectual
        property rights or those of any third party; (e) to harass, abuse, threaten, defame, intimidate, or discriminate
        against any person; (f) to provide false or misleading information; (g) to introduce viruses, malware, or other
        harmful code; (h) to engage in spamming, phishing, or data scraping; (i) for any indecent or unethical purpose;
        or (j) to bypass or undermine the security features of the Services.
      </p>

      <h2>
        <strong>Section 15 – Termination</strong>
      </h2>
      <p>
        These Terms remain in full force until terminated by either party. You may end these Terms at any time by
        informing us that you wish to discontinue use of our Services. We reserve the right to terminate or suspend your
        access at any time, without prior notice or liability, for any reason.
      </p>

      <h2>
        <strong>Section 16 – Disclaimer of Warranties</strong>
      </h2>
      <p>
        THE SERVICES AND ALL PRODUCTS AVAILABLE THROUGH THEM ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
        AVAILABLE&quot; BASIS, WITHOUT ANY REPRESENTATIONS, WARRANTIES, OR CONDITIONS, WHETHER EXPRESS OR IMPLIED. THIS
        INCLUDES, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        DURABILITY, TITLE, AND NON-INFRINGEMENT.
      </p>
      <p>
        Our products are classified as dietary supplements and are not designed to diagnose, treat, cure, or prevent any
        medical condition. Claims about our products have not been evaluated by the Food and Drug Administration (FDA).
        We recommend consulting a qualified healthcare professional before beginning any supplement regimen.
      </p>

      <h2>
        <strong>Section 17 – Limitation of Liability</strong>
      </h2>
      <p>
        Under no circumstances shall {BRAND.name}, {COMPANY.name}, its directors, officers, employees, affiliates,
        agents, contractors, interns, suppliers, service providers, or licensors be held liable for any injury, loss,
        claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any nature, including
        but not limited to lost profits, lost revenue, lost savings, data loss, replacement costs, or comparable damages,
        whether arising from contract, tort, strict liability, or any other legal theory, in connection with your use of
        the Services or any products obtained through them.
      </p>

      <h2>
        <strong>Section 18 – Indemnification</strong>
      </h2>
      <p>
        You agree to indemnify, defend, and hold harmless {BRAND.name} along with {COMPANY.name}, our parent company,
        subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers,
        subcontractors, suppliers, interns, and employees from any claims, demands, or expenses, including reasonable
        legal fees, arising from or related to your violation of these Terms of Service or any documents incorporated by
        reference, or your infringement of any law or third-party rights.
      </p>

      <h2>
        <strong>Section 19 – Severability</strong>
      </h2>
      <p>
        If any provision of these Terms of Service is found to be unlawful, void, or unenforceable, that provision will
        nevertheless be enforced to the maximum extent allowed by applicable law. The unenforceable portion will be
        considered severed from these Terms, and this determination will not impair the validity or enforceability of any
        remaining provisions.
      </p>

      <h2>
        <strong>Section 20 – Waiver; Entire Agreement</strong>
      </h2>
      <p>
        Our decision not to exercise or enforce any right or provision within these Terms of Service does not constitute a
        waiver of that right or provision. These Terms of Service, together with any policies or operating rules published
        on this website or in connection with the Services, represent the complete agreement and understanding between you
        and {BRAND.name}.
      </p>

      <h2>
        <strong>Section 21 – Assignment</strong>
      </h2>
      <p>
        You may not assign, delegate, or transfer these Terms or any associated rights or obligations without obtaining
        our prior written consent. {BRAND.name} may freely assign these Terms and all related rights and obligations
        without restriction.
      </p>

      <h2>
        <strong>Section 22 – Governing Law</strong>
      </h2>
      <p>
        These Terms of Service and any supplemental agreements through which we provide Services to you are governed by
        and interpreted in accordance with the laws of the State of {COMPANY.state}, United States. Any legal disputes
        arising under these Terms fall under the exclusive jurisdiction of the courts located in the State of{' '}
        {COMPANY.state}.
      </p>

      <h2>
        <strong>Section 23 – Changes to Terms of Service</strong>
      </h2>
      <p>
        We retain the right to revise, update, or modify any portion of these Terms of Service at our sole discretion by
        publishing changes on our website. You are responsible for reviewing this page periodically to stay informed of
        any updates. Continued use of or access to our website or Services after such modifications are posted constitutes
        your acceptance of the revised Terms.
      </p>

      <h2>
        <strong>Section 24 – Contact Information</strong>
      </h2>
      <p>
        For any questions regarding these Terms of Service, please reach out to us at{' '}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
      </p>
      <p>
        <strong>{BRAND.name}</strong> ({COMPANY.name})
        <br />
        {COMPANY.addressLine1}, {COMPANY.addressLine2}
        <br />
        Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
      </p>
    </>
  )
}

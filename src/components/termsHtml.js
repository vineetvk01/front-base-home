/** @jsxImportSource theme-ui */
import React from 'react';
import styles, { CONTACT_EMAIL } from './legalStyles';

// Sending rules (sections 6 and 7) are the heart of these terms: on shared
// sending infrastructure one publisher mailing a purchased list damages
// delivery for everyone, so the right to review, throttle and suspend has to be
// stated plainly rather than buried in a general acceptable-use clause.
const EFFECTIVE_DATE = 'November 21, 2026';

// Plan figures are repeated from the pricing section of the landing page. If
// those change, change them here too — the terms must not contradict the page
// the customer bought from.
const PLAN_TERMS = {
  overagePerThousand: '$0.40',
  trialDays: 14,
};

const SECTIONS = [
  { id: 'general', title: 'Who we are and what these terms cover' },
  { id: 'account', title: 'Eligibility and your account' },
  { id: 'plans', title: 'Plans, sends and billing' },
  { id: 'trial', title: 'Trials, cancellation and refunds' },
  { id: 'your-content', title: 'Your content and your list' },
  { id: 'sending', title: 'Sending rules' },
  { id: 'deliverability', title: 'Deliverability, monitoring and suspension' },
  { id: 'acceptable-use', title: 'Acceptable use of the Services' },
  { id: 'sites', title: 'Hosted sites and custom domains' },
  { id: 'paid-subscriptions', title: 'Paid subscriptions to your newsletter' },
  { id: 'ai', title: 'AI features' },
  { id: 'api', title: 'API, integrations and rate limits' },
  { id: 'privacy', title: 'Privacy and data protection' },
  { id: 'availability', title: 'Changes to the Services and availability' },
  { id: 'ipr', title: 'Intellectual property' },
  { id: 'termination', title: 'Termination' },
  { id: 'disclaimers', title: 'Disclaimers and limitation of liability' },
  { id: 'indemnity', title: 'Indemnity' },
  { id: 'general-terms', title: 'General terms' },
  { id: 'contact', title: 'Contact' },
];

export default function Terms() {
  return (
    <div sx={styles.page}>
      <div sx={styles.wrap}>
        <h1 sx={styles.h1}>Terms of Service</h1>
        <p sx={styles.meta}>Effective date: {EFFECTIVE_DATE}</p>
        <p sx={styles.meta}>
          An agreement between you and Frontbase (&ldquo;Frontbase&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;).
        </p>

        <div sx={styles.summary}>
          <p sx={styles.summaryTitle}>The short version</p>
          <p sx={styles.p}>
            Frontbase lets you write and send a newsletter, host its archive and
            signup pages, and automate what happens when someone subscribes. You
            pay for the emails you send. Your content and your subscriber list
            stay yours, and we do not email your subscribers for our own
            purposes.
          </p>
          <p sx={{ ...styles.p, mb: 0 }}>
            In return, the one thing we ask most firmly: only send to people who
            actually agreed to hear from you. Purchased, rented and scraped
            lists are not allowed, because sending to them damages delivery for
            every other publisher on the platform. The full version follows.
          </p>
        </div>

        <ol sx={styles.toc}>
          {SECTIONS.map((section) => (
            <li key={section.id} sx={styles.tocItem}>
              <a href={`#${section.id}`} sx={styles.tocLink}>
                {section.title}
              </a>
            </li>
          ))}
        </ol>

        <h2 id="general" sx={styles.h2}>
          1. Who we are and what these terms cover
        </h2>
        <p sx={styles.p}>
          These Terms of Service (the &ldquo;Terms&rdquo;) govern your access to
          and use of the Frontbase website, application, APIs, hosted newsletter
          sites and related services (together, the &ldquo;Services&rdquo;).
          They form a contract between you and Frontbase. By creating an account
          or using the Services you accept these Terms and our{' '}
          <a href="/privacy" sx={styles.link}>
            Privacy Policy
          </a>
          . If you do not accept them, do not use the Services.
        </p>
        <p sx={styles.p}>
          If you are agreeing on behalf of a company or other organisation, you
          confirm you have authority to bind it, and &ldquo;you&rdquo; means that
          organisation.
        </p>
        <p sx={styles.p}>
          We may update these Terms as the product and the law change. If a
          change is material we will tell you by email or in the application
          before it takes effect. Using the Services after the effective date
          means the updated Terms apply to you; if you do not agree, you can
          export your data and close your account.
        </p>

        <h2 id="account" sx={styles.h2}>
          2. Eligibility and your account
        </h2>
        <p sx={styles.p}>
          You must be at least 18 years old to open an account on your own
          behalf. Between 16 and 18 you may use the Services only with the
          consent of a parent or guardian who accepts these Terms. We do not
          knowingly provide the Services to anyone under 16.
        </p>
        <p sx={styles.p}>
          You are responsible for the accuracy of your account details, for
          keeping your credentials secure, and for everything that happens under
          your account, including the actions of any team member you invite. Use
          a working email address — we rely on it for service and billing notices
          — and tell us promptly if you believe your account has been accessed
          without your permission. Do not impersonate anyone or register on
          behalf of someone else without their authority.
        </p>

        <h2 id="plans" sx={styles.h2}>
          3. Plans, sends and billing
        </h2>
        <p sx={styles.p}>
          Frontbase is priced by the number of emails you send, not by the size
          of your subscriber list. Each paid plan includes a monthly send
          allowance and unlimited subscribers. Current plans and allowances are
          shown on our pricing page and form part of these Terms.
        </p>
        <ul sx={styles.ul}>
          <li sx={styles.li}>
            <strong>Allowances and overage.</strong> Sends beyond your monthly
            allowance are charged at {PLAN_TERMS.overagePerThousand} per 1,000
            emails, or you can upgrade. Unused sends do not roll over to the
            next month and have no cash value.
          </li>
          <li sx={styles.li}>
            <strong>Billing period.</strong> Monthly plans are billed monthly in
            advance; annual plans are billed yearly in advance. Fees are charged
            to the payment method on file and are exclusive of any applicable
            taxes, which we add where required.
          </li>
          <li sx={styles.li}>
            <strong>Changing plans.</strong> Upgrades take effect immediately and
            we prorate the difference. Downgrades take effect at the end of your
            current billing period, so you keep what you have already paid for.
          </li>
          <li sx={styles.li}>
            <strong>Price changes.</strong> We may change our prices, but not
            during a period you have already paid for. We will give you at least
            30 days&rsquo; notice before a change applies to your account, and
            you may cancel before it takes effect.
          </li>
          <li sx={styles.li}>
            <strong>Failed payments.</strong> If a payment fails we may retry it
            and may pause sending until the account is current. We will tell you
            before pausing anything.
          </li>
        </ul>
        <p sx={styles.p}>
          Payment processing is handled by our payment processor, and your use of
          it is subject to that provider&rsquo;s terms. We do not store full card
          numbers.
        </p>

        <h2 id="trial" sx={styles.h2}>
          4. Trials, cancellation and refunds
        </h2>
        <p sx={styles.p}>
          Paid plans start with a {PLAN_TERMS.trialDays}-day free trial that does
          not require a card. The trial exists so you can evaluate the Services
          before paying for them, and it is subject to fair-use sending limits so
          it cannot be used to send bulk campaigns for free.
        </p>
        <p sx={styles.p}>
          You can cancel at any time from your account settings, without
          contacting us. Cancellation stops future charges and takes effect at
          the end of your current billing period — your account stays active
          until then, after which it becomes read-only so you can still export
          your subscribers, issues and statistics.
        </p>
        <p sx={styles.p}>
          Because fees are charged in advance for a period of access, we do not
          give pro-rata refunds for a partly used period, for unused sends, or
          for a plan you forgot to cancel. If we are at fault — for example you
          were charged twice, or a serious failure on our side stopped you
          sending — contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} sx={styles.link}>
            {CONTACT_EMAIL}
          </a>{' '}
          and we will put it right, by refund where that is the fair remedy.
          Nothing here limits any refund right you have under the consumer law of
          your country.
        </p>

        <h2 id="your-content" sx={styles.h2}>
          5. Your content and your list
        </h2>
        <p sx={styles.p}>
          Everything you create and upload — issues, drafts, images, templates,
          automation configuration — and your subscriber list remain yours. We
          claim no ownership of them.
        </p>
        <p sx={styles.p}>
          You give us only the licence we need to operate the Services for you:
          to host, store, reproduce, adapt for display across devices and email
          clients, and transmit your content so that it reaches the subscribers
          you send it to and appears on the pages we host for you. That licence
          lasts only while you keep the content on Frontbase, apart from backups
          that age out on their normal cycle.
        </p>
        <p sx={styles.p}>
          We do not sell your content or your list, do not email your subscribers
          for our own purposes, and do not use one publisher&rsquo;s list for the
          benefit of another. We do not use your content or your subscriber data
          to train generative models.
        </p>
        <p sx={styles.p}>
          You are responsible for your content: that you have the rights to it,
          that it is lawful where your readers are, and that it does not infringe
          anyone else&rsquo;s rights. We do not review newsletters before they go
          out and we do not endorse them.
        </p>

        <h2 id="sending" sx={styles.h2}>
          6. Sending rules
        </h2>
        <p sx={styles.p}>
          These rules are a condition of using the Services, not a best-practice
          suggestion. By sending through Frontbase you confirm that:
        </p>
        <ul sx={styles.ul}>
          <li sx={styles.li}>
            <strong>You have permission.</strong> Every recipient asked to hear
            from you — they subscribed through a form, bought from you, or
            otherwise gave you a lawful basis to email them — and you can show
            where and when that happened if we ask.
          </li>
          <li sx={styles.li}>
            <strong>The list is yours.</strong> You will not upload purchased,
            rented, scraped, co-registered or otherwise third-party lists, and
            you will not send to addresses harvested from the web.
          </li>
          <li sx={styles.li}>
            <strong>Your headers are honest.</strong> Your from name, from
            address, reply-to and subject line accurately identify you and the
            message, and you will not disguise the origin of an email.
          </li>
          <li sx={styles.li}>
            <strong>Opting out works.</strong> You will keep the unsubscribe link
            in your emails and will not try to obscure or defeat it. Unsubscribes
            and spam complaints are suppressed permanently, including if the
            address is imported again later.
          </li>
          <li sx={styles.li}>
            <strong>You follow the law.</strong> You are responsible for
            complying with the email and privacy laws that apply to you and your
            readers, including CAN-SPAM, CASL, the UK and EU GDPR and PECR where
            relevant, and for including any sender identification or postal
            address those laws require.
          </li>
        </ul>
        <p sx={styles.p}>
          You may not use the Services to send phishing or fraudulent messages,
          malware, chain letters, pyramid or get-rich-quick schemes, or to
          promote content that is unlawful, deceptive, or that we are not willing
          to put our sending infrastructure behind. We may publish a more
          detailed list of restricted categories and update it as abuse patterns
          change.
        </p>

        <h2 id="deliverability" sx={styles.h2}>
          7. Deliverability, monitoring and suspension
        </h2>
        <p sx={styles.p}>
          Frontbase sends on shared infrastructure and shared reputation. One
          publisher mailing people who never asked to hear from them degrades
          inbox placement for everyone else, so we actively protect it.
        </p>
        <p sx={styles.p}>
          We monitor bounce rates, spam complaint rates and other delivery
          signals, and we may: review a campaign before or after it sends; slow
          or stagger sending; require you to verify your sending domain or your
          consent records; cap your volume; require re-confirmation of an
          imported list; or pause sending on your account. Where it is safe to do
          so we will tell you first and explain what we need; where a send is
          actively causing harm we may stop it immediately and explain
          afterwards.
        </p>
        <p sx={styles.p}>
          We do not guarantee that any particular email reaches any particular
          inbox. Placement is decided by receiving mail providers using signals
          outside our control, including your own content, your sending history
          and how your readers engage.
        </p>

        <h2 id="acceptable-use" sx={styles.h2}>
          8. Acceptable use of the Services
        </h2>
        <p sx={styles.p}>You will not:</p>
        <ul sx={styles.ul}>
          <li sx={styles.li}>
            Access or tamper with non-public areas of the Services, our systems
            or our providers&rsquo; systems.
          </li>
          <li sx={styles.li}>
            Probe, scan or test the vulnerability of any system or network, or
            breach or circumvent any security or authentication measure, except
            under a security disclosure process we have agreed with you in
            writing.
          </li>
          <li sx={styles.li}>
            Interfere with or disrupt the Services, or place an unreasonable load
            on them, including by automating the creation of accounts or content.
          </li>
          <li sx={styles.li}>
            Access the Services by means other than our published interfaces, or
            resell, sublicense or white-label them without our written agreement.
          </li>
          <li sx={styles.li}>
            Reverse engineer, decompile or attempt to extract our source code,
            except to the extent that restriction is prohibited by law.
          </li>
          <li sx={styles.li}>
            Use the Services in breach of export control or sanctions laws.
          </li>
        </ul>
        <p sx={styles.p}>
          We may access, preserve and disclose information where we reasonably
          believe it is necessary to comply with the law or valid legal process,
          to enforce these Terms and investigate suspected breaches, to detect or
          address fraud, abuse, security or technical problems, to respond to
          your support requests, or to protect the rights, property or safety of
          Frontbase, our users or the public. We may report unlawful activity to
          the relevant authorities.
        </p>
        <p sx={styles.p}>
          Subject to these Terms, we grant you a limited, worldwide, revocable,
          non-exclusive, non-transferable and non-sublicensable licence to use
          the Services for your own personal or business newsletter.
        </p>

        <h2 id="sites" sx={styles.h2}>
          9. Hosted sites and custom domains
        </h2>
        <p sx={styles.p}>
          Your plan includes a hosted signup page, archive and per-issue pages,
          which you can serve from your own domain. You are responsible for
          holding that domain, for the DNS records you point at us, and for
          everything published on those pages. If you stop using Frontbase you
          are responsible for redirecting or replacing the domain; we are not
          obliged to keep serving your pages after your account closes.
        </p>

        <h2 id="paid-subscriptions" sx={styles.h2}>
          10. Paid subscriptions to your newsletter
        </h2>
        <p sx={styles.p}>
          Where your plan lets you charge readers for access, you connect your
          own Stripe account and the contract for that subscription is between
          you and your reader. We are not a party to it. You are responsible for
          what you promise those readers, for delivering it, for your own refunds
          and chargebacks, and for the taxes due on that revenue. We do not take
          a percentage of your subscription revenue — you continue to pay us only
          for sends under your plan.
        </p>

        <h2 id="ai" sx={styles.h2}>
          11. AI features
        </h2>
        <p sx={styles.p}>
          Some features use AI models to draft copy, suggest subject lines or
          summarise material, including models operated by third-party providers.
          Output is generated automatically, may be wrong or unoriginal, and is
          not reviewed by us. You are responsible for reading and editing
          anything produced this way before you send it, and the result is your
          content under section 5 once you keep it. Availability and limits of
          these features may change.
        </p>

        <h2 id="api" sx={styles.h2}>
          12. API, integrations and rate limits
        </h2>
        <p sx={styles.p}>
          Where your plan includes API, webhook or MCP access, you must keep your
          keys secret, stay within published rate limits, and not use the API to
          build a product that substitutes for the Services. We may change,
          version or deprecate API endpoints, and will give reasonable notice of
          breaking changes where we can.
        </p>
        <p sx={styles.p}>
          If you connect a third-party integration, your use of that service is
          governed by its own terms, and you authorise us to exchange the data
          the integration needs in order to work. We are not responsible for
          third-party services or for the content of sites we link to.
        </p>

        <h2 id="privacy" sx={styles.h2}>
          13. Privacy and data protection
        </h2>
        <p sx={styles.p}>
          Our{' '}
          <a href="/privacy" sx={styles.link}>
            Privacy Policy
          </a>{' '}
          explains what we collect and why. In short: we are the data controller
          for information about you as a customer, and we act as your data
          processor for the subscriber data you bring to the platform. You are
          the controller of that subscriber data, which means you decide what is
          collected and are responsible for having a lawful basis to hold and
          email it, and for giving your subscribers the privacy information their
          law requires.
        </p>
        <p sx={styles.p}>
          Where you need a data processing agreement, request one at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} sx={styles.link}>
            {CONTACT_EMAIL}
          </a>
          ; once signed it governs our processing of subscriber data and prevails
          over this section if the two conflict.
        </p>

        <h2 id="availability" sx={styles.h2}>
          14. Changes to the Services and availability
        </h2>
        <p sx={styles.p}>
          We develop the Services continuously, and features may be added,
          changed or removed. If we remove something you depend on materially, we
          will give you reasonable notice and, where we can, a way to export what
          it held. We need to perform maintenance from time to time, during which
          parts of the Services may be unavailable; we try to schedule it outside
          peak sending hours. Unless we have separately agreed a service level
          with you in writing, the Services are provided without an uptime
          guarantee.
        </p>

        <h2 id="ipr" sx={styles.h2}>
          15. Intellectual property
        </h2>
        <p sx={styles.p}>
          All rights in the Services themselves — the software, design and
          documentation, excluding your content — are and remain ours and our
          licensors&rsquo;. The Frontbase name, logo and other marks are ours,
          and nothing in these Terms grants you the right to use them beyond
          describing that you use the Services. Any feedback you send us about
          the product may be used freely, without obligation or payment to you.
        </p>

        <h2 id="termination" sx={styles.h2}>
          16. Termination
        </h2>
        <p sx={styles.p}>
          You may stop using the Services and close your account at any time from
          your account settings. We may suspend or terminate your account if you
          materially breach these Terms — in particular the sending rules in
          section 6 — if your use puts the platform, its deliverability or other
          users at risk, if payment is unpaid after notice, or if we are required
          to by law. Except where a breach is causing active harm or the law
          requires otherwise, we will give you notice and, where the problem can
          be fixed, a chance to fix it.
        </p>
        <p sx={styles.p}>
          On termination your right to use the Services ends. We will give you a
          reasonable period to export your subscribers, issues and statistics
          unless the account was terminated for serious abuse, after which your
          data is deleted as described in the Privacy Policy. Sections that by
          their nature should survive — content ownership, intellectual property,
          disclaimers, liability, indemnity and the general terms — survive
          termination.
        </p>

        <h2 id="disclaimers" sx={styles.h2}>
          17. Disclaimers and limitation of liability
        </h2>
        <p sx={styles.p}>
          The Services are provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo;. To the fullest extent permitted by law we disclaim
          all warranties, express or implied, including merchantability, fitness
          for a particular purpose, non-infringement, and any warranty that the
          Services will be uninterrupted, error-free, or that any email will be
          delivered to or displayed in any particular inbox.
        </p>
        <p sx={styles.p}>
          To the fullest extent permitted by law, neither party is liable for
          indirect, incidental, special, consequential or punitive damages, or
          for lost profits, lost revenue, lost subscribers or lost goodwill. Our
          total liability arising out of or relating to the Services in any
          twelve-month period is limited to the amount you paid us for the
          Services in that period.
        </p>
        <p sx={styles.p}>
          Nothing in these Terms excludes or limits liability that cannot be
          excluded or limited by law, including liability for death or personal
          injury caused by negligence, or for fraud. Some jurisdictions do not
          allow certain exclusions, in which case the exclusions above apply only
          as far as that jurisdiction permits.
        </p>

        <h2 id="indemnity" sx={styles.h2}>
          18. Indemnity
        </h2>
        <p sx={styles.p}>
          You agree to indemnify and hold harmless Frontbase and its suppliers
          from claims, liabilities, damages and reasonable legal costs arising
          from your content, your newsletter, your subscriber list, or your use
          of the Services in breach of these Terms or applicable law — including
          any claim that you emailed someone without permission. We will notify
          you of any such claim, and we may take over its defence at our own
          expense, in which case you will cooperate with us in good faith.
        </p>

        <h2 id="general-terms" sx={styles.h2}>
          19. General terms
        </h2>
        <ul sx={styles.ul}>
          <li sx={styles.li}>
            <strong>Entire agreement.</strong> These Terms, the Privacy Policy
            and any data processing agreement or written order between us are the
            whole agreement about the Services and replace any earlier
            understanding.
          </li>
          <li sx={styles.li}>
            <strong>Severability.</strong> If any provision is held
            unenforceable, the rest continues in force and the provision is
            applied as far as the law allows.
          </li>
          <li sx={styles.li}>
            <strong>No waiver.</strong> Not enforcing a right on one occasion is
            not a waiver of it.
          </li>
          <li sx={styles.li}>
            <strong>Force majeure.</strong> Neither party is liable for failing
            to perform, other than to pay money owed, because of events beyond
            its reasonable control, including natural disasters, war, civil
            unrest, labour disputes, acts of government, and failures of networks,
            power or upstream providers.
          </li>
          <li sx={styles.li}>
            <strong>Assignment.</strong> You may not assign these Terms without
            our written consent. We may assign them to an affiliate or in
            connection with a merger, acquisition or sale of assets.
          </li>
          <li sx={styles.li}>
            <strong>No third-party beneficiaries.</strong> These Terms do not
            give rights to anyone other than you and us.
          </li>
          <li sx={styles.li}>
            <strong>Notices.</strong> We may give notice by email to the address
            on your account or by posting in the application. Send legal notices
            to us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} sx={styles.link}>
              {CONTACT_EMAIL}
            </a>
            .
          </li>
          <li sx={styles.li}>
            <strong>Governing law and disputes.</strong> These Terms are governed
            by the laws applicable at Frontbase&rsquo;s registered place of
            business, without regard to conflict-of-law rules, and the courts of
            that place have exclusive jurisdiction over any dispute, except that
            either party may seek injunctive relief wherever necessary to protect
            its intellectual property. Nothing here removes any right you have to
            bring a claim in the courts of your own country where consumer law
            gives you that right.
          </li>
        </ul>

        <h2 id="contact" sx={styles.h2}>
          20. Contact
        </h2>
        <p sx={styles.p}>
          Questions about these Terms, a data processing agreement, or anything
          else: email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} sx={styles.link}>
            {CONTACT_EMAIL}
          </a>
          . We aim to answer within one business day.
        </p>
      </div>
    </div>
  );
}

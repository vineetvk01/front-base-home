/** @jsxImportSource theme-ui */
import React from 'react';
import styles, { CONTACT_EMAIL } from './legalStyles';

// The two-role split (controller for publishers, processor for subscriber
// lists) is the backbone of this document — for a sending platform, every other
// section depends on which of the two a given piece of data falls under.
const EFFECTIVE_DATE = 'November 21, 2026';

export default function Privacy() {
  return (
    <div sx={styles.page}>
      <div sx={styles.wrap}>
        <h1 sx={styles.h1}>Privacy Policy</h1>
        <p sx={styles.meta}>Effective date: {EFFECTIVE_DATE}</p>
        <p sx={styles.meta}>
          This Privacy Policy is provided by Frontbase (&ldquo;Frontbase&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;).
        </p>

        <div sx={styles.summary}>
          <p sx={styles.summaryTitle}>The short version</p>
          <p sx={styles.p}>
            Frontbase is a newsletter platform. Publishers use it to write,
            schedule and send email to people who subscribed to them, and to
            host their archive and signup pages. That means we handle two very
            different kinds of personal data:
          </p>
          <ul sx={styles.ul}>
            <li sx={styles.li}>
              <strong>Data about publishers</strong> — the people and businesses
              who hold a Frontbase account. We decide how this is used, so we
              are the data controller for it.
            </li>
            <li sx={styles.li}>
              <strong>Data about subscribers</strong> — the readers on a
              publisher&rsquo;s list. The publisher decides what is collected and
              what is sent; we only process it on their instructions, as their
              data processor.
            </li>
          </ul>
          <p sx={{ ...styles.p, mb: 0 }}>
            We do not sell personal data, we do not sell or rent contact lists,
            and we never market our own products to a publisher&rsquo;s
            subscribers.
          </p>
        </div>

        <h2 sx={styles.h2}>1. Who and what this policy covers</h2>
        <p sx={styles.p}>
          This policy describes the information we collect when you use the
          Frontbase website, application, APIs and related services (together,
          the &ldquo;Services&rdquo;), how we store, use, share and delete it,
          and the choices you have. It applies to our marketing site, to the
          Frontbase application, and to the newsletter websites and signup pages
          we host on a publisher&rsquo;s behalf.
        </p>
        <p sx={styles.p}>
          It does not cover what an individual publisher does with their own
          list, or the content of the newsletters they choose to send. For that,
          see the privacy policy of the publisher whose newsletter you receive.
        </p>

        <h2 sx={styles.h2}>2. Our two roles</h2>
        <h3 sx={styles.h3}>Where we are the controller</h3>
        <p sx={styles.p}>
          For information about our publishers — account details, billing
          records, how the application is used, support conversations — we
          determine the purposes and means of processing, and this policy is the
          full description of that processing.
        </p>
        <h3 sx={styles.h3}>Where we are the processor</h3>
        <p sx={styles.p}>
          For subscriber data that a publisher imports, collects through a
          Frontbase signup form, or sends to us through our API, the publisher
          is the controller and we act on their documented instructions. They
          decide who is on the list, what is collected, what is sent and when it
          is deleted. Our commitments as a processor — confidentiality, security,
          sub-processor terms, assistance with data subject requests and deletion
          on termination — are set out in our data processing agreement, which we
          will provide on request to any publisher who needs one.
        </p>
        <p sx={styles.p}>
          Publishers are responsible for having a lawful basis to email the
          people on their list, for honouring opt-outs, and for giving their
          subscribers the privacy information their own law requires.
        </p>

        <h2 sx={styles.h2}>3. Information we collect about publishers</h2>
        <ul sx={styles.ul}>
          <li sx={styles.li}>
            <strong>Account information.</strong> Your name, email address, a
            hashed password or the identifier from the single sign-on provider
            you use, your newsletter name, and the workspace and team members
            you set up.
          </li>
          <li sx={styles.li}>
            <strong>Billing information.</strong> Your plan, billing email,
            billing address, invoice history, and the card type and last four
            digits. Card numbers are collected and stored by our payment
            processor, not by us — we never see or hold a full card number.
          </li>
          <li sx={styles.li}>
            <strong>Your content.</strong> Drafts, issues, templates, images and
            other files you upload, automation configuration, and the settings
            for your hosted site. This is yours; we process it to deliver the
            Services and do not use it to train models or for advertising.
          </li>
          <li sx={styles.li}>
            <strong>Sending configuration.</strong> The sending domains you
            connect and the DNS records we check (SPF, DKIM and DMARC) so your
            email authenticates correctly.
          </li>
          <li sx={styles.li}>
            <strong>Usage and technical data.</strong> IP address, approximate
            location derived from it, browser and device type, operating system,
            referring page, pages viewed, actions taken in the application, and
            the dates and times of all of this. This comes from our servers,
            our error monitoring and our product analytics.
          </li>
          <li sx={styles.li}>
            <strong>Support and correspondence.</strong> What you send us by
            email or through support, and our replies.
          </li>
        </ul>

        <h2 sx={styles.h2}>
          4. Information publishers give us about their subscribers
        </h2>
        <p sx={styles.p}>
          To send a newsletter we necessarily hold the list it is sent to. On a
          publisher&rsquo;s instruction we process:
        </p>
        <ul sx={styles.ul}>
          <li sx={styles.li}>
            Email address, which is required, plus any name, custom fields or
            tags the publisher chooses to keep.
          </li>
          <li sx={styles.li}>
            Signup date and source, and where the publisher supplies it, the IP
            address and timestamp recorded as proof of consent.
          </li>
          <li sx={styles.li}>
            Delivery and engagement history for the emails sent through us —
            delivered, opened, clicked, bounced, marked as spam, unsubscribed.
          </li>
          <li sx={styles.li}>
            Suppression status, so that someone who has opted out stays opted
            out.
          </li>
        </ul>
        <p sx={styles.p}>
          We do not use one publisher&rsquo;s subscriber data for the benefit of
          another, do not add subscribers to any list of our own, and do not
          permit the import of purchased or scraped lists.
        </p>

        <h2 sx={styles.h2}>5. Email measurement</h2>
        <p sx={styles.p}>
          Newsletters sent through Frontbase can include a small invisible image
          (a tracking pixel) that records when an email is opened, and links can
          be routed through our domain so that clicks are counted before the
          reader is forwarded to the destination. This is how open and click
          reporting works, and it means we process the subscriber&rsquo;s IP
          address, approximate location and email client at the moment of the
          open or click.
        </p>
        <p sx={styles.p}>
          Publishers control whether open and click tracking is switched on for
          their newsletter. We also process bounces, spam complaints and
          unsubscribe requests reported back to us by receiving mail providers,
          because acting on them is what keeps sending reputations — and
          therefore delivery — intact.
        </p>

        <h2 sx={styles.h2}>6. Cookies</h2>
        <p sx={styles.p}>
          We use cookies that are necessary to sign you in and keep your session
          secure, cookies that remember your preferences, and analytics cookies
          on our marketing site that tell us how people arrive and which pages
          they read. Hosted newsletter sites and signup pages set only what is
          needed to make the page and the form work. You can block or delete
          cookies in your browser, but the application will not function properly
          without the necessary ones.
        </p>

        <h2 sx={styles.h2}>7. Why we process this information</h2>
        <ul sx={styles.ul}>
          <li sx={styles.li}>
            <strong>To perform our contract with you:</strong> providing the
            Services, sending your issues, hosting your site, taking payment and
            providing support.
          </li>
          <li sx={styles.li}>
            <strong>For our legitimate interests:</strong> keeping the Services
            secure and available, preventing abuse, spam and fraud, protecting
            deliverability for every publisher on the platform, understanding
            how the product is used so we can improve it, and recovering debts.
          </li>
          <li sx={styles.li}>
            <strong>With your consent:</strong> optional analytics cookies and
            our own marketing emails to publishers, which you can withdraw at any
            time.
          </li>
          <li sx={styles.li}>
            <strong>To comply with legal obligations:</strong> tax and accounting
            records, and responding to valid legal requests.
          </li>
        </ul>
        <p sx={styles.p}>
          Service and transactional messages about your account, your billing or
          changes to these terms are part of the Services and are not marketing;
          you cannot opt out of them while your account is open.
        </p>

        <h2 sx={styles.h2}>8. Who we share information with</h2>
        <p sx={styles.p}>
          We share personal data only as described here: with service providers
          who process it on our behalf under contract, when you tell us to, when
          we are required to by valid legal process, and where we reasonably
          believe it is necessary to prevent harm or illegal activity. Our
          service providers fall into these categories:
        </p>
        <ul sx={styles.ul}>
          <li sx={styles.li}>Cloud hosting, storage and content delivery</li>
          <li sx={styles.li}>
            Email delivery and deliverability infrastructure
          </li>
          <li sx={styles.li}>Payment processing and invoicing</li>
          <li sx={styles.li}>Product analytics and error monitoring</li>
          <li sx={styles.li}>Customer support tooling</li>
          <li sx={styles.li}>
            AI providers, where you use the optional drafting and assistant
            features, for the sole purpose of returning your result
          </li>
        </ul>
        <p sx={styles.p}>
          A current list of the sub-processors that handle subscriber data is
          available to publishers on request from{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} sx={styles.link}>
            {CONTACT_EMAIL}
          </a>
          . If we are ever involved in a merger, acquisition or sale of assets
          such that your information would transfer or become subject to a
          different policy, we will tell you before it happens and give you the
          chance to export and delete your data first.
        </p>

        <h2 sx={styles.h2}>9. International transfers</h2>
        <p sx={styles.p}>
          We and our service providers may process personal data in countries
          other than your own, including the United States. Where personal data
          is transferred out of the United Kingdom or the European Economic Area,
          we rely on appropriate safeguards for that transfer, such as the
          standard contractual clauses approved by the European Commission,
          together with any additional measures the transfer requires.
        </p>

        <h2 sx={styles.h2}>10. How long we keep it</h2>
        <ul sx={styles.ul}>
          <li sx={styles.li}>
            <strong>Account and content.</strong> Kept while your account is
            open. When you close it, we delete or anonymise your account data and
            content within a short wind-down window, except where we must keep
            something longer for a legal reason.
          </li>
          <li sx={styles.li}>
            <strong>Subscriber data.</strong> Kept until the publisher deletes
            it, or until their account closes and the wind-down window passes.
            Publishers can export or delete their list at any time.
          </li>
          <li sx={styles.li}>
            <strong>Suppression records.</strong> When someone unsubscribes or
            complains, we keep the minimum record needed to make sure they are
            not emailed again, including if the address is re-imported later.
            This is why an opt-out outlives a list deletion.
          </li>
          <li sx={styles.li}>
            <strong>Billing records.</strong> Kept for as long as applicable tax
            and accounting law requires.
          </li>
          <li sx={styles.li}>
            <strong>Technical logs.</strong> Kept for a short period for
            security, debugging and abuse investigation, then deleted or
            aggregated.
          </li>
        </ul>

        <h2 sx={styles.h2}>11. Security</h2>
        <p sx={styles.p}>
          Traffic to and from the Services is encrypted in transit, and data is
          encrypted at rest with our infrastructure providers. Passwords are
          stored hashed, never in readable form. Internal access to publisher
          content and subscriber lists is restricted to staff who need it to run
          or support the Services, and is logged. No service can promise perfect
          security, but if a breach affects your personal data we will notify you
          and any regulator we are required to notify, without undue delay.
        </p>

        <h2 sx={styles.h2}>12. Your rights as a publisher</h2>
        <p sx={styles.p}>
          Depending on where you live, you may have the right to access the
          personal data we hold about you, to have it corrected, to have it
          deleted, to object to or restrict how we process it, to receive it in a
          portable format, and to withdraw a consent you previously gave. Most of
          this you can do yourself in your account settings; for anything else,
          write to us and we will respond within the time your law allows.
        </p>
        <p sx={styles.p}>
          You also have the right to complain to your data protection authority
          if you think we have handled your data badly. We would rather you came
          to us first so we can put it right.
        </p>

        <h2 sx={styles.h2}>13. If you are a subscriber to a newsletter</h2>
        <p sx={styles.p}>
          If you receive a newsletter sent through Frontbase, your relationship
          is with the publisher who sends it, not with us. Every email includes a
          one-click unsubscribe link, and using it stops that publisher&rsquo;s
          mail immediately and permanently.
        </p>
        <p sx={styles.p}>
          To see, correct or delete the rest of the data held about you, contact
          the publisher directly, since they decide what is kept. If you cannot
          reach them, or you are not sure who they are, write to us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} sx={styles.link}>
            {CONTACT_EMAIL}
          </a>{' '}
          and we will pass the request to them and help them act on it.
        </p>

        <h2 sx={styles.h2}>14. Children</h2>
        <p sx={styles.p}>
          The Services are not directed at children, and we do not knowingly
          create accounts for anyone under 16. If you believe a child has given
          us personal data, contact us and we will delete it.
        </p>

        <h2 sx={styles.h2}>15. Changes to this policy</h2>
        <p sx={styles.p}>
          We may update this policy as the product changes. If a change is
          material we will tell account holders by email or in the application
          before it takes effect. Continuing to use the Services after the
          effective date means the updated policy applies to you; if you do not
          agree with it, you can export your data and close your account.
        </p>

        <h2 sx={styles.h2}>16. Contact us</h2>
        <p sx={styles.p}>
          For any question about this policy, to exercise a right, or to request
          a data processing agreement or sub-processor list, email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} sx={styles.link}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    </div>
  );
}

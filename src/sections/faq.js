/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Container, Box, Heading, Text, Link } from 'theme-ui';
import { IoIosArrowDown } from 'react-icons/io';

const faqData = [
  {
    id: 'pricing-model',
    question: 'How does paying per send actually save me money?',
    answer:
      'Most platforms price on list size, so a reader who has not opened anything in a year costs you the same as your most engaged subscriber — and your bill climbs every time you grow. Frontbase meters sends instead. A 25,000-name list mailed once a week is 100,000 emails a month; the same list mailed twice a month is 50,000. You decide which, and the bill follows that decision rather than the size of the list sitting behind it.',
  },
  {
    id: 'migration',
    question: 'Can I bring my list over from Substack, Ghost or Mailchimp?',
    answer:
      'Yes. Export a CSV from your current platform and import it here, or push subscribers in through the API. We keep your signup dates and tags, and your existing unsubscribes and bounces are carried into the suppression list so nobody who already opted out hears from you again. On Scale we will do the migration with you, including pointing your domain and moving your archive.',
  },
  {
    id: 'send-limits',
    question: 'What happens if I hit my monthly send limit?',
    answer:
      'Nothing is deleted and no issue is lost. You can either let the remaining sends wait for the month to reset, pay the overage at $0.40 per 1,000 emails, or upgrade — whichever is cheaper for you that month. We notify you at 80% of your allowance so it is never a surprise, and unused sends do not roll over.',
  },
  {
    id: 'deliverability',
    question: 'Will my newsletter land in the inbox?',
    answer:
      'That is the part we spend the most engineering on. You send from your own authenticated domain, and we check SPF, DKIM and DMARC before your first issue goes out rather than after a bad send. Every list import is scrubbed for invalid and risky addresses, one-click unsubscribe is on every email, and you get an alert if placement starts drifting. Scale adds a dedicated sending IP for publishers with the volume to warrant one.',
  },
  {
    id: 'website',
    question: 'Do I get a website, or do I need to host one myself?',
    answer:
      'It is included. Every plan comes with a hosted signup page, a public archive and a page per issue, all on your own custom domain with an RSS feed. If you already have a site, use the embeddable signup form instead and keep the archive switched off. Either way there is no second hosting bill and nothing for you to deploy.',
  },
  {
    id: 'paid-subscriptions',
    question: 'Can I charge readers for a paid tier?',
    answer:
      'On the Scale plan, yes — connect Stripe and you can gate issues behind a paid tier, with Frontbase handling the member list and access. We do not take a percentage of your subscription revenue; you pay for sends like everyone else and keep the rest. Starter and Growth are free-newsletter plans.',
  },
  {
    id: 'billing',
    question: 'Can I switch plans or cancel anytime?',
    answer:
      'Yes, both, self-serve and without talking to anyone. Upgrades apply immediately and we prorate the difference; downgrades take effect at the end of your current period so you keep what you paid for. Cancel and your account drops to read-only — your subscribers, issues and stats stay export-ready rather than being deleted.',
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState(faqData[0].id);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <Box sx={styles.contentBox}>
          <Heading as="h2" sx={styles.title}>
            Questions before you move your list
          </Heading>
          <Text sx={styles.description}>
            The things publishers ask us most before they bring their newsletter
            over to Frontbase.
          </Text>
        </Box>

        <Box sx={styles.list}>
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <Box
                key={item.id}
                sx={{
                  ...styles.item,
                  ...(isOpen ? styles.itemOpen : {}),
                }}
              >
                <Box
                  as="button"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => toggle(item.id)}
                  sx={styles.question}
                >
                  <Text as="span" sx={styles.questionText}>
                    {item.question}
                  </Text>
                  <IoIosArrowDown
                    sx={{
                      ...styles.arrow,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </Box>
                {isOpen && (
                  <Box id={`faq-answer-${item.id}`} sx={styles.answer}>
                    <Text as="p" sx={styles.answerText}>
                      {item.answer}
                    </Text>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>

        <Text sx={styles.footnote}>
          Still deciding?{' '}
          <Link
            href="https://calendly.com/vineetsri/basic-intro"
            target="_blank"
            rel="noopener noreferrer"
            sx={styles.footnoteLink}
          >
            Book a 15-minute walkthrough
          </Link>{' '}
          and we will answer it live.
        </Text>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    py: ['60px', '80px', '100px', '120px'],
    backgroundColor: '#fafafa',
  },
  contentBox: {
    maxWidth: '700px',
    mx: 'auto',
    textAlign: 'center',
    mb: ['40px', '50px', '60px'],
  },
  title: {
    fontSize: ['28px', '32px', '42px', '48px'],
    fontWeight: 700,
    lineHeight: [1.25, 1.2, 1.16, 1.12],
    letterSpacing: ['-0.02em', '-0.025em', '-0.03em'],
    color: 'heading',
    mb: ['20px', '25px'],
  },
  description: {
    fontSize: ['16px', '17px', '18px'],
    lineHeight: 1.7,
    color: 'text',
    mb: 0,
  },
  list: {
    maxWidth: '820px',
    mx: 'auto',
    px: ['20px', '0px'],
  },
  item: {
    backgroundColor: 'background',
    border: '1px solid',
    borderColor: 'border_color',
    borderRadius: '12px',
    mb: ['12px', '16px'],
    overflow: 'hidden',
    transition: 'all 0.25s ease',
    ':last-child': {
      mb: 0,
    },
  },
  itemOpen: {
    borderColor: 'primary',
    boxShadow: '0 8px 24px rgba(17, 24, 39, 0.07)',
  },
  question: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    width: '100%',
    textAlign: 'left',
    border: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontFamily: 'body',
    padding: ['18px 20px', '22px 26px'],
    '&:focus-visible': {
      outline: '2px solid',
      outlineColor: 'primary',
      outlineOffset: '-2px',
    },
  },
  questionText: {
    fontSize: ['16px', '17px', '18px'],
    fontWeight: 600,
    lineHeight: 1.5,
    color: 'heading',
  },
  arrow: {
    flexShrink: 0,
    fontSize: '22px',
    color: 'text_secondary',
    transition: 'transform 0.25s ease',
  },
  answer: {
    padding: ['0 20px 20px', '0 26px 26px'],
  },
  answerText: {
    fontSize: ['15px', '16px'],
    lineHeight: 1.75,
    color: 'text',
    m: 0,
    maxWidth: '680px',
  },
  footnote: {
    display: 'block',
    textAlign: 'center',
    fontSize: ['14px', '15px'],
    color: 'text_secondary',
    mt: ['32px', '40px'],
    px: ['20px', '0px'],
  },
  footnoteLink: {
    color: 'heading',
    fontWeight: 600,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

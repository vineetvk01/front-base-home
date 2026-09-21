/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Container, Box, Heading, Text, Link } from 'theme-ui';
import { IoIosArrowDown } from 'react-icons/io';

const faqData = [
  {
    id: 'deliverability',
    question: 'Will my emails actually land in the inbox?',
    answer:
      'That is the part we spend the most engineering on. Every mailbox you connect is warmed continuously at no extra cost, sending is spread across your accounts with randomised human-like pacing, and we check your SPF, DKIM and DMARC records before your first campaign goes out. You also get alerts if a domain starts trending toward spam so you can pull back before it costs you the domain.',
  },
  {
    id: 'mailboxes',
    question: 'Can I connect my existing Google Workspace or Outlook mailboxes?',
    answer:
      'Yes. Connect Google Workspace or Microsoft 365 in one OAuth click, or use plain SMTP/IMAP for any other provider. Your mailboxes stay yours — we send through them rather than through a shared pool, which is a large part of why placement holds up. Starter includes 2 mailboxes, Growth 10, and Scale is unlimited.',
  },
  {
    id: 'ai-credits',
    question: 'What are AI credits, and what uses them?',
    answer:
      'One credit is one AI action: drafting a sequence step, personalising an email for a specific prospect, classifying an inbound reply, or researching a company. Warmup, sending, scheduling and the unified inbox never consume credits. Starter includes 500 per month, Growth 5,000 and Scale 25,000, and unused credits do not roll over.',
  },
  {
    id: 'plan-limits',
    question: "What happens if I hit my monthly email or credit limit?",
    answer:
      'Nothing gets deleted and no campaign is lost. Sequences pause at your sending cap and resume when the month resets or the moment you upgrade, and AI features fall back to your own templates once credits run out. We notify you at 80% so it is never a surprise. Growth and Scale include unlimited sending, so the only meter left is credits.',
  },
  {
    id: 'compliance',
    question: 'Is cold email legal, and how do you handle compliance?',
    answer:
      'Cold email to business contacts is legal in most jurisdictions when you identify yourself, state why you are writing, and honour opt-outs — that is the core of CAN-SPAM, and GDPR adds a legitimate-interest test for EU recipients. Frontbase adds a one-click unsubscribe to every send, maintains a permanent suppression list across all your campaigns, and blocks addresses that have opted out even if they reappear in a later import. We do not sell contact lists and we do not allow purchased-list imports.',
  },
  {
    id: 'billing',
    question: 'Can I switch plans or cancel anytime?',
    answer:
      'Yes, both, self-serve and without talking to anyone. Upgrades apply immediately and we prorate the difference; downgrades take effect at the end of your current period so you keep what you paid for. Cancel and your account drops to read-only — your campaigns, replies and contact history stay exported-ready rather than being deleted.',
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
            Questions before you upgrade
          </Heading>
          <Text sx={styles.description}>
            The things teams ask us most before they point their outbound at
            Frontbase.
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

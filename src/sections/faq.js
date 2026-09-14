/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Container, Box, Heading, Text, Link } from 'theme-ui';
import { IoIosArrowDown } from 'react-icons/io';

const faqData = [
  {
    id: 'custom-domain',
    question: 'Can I connect my own custom domain?',
    answer:
      'Yes, on Growth and Business. Point a CNAME record at Frontbase and your board runs at feedback.yourdomain.com with an SSL certificate issued automatically and all Frontbase branding removed. Setup takes about five minutes. On the free plan your board lives on a frontbaseapp.com subdomain.',
  },
  {
    id: 'migration',
    question:
      'How do I migrate my existing feedback or spreadsheets into Frontbase?',
    answer:
      'Upload a CSV and map your columns to title, description, submitter and vote count. Existing votes and submitter emails carry over, so nothing restarts at zero. Coming from Canny, Trello, Jira or a Google Sheet? Send us the export and we will run the first import for you on any paid plan.',
  },
  {
    id: 'voting-accounts',
    question: 'Will my users need to create a new account to vote?',
    answer:
      'No. Anonymous voting is enabled by default, so a user can upvote in one click with no signup. If you want verified identities, turn on magic-link email instead: users get a one-tap link, never a password. On Business you can pass your own logged-in users straight through with SSO/SAML so voting happens under their existing account.',
  },
  {
    id: 'plan-limits',
    question: "What happens if I exceed my plan's limits?",
    answer:
      'Nothing breaks and nothing gets deleted. Your board stays live and every existing idea, vote and comment stays intact. On the free plan you get a heads-up as you approach 100 tracked users, and tracking of new users pauses until you upgrade. Paid plans include unlimited tracked users and unlimited feedback, so there is no limit to exceed.',
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
            The things teams ask us most before they move their feedback to
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
            href="https://calendly.com/vineetsri/15min"
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
    lineHeight: [1.3, 1.4],
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

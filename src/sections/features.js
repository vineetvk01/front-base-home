/** @jsxImportSource theme-ui */
import { Container, Box, Heading, Text, Grid } from 'theme-ui';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FaRobot, FaInbox } from 'react-icons/fa';
import { MdOutlineHealthAndSafety, MdEventAvailable } from 'react-icons/md';

const features = [
  {
    id: 'sequences',
    icon: FaRobot,
    iconColor: '#8B5CF6',
    title: 'Sequences that write themselves',
    text: 'Describe the offer and who it is for. Your agent drafts the opener, the follow-ups and the fallbacks, personalised per prospect from their site, role and recent activity — not a mail-merge first name.',
    points: [
      'Multi-step email sequences with branching follow-ups',
      'Per-prospect personalisation from public data',
      'A/B test subject lines and openers automatically',
    ],
  },
  {
    id: 'deliverability',
    icon: MdOutlineHealthAndSafety,
    iconColor: '#10B981',
    title: 'Land in the inbox, not in spam',
    text: 'Warmup runs continuously on every mailbox you connect, at no extra cost. Sending is spread across accounts with human-like pacing, and we flag SPF, DKIM and DMARC problems before you hit send.',
    points: [
      'Unlimited inbox warmup on every plan',
      'Mailbox rotation with randomised send windows',
      'SPF / DKIM / DMARC checks and deliverability alerts',
    ],
  },
  {
    id: 'inbox',
    icon: FaInbox,
    iconColor: '#06B6D4',
    title: 'Every reply in one place',
    text: 'All your sending accounts collapse into a single inbox. The agent sorts interested from not-interested from out-of-office, drafts the response, and pauses the sequence the moment someone answers.',
    points: [
      'Unified inbox across every connected mailbox',
      'Intent classification and AI-drafted replies',
      'Auto-pause sequences on reply, bounce or unsubscribe',
    ],
  },
  {
    id: 'scheduler',
    icon: MdEventAvailable,
    iconColor: '#F59E0B',
    title: 'Book the meeting in the thread',
    text: 'When a prospect says yes, the agent offers real times from your calendar and confirms the invite inside the same email thread. No scheduling link ping-pong, no dropped handoff.',
    points: [
      'Two-way Google and Outlook calendar sync',
      'Times offered inline, booked without leaving email',
      'Round-robin routing across your team',
    ],
  },
];

export default function Features() {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Box sx={styles.contentBox}>
          <Heading as="h2" sx={styles.title}>
            Four jobs, one agent
          </Heading>
          <Text sx={styles.description}>
            Most teams stitch outreach together from a sequencer, a warmup tool,
            a scheduling link and a shared mailbox. Frontbase is all four, so
            nothing falls between them.
          </Text>
        </Box>

        <Grid sx={styles.grid}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Box key={feature.id} sx={styles.card}>
                <Box sx={styles.iconBox}>
                  <Icon sx={{ ...styles.icon, color: feature.iconColor }} />
                </Box>
                <Heading as="h3" sx={styles.cardTitle}>
                  {feature.title}
                </Heading>
                <Text as="p" sx={styles.cardText}>
                  {feature.text}
                </Text>
                <Box as="ul" sx={styles.pointList}>
                  {feature.points.map((point) => (
                    <Box as="li" key={point} sx={styles.pointItem}>
                      <IoIosCheckmarkCircle sx={styles.checkIcon} />
                      <Text as="span" sx={styles.pointText}>
                        {point}
                      </Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    py: ['60px', '80px', '100px', '120px'],
    backgroundColor: 'background',
  },
  contentBox: {
    maxWidth: '700px',
    mx: 'auto',
    textAlign: 'center',
    mb: ['50px', '60px', '70px'],
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
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, 'repeat(2, 1fr)'],
    gap: ['30px', '32px', '36px 40px'],
    px: ['20px', '0px'],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'background',
    border: '1px solid',
    borderColor: 'border_color',
    borderRadius: '16px',
    padding: ['26px 22px', '32px 28px'],
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 12px 32px rgba(17, 24, 39, 0.08)',
      transform: 'translateY(-4px)',
    },
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    mb: ['16px', '20px'],
  },
  icon: {
    fontSize: ['34px', '40px'],
  },
  cardTitle: {
    fontSize: ['19px', '21px'],
    fontWeight: 700,
    color: 'heading',
    lineHeight: 1.3,
    mb: ['12px', '14px'],
  },
  cardText: {
    fontSize: ['15px', '16px'],
    lineHeight: 1.7,
    color: 'text',
    mb: ['20px', '24px'],
  },
  pointList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    mt: 'auto',
  },
  pointItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    mb: '10px',
    ':last-child': {
      mb: 0,
    },
  },
  checkIcon: {
    flexShrink: 0,
    fontSize: '20px',
    color: 'success',
    mt: '1px',
  },
  pointText: {
    fontSize: ['14px', '15px'],
    lineHeight: 1.5,
    color: 'text_secondary',
  },
};

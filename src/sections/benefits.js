/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Grid } from 'theme-ui';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { MdAccessTime } from 'react-icons/md';
import { FaInbox } from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa';

const benefitsData = [
  {
    id: 1,
    icon: MdOutlineMarkEmailRead,
    title: 'Unlimited mailbox warmup',
    text: 'Every inbox you connect gets warmed and kept healthy, free of charge',
    iconColor: '#06B6D4',
  },
  {
    id: 2,
    icon: FaRobot,
    title: 'Replies handled 24/7',
    text: 'Your agent reads intent, answers in your voice, and escalates the hot ones',
    iconColor: '#A855F7',
  },
  {
    id: 3,
    icon: MdAccessTime,
    title: 'First campaign in 10 minutes',
    text: 'Connect a mailbox, paste your list, describe the offer — that is the setup',
    iconColor: '#51CF66',
  },
  {
    id: 4,
    icon: FaInbox,
    title: 'One inbox for every mailbox',
    text: 'Stop tab-hopping between sending accounts to find who answered',
    iconColor: '#4C6EF5',
  },
];

export default function Benefits() {
  return (
    <section sx={styles.section}>
      <Container>
        <Box sx={styles.contentBox}>
          <Heading as="h2" sx={styles.title}>
            Cold outreach is a full-time job.
            <br />
            Give it to an agent.
          </Heading>
          <Text sx={styles.description}>
            Sequencing, follow-ups, deliverability, reply triage, scheduling — it is a pile of small jobs that eats a founder's week. Frontbase runs all of it in one place, and tells you only when someone wants to talk.
          </Text>
        </Box>

        <Grid sx={styles.grid}>
          {benefitsData.map((item) => {
            const Icon = item.icon;
            return (
              <Box key={item.id} sx={styles.card}>
                <Box sx={styles.iconBox}>
                  <Icon sx={{ ...styles.icon, color: item.iconColor }} />
                </Box>
                <Heading sx={styles.cardTitle}>{item.title}</Heading>
                <Text sx={styles.cardText}>{item.text}</Text>
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
    backgroundColor: '#fafafa',
  },
  contentBox: {
    maxWidth: '700px',
    mx: 'auto',
    textAlign: 'center',
    mb: ['50px', '60px', '80px'],
  },
  title: {
    fontSize: ['28px', '32px', '42px', '48px'],
    fontWeight: 700,
    lineHeight: [1.25, 1.2, 1.16, 1.12],
    letterSpacing: ['-0.02em', '-0.025em', '-0.03em'],
    color: 'heading',
    mb: ['20px', '25px', '30px'],
  },
  description: {
    fontSize: ['16px', '17px', '18px'],
    lineHeight: 1.7,
    color: 'text',
    mb: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
    gap: ['30px', '40px', '30px 40px'],
    px: ['20px', '0px'],
  },
  card: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconBox: {
    mb: ['20px', '25px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: ['48px', '56px', '64px'],
    transition: 'all 0.3s ease',
  },
  cardTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: 700,
    color: 'heading',
    mb: ['12px', '15px'],
    lineHeight: 1.3,
  },
  cardText: {
    fontSize: ['14px', '15px', '16px'],
    lineHeight: 1.6,
    color: 'text_secondary',
  },
};

/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Grid } from 'theme-ui';
import { IoHeartCircle } from 'react-icons/io5';
import { MdTrendingUp } from 'react-icons/md';
import { MdAccessTime } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

const benefitsData = [
  {
    id: 1,
    icon: IoHeartCircle,
    title: '200+ votes on one idea',
    text: "See what users really want, not just who shouts loudest",
    iconColor: '#FF6B6B',
  },
  {
    id: 2,
    icon: MdTrendingUp,
    title: '10% lower churn',
    text: 'Users stay when they see you building their requests',
    iconColor: '#51CF66',
  },
  {
    id: 3,
    icon: MdAccessTime,
    title: '5 hours/week saved',
    text: 'Stop managing feedback in spreadsheets and emails',
    iconColor: '#4C6EF5',
  },
  {
    id: 4,
    icon: FaUsers,
    title: 'Entire team aligned',
    text: 'Everyone sees the same priorities, no more debates',
    iconColor: '#A855F7',
  },
];

export default function Benefits() {
  return (
    <section sx={styles.section}>
      <Container>
        <Box sx={styles.contentBox}>
          <Heading as="h2" sx={styles.title}>
            Your users are telling you what to build.
            <br />
            Are you listening?
          </Heading>
          <Text sx={styles.description}>
            Teams using Frontbase see 40% more feedback submissions because users finally have a place where their voice matters. No more scattered emails, lost Slack messages, or ignored feature requests.
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
    lineHeight: [1.3, 1.4],
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

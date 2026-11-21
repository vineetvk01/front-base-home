/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Grid } from 'theme-ui';
import { MdAccessTime, MdOutlinePeopleAlt, MdOutlineLanguage } from 'react-icons/md';
import { MdOutlineHealthAndSafety } from 'react-icons/md';

const benefitsData = [
  {
    id: 1,
    icon: MdOutlinePeopleAlt,
    title: 'Unlimited subscribers, always',
    text: 'Five hundred readers or five hundred thousand — the price follows your sends, not your list',
    iconColor: '#06B6D4',
  },
  {
    id: 2,
    icon: MdOutlineLanguage,
    title: 'A website you do not pay extra for',
    text: 'Hosted archive, signup page and custom domain are included on every plan',
    iconColor: '#A855F7',
  },
  {
    id: 3,
    icon: MdAccessTime,
    title: 'First issue out in 10 minutes',
    text: 'Import a CSV, point your domain, write, send — that is the whole setup',
    iconColor: '#51CF66',
  },
  {
    id: 4,
    icon: MdOutlineHealthAndSafety,
    title: 'Deliverability taken care of',
    text: 'Authenticated sending domains, DNS checks and placement monitoring on every send',
    iconColor: '#4C6EF5',
  },
];

export default function Benefits() {
  return (
    <section sx={styles.section}>
      <Container>
        <Box sx={styles.contentBox}>
          <Heading as="h2" sx={styles.title}>
            Your list is an asset.
            <br />
            Most platforms price it like a liability.
          </Heading>
          <Text sx={styles.description}>
            Every subscriber you add raises your bill on Ghost, Mailchimp and
            beehiiv — whether that reader opens anything or not. Frontbase
            meters the one thing you actually chose to do: send the issue.
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

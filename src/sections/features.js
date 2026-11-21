/** @jsxImportSource theme-ui */
import { Container, Box, Heading, Text, Grid } from 'theme-ui';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FiEdit3, FiGlobe, FiZap } from 'react-icons/fi';
import { TbChartHistogram } from 'react-icons/tb';

const features = [
  {
    id: 'write',
    icon: FiEdit3,
    iconColor: '#8B5CF6',
    title: 'An editor that stays out of the way',
    text: 'Write in a clean block editor, drop in images and buttons, and see exactly how the issue lands on a phone before it goes out. When the blank page wins, ask the AI for a first draft from your own back catalogue.',
    points: [
      'Block editor with desktop and mobile preview',
      'AI drafting, subject lines and preview text',
      'Reusable templates and saved sections',
    ],
  },
  {
    id: 'website',
    icon: FiGlobe,
    iconColor: '#06B6D4',
    title: "Your newsletter's own website",
    text: 'Every issue gets a public page, your archive gets a home, and new readers get a signup page that actually converts — on your own domain, at no extra cost and with nothing to host yourself.',
    points: [
      'Hosted archive and per-issue pages on your domain',
      'Signup page plus embeddable forms for any site',
      'SEO-ready pages and an RSS feed out of the box',
    ],
  },
  {
    id: 'automations',
    icon: FiZap,
    iconColor: '#F59E0B',
    title: 'Automations without the flowchart degree',
    text: 'Welcome a new reader, follow up with the people who opened, re-send to the ones who did not. Build the sequence once in plain steps and it keeps running while you write the next issue.',
    points: [
      'Welcome sequences triggered on signup',
      'Branching on opens, clicks and tags',
      'API, webhooks and MCP for everything else',
    ],
  },
  {
    id: 'stats',
    icon: TbChartHistogram,
    iconColor: '#10B981',
    title: 'Numbers you can act on',
    text: 'Opens and clicks per issue, which links pulled, which subject lines worked, and what the send actually cost you. Delivery is authenticated and monitored, so a placement problem shows up here before readers notice it.',
    points: [
      'Per-issue opens, clicks and link-level reporting',
      'Cost per send, so pricing never surprises you',
      'SPF / DKIM / DMARC checks and placement alerts',
    ],
  },
];

export default function Features() {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Box sx={styles.contentBox}>
          <Heading as="h2" sx={styles.title}>
            Everything a newsletter needs
          </Heading>
          <Text sx={styles.description}>
            Most publishers end up paying for an email tool, a website, a form
            builder and an automation app. Frontbase is all four, so your
            archive, your signup page and your sends stay in one place.
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

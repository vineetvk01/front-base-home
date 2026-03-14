 /** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Unique Link',
    title: 'Create Unique Link',
    text:
      'Create a unique link for your business and provide your services by sharing that link with your customers',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Audience Management',
    title: 'Audience Management',
    text:
      'Manage your audience in your dashboard. Send them Personalized email/SMS/whatsapp messages about your services',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Create Courses',
    title: 'Create Courses',
    text:
      'Upload your free or paid courses, and get your regular customers notified automatically',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Take 1:1 Video Calls',
    title: 'Take 1:1 Video Calls',
    text:
      'Update your availability and sync your google calendar to book 1:1 direct calls with your audience',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of product"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};

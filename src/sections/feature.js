 /** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Pick your own schedule',
    title: 'Pick your own schedule',
    text:
      'You have total control over your availability. We check your calendar and only accept bookings when you are free.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Host Webinars',
    title: 'Host Webinars',
    text:
      'You can mail your audience and organize events for them with the tools available on the platform',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Transfer Earnings to Bank Account',
    title: 'Transfer Earnings to Bank Account',
    text:
      'Link your bank account or UPI Id to get payments directly in your account without any extra effort',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      '24x7 customer support to you and your audience regarding any issue with the platform.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Amazing useful features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};

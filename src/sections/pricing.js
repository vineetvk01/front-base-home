/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Container, Box, Flex, Heading, Text, Button, Grid } from 'theme-ui';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

const SIGNUP_URL = 'https://go.frontbaseapp.com';
const DEMO_URL = 'https://calendly.com/vineetsri/15min';

// Annual billing = 10x the monthly price, i.e. 2 months free.
const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For founders validating their first ideas',
    monthly: 0,
    annual: 0,
    buttonText: 'Start free forever',
    buttonVariant: 'secondary',
    url: SIGNUP_URL,
    features: [
      { text: '1 public feedback board', isAvailable: true },
      { text: 'Unlimited ideas, votes & comments', isAvailable: true },
      { text: 'Public roadmap & changelog', isAvailable: true },
      { text: 'Up to 100 tracked users', isAvailable: true },
      { text: 'Custom domain & branding removal', isAvailable: false },
      { text: 'Private boards & integrations', isAvailable: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most popular',
    tagline: 'For SaaS teams shipping on customer demand',
    monthly: 19,
    annual: 190,
    buttonText: 'Start 14-day free trial',
    buttonVariant: 'primary',
    url: SIGNUP_URL,
    highlighted: true,
    featuresIntro: 'Everything in Starter, plus:',
    features: [
      {
        text: 'Custom domain — feedback.yourdomain.com',
        isAvailable: true,
        highlight: true,
      },
      { text: 'Frontbase branding removed', isAvailable: true, highlight: true },
      { text: 'Unlimited boards & unlimited tracked users', isAvailable: true },
      { text: 'Slack & Webhooks integrations', isAvailable: true },
      {
        text: 'Prioritization matrix & impact scoring',
        isAvailable: true,
        highlight: true,
      },
      { text: 'Auto status updates & email digests', isAvailable: true },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'For product orgs with multiple teams',
    monthly: 49,
    annual: 490,
    buttonText: 'Talk to us',
    buttonVariant: 'secondary',
    url: DEMO_URL,
    featuresIntro: 'Everything in Growth, plus:',
    features: [
      {
        text: 'Private internal boards',
        isAvailable: true,
        highlight: true,
      },
      {
        text: 'Role-based access for admins, moderators & viewers',
        isAvailable: true,
        highlight: true,
      },
      {
        text: 'Jira, Linear & GitHub two-way sync',
        isAvailable: true,
        highlight: true,
      },
      { text: 'AI duplicate detection & theme clustering', isAvailable: true },
      { text: 'Revenue-weighted scoring & user segments', isAvailable: true },
      { text: 'Priority support & guided onboarding', isAvailable: true },
    ],
  },
];

// Annual plans are billed yearly but shown as a per-month equivalent.
const monthlyEquivalent = (plan) => Math.round(plan.annual / 12);

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');
  const isAnnual = billing === 'annual';

  return (
    <section id="pricing" sx={styles.section}>
      <Container>
        <Box sx={styles.contentBox}>
          <Heading as="h2" sx={styles.title}>
            Simple pricing that grows with your roadmap
          </Heading>
          <Text sx={styles.description}>
            Start free and stay free as long as you like. Upgrade when you need
            your own domain, private boards, or your feedback flowing straight
            into Jira, Slack and Linear.
          </Text>
        </Box>

        <Flex sx={styles.toggleWrapper}>
          <Box sx={styles.toggle}>
            <button
              type="button"
              aria-label="Monthly billing"
              aria-pressed={!isAnnual}
              className={isAnnual ? '' : 'active'}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-label="Annual billing"
              aria-pressed={isAnnual}
              className={isAnnual ? 'active' : ''}
              onClick={() => setBilling('annual')}
            >
              Annual
            </button>
          </Box>
          <Text as="span" sx={styles.saveBadge}>
            Get 2 months free
          </Text>
        </Flex>

        <Grid sx={styles.grid}>
          {plans.map((plan) => {
            const price = isAnnual ? monthlyEquivalent(plan) : plan.monthly;
            const isFree = plan.monthly === 0;

            return (
              <Box
                key={plan.id}
                sx={{
                  ...styles.card,
                  ...(plan.highlighted ? styles.cardHighlighted : {}),
                }}
              >
                {plan.badge && <Box sx={styles.badge}>{plan.badge}</Box>}

                <Heading as="h3" sx={styles.planName}>
                  {plan.name}
                </Heading>
                <Text sx={styles.planTagline}>{plan.tagline}</Text>

                <Flex sx={styles.priceRow}>
                  <Text as="span" sx={styles.price}>
                    ${price}
                  </Text>
                  <Text as="span" sx={styles.pricePeriod}>
                    {isFree ? '/forever' : '/month'}
                  </Text>
                </Flex>
                <Text sx={styles.priceNote}>
                  {isFree
                    ? 'No credit card required'
                    : isAnnual
                      ? `Billed annually at $${plan.annual}`
                      : `or $${plan.annual}/year — save $${plan.monthly * 12 - plan.annual}`}
                </Text>

                <Button
                  variant={plan.buttonVariant}
                  sx={{
                    ...styles.cta,
                    ...(plan.buttonVariant === 'secondary'
                      ? styles.ctaSecondary
                      : {}),
                  }}
                  onClick={() => window.open(plan.url)}
                >
                  {plan.buttonText}
                </Button>

                {plan.featuresIntro && (
                  <Text sx={styles.featuresIntro}>{plan.featuresIntro}</Text>
                )}

                <Box as="ul" sx={styles.featureList}>
                  {plan.features.map((feature) => (
                    <Box as="li" key={feature.text} sx={styles.featureItem}>
                      {feature.isAvailable ? (
                        <IoIosCheckmarkCircle sx={styles.checkIcon} />
                      ) : (
                        <IoIosCloseCircle sx={styles.crossIcon} />
                      )}
                      <Text
                        as="span"
                        sx={{
                          ...styles.featureText,
                          ...(feature.isAvailable
                            ? {}
                            : styles.featureTextMuted),
                          ...(feature.highlight ? styles.featureTextBold : {}),
                        }}
                      >
                        {feature.text}
                      </Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Grid>

        <Text sx={styles.footnote}>
          All paid plans include unlimited tracked users and unlimited feedback.
          Cancel anytime — no contracts, no setup fees.
        </Text>
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
    mb: ['30px', '35px', '40px'],
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
  toggleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: ['column', 'row'],
    gap: ['12px', '16px'],
    mb: ['40px', '50px', '60px'],
  },
  toggle: {
    display: 'flex',
    padding: '6px',
    borderRadius: '12px',
    backgroundColor: 'background_secondary',
    border: '1px solid',
    borderColor: 'border_color',
    button: {
      border: 0,
      padding: ['10px 20px', '12px 28px'],
      borderRadius: '8px',
      color: 'text_secondary',
      fontSize: ['14px', '15px'],
      lineHeight: 1.2,
      fontWeight: 600,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      transition: 'all 0.25s',
      '&.active': {
        color: 'heading',
        backgroundColor: 'background',
        boxShadow: '0 1px 3px rgba(17, 24, 39, 0.12)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
  saveBadge: {
    display: 'inline-block',
    fontSize: ['12px', '13px'],
    fontWeight: 700,
    letterSpacing: '0.3px',
    color: 'success',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderRadius: '30px',
    padding: '6px 14px',
    whiteSpace: 'nowrap',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, 'repeat(3, 1fr)'],
    gap: ['24px', '28px', '30px'],
    alignItems: 'stretch',
    px: ['20px', '0px'],
  },
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'background',
    border: '1px solid',
    borderColor: 'border_color',
    borderRadius: '16px',
    padding: ['28px 24px', '32px 28px'],
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 12px 32px rgba(17, 24, 39, 0.08)',
      transform: 'translateY(-4px)',
    },
  },
  cardHighlighted: {
    borderColor: 'primary',
    boxShadow: '0 12px 32px rgba(17, 24, 39, 0.12)',
  },
  badge: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'primary',
    color: 'white',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    borderRadius: '30px',
    padding: '6px 16px',
    whiteSpace: 'nowrap',
  },
  planName: {
    fontSize: ['20px', '22px'],
    fontWeight: 700,
    color: 'heading',
    mb: '8px',
  },
  planTagline: {
    fontSize: ['14px', '15px'],
    lineHeight: 1.6,
    color: 'text_secondary',
    mb: ['20px', '24px'],
    minHeight: [null, null, null, '48px'],
  },
  priceRow: {
    alignItems: 'baseline',
    gap: '6px',
    mb: '8px',
  },
  price: {
    fontSize: ['36px', '42px'],
    fontWeight: 700,
    lineHeight: 1,
    color: 'heading',
    letterSpacing: '-1px',
  },
  pricePeriod: {
    fontSize: ['15px', '16px'],
    fontWeight: 500,
    color: 'text_secondary',
  },
  priceNote: {
    fontSize: '13px',
    color: 'text_secondary',
    mb: ['20px', '24px'],
    minHeight: '20px',
  },
  cta: {
    width: '100%',
    borderRadius: '12px',
    fontSize: ['15px', '16px'],
    fontWeight: 600,
    py: '14px',
    px: '20px',
    mb: ['20px', '24px'],
  },
  ctaSecondary: {
    border: '1px solid',
    borderColor: 'border_color',
  },
  featuresIntro: {
    fontSize: ['13px', '14px'],
    fontWeight: 700,
    color: 'heading',
    mb: '12px',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    mt: 'auto',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    mb: '12px',
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
  crossIcon: {
    flexShrink: 0,
    fontSize: '20px',
    color: 'border_color',
    mt: '1px',
  },
  featureText: {
    fontSize: ['14px', '15px'],
    lineHeight: 1.5,
    color: 'text',
  },
  featureTextBold: {
    fontWeight: 600,
    color: 'heading',
  },
  featureTextMuted: {
    color: 'text_secondary',
    textDecoration: 'line-through',
    textDecorationColor: 'rgba(107, 114, 128, 0.4)',
  },
  footnote: {
    display: 'block',
    textAlign: 'center',
    fontSize: ['13px', '14px'],
    lineHeight: 1.7,
    color: 'text_secondary',
    mt: ['32px', '40px'],
    px: ['20px', '0px'],
  },
};

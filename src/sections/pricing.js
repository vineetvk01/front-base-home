/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { keyframes } from '@emotion/react';
import { Container, Box, Flex, Heading, Text, Button, Grid } from 'theme-ui';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { FaGift } from 'react-icons/fa';

// Soft attention pulse — draws the eye to the offer without nagging.
const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.45); }
  50% { box-shadow: 0 0 0 7px rgba(16, 185, 129, 0); }
`;

// Every tier CTA routes back to the one email capture in the hero.
import { nudgeEmailForm } from 'lib/nudge-email-form';

// Annual billing = 10x the monthly price, i.e. 2 months free.
const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For founders sending their first campaigns',
    monthly: 19,
    annual: 190,
    buttonText: 'Start free trial',
    buttonVariant: 'secondary',
    ctaNote: '14-day trial · No credit card',
    features: [
      { text: '2,000 emails per month', isAvailable: true, highlight: true },
      { text: '2 connected mailboxes', isAvailable: true },
      { text: '500 AI credits per month', isAvailable: true },
      { text: 'Unlimited contacts & unlimited warmup', isAvailable: true },
      { text: 'Unified inbox', isAvailable: true },
      { text: 'Meeting scheduler', isAvailable: false },
      { text: 'API, MCP & webhooks', isAvailable: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most popular',
    tagline: 'For teams with outbound as a real channel',
    monthly: 49,
    annual: 490,
    buttonText: 'Start free trial',
    buttonVariant: 'primary',
    ctaNote: '14-day trial · No credit card',
    highlighted: true,
    featuresIntro: 'Everything in Starter, plus:',
    features: [
      { text: 'Unlimited email sending', isAvailable: true, highlight: true },
      { text: '10 connected mailboxes', isAvailable: true, highlight: true },
      { text: '5,000 AI credits per month', isAvailable: true },
      { text: 'Up to 3 team seats', isAvailable: true },
      {
        text: 'Meeting scheduler with calendar sync',
        isAvailable: true,
        highlight: true,
      },
      { text: 'API, MCP & webhooks', isAvailable: true, highlight: true },
      { text: 'CRM integrations & A/B testing', isAvailable: true },
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'For sales teams running outbound at volume',
    monthly: 99,
    annual: 990,
    buttonText: 'Talk to us',
    buttonVariant: 'secondary',
    ctaNote: 'We reply within one business day',
    featuresIntro: 'Everything in Growth, plus:',
    features: [
      {
        text: 'Unlimited mailboxes & unlimited seats',
        isAvailable: true,
        highlight: true,
      },
      { text: '25,000 AI credits per month', isAvailable: true, highlight: true },
      {
        text: 'AI prospect research & list building',
        isAvailable: true,
        highlight: true,
      },
      { text: 'Round-robin routing & team reports', isAvailable: true },
      { text: 'Deliverability monitoring & DNS setup', isAvailable: true },
      { text: 'SSO / SAML', isAvailable: true },
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
            Pricing that scales with your send volume
          </Heading>
          <Text sx={styles.description}>
            Every plan includes unlimited contacts and unlimited inbox warmup.
            You pay for sending volume, mailboxes and AI credits — the things
            that actually grow when outbound starts working.
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
          {isAnnual ? (
            <Box sx={{ ...styles.saveBadge, ...styles.saveBadgeApplied }}>
              <IoIosCheckmarkCircle sx={styles.saveBadgeIcon} />
              <Text as="span">2 months free applied</Text>
            </Box>
          ) : (
            // Clickable so the offer can be claimed directly, not just read.
            <Box
              as="button"
              type="button"
              aria-label="Switch to annual billing and get 2 months free"
              onClick={() => setBilling('annual')}
              sx={{ ...styles.saveBadge, ...styles.saveBadgeOffer }}
            >
              <FaGift sx={styles.saveBadgeIcon} />
              <Text as="span">Get 2 months free</Text>
              <Text as="span" sx={styles.saveBadgeSave}>
                Save 17%
              </Text>
            </Box>
          )}
        </Flex>

        <Grid sx={styles.grid}>
          {plans.map((plan) => {
            const price = isAnnual ? monthlyEquivalent(plan) : plan.monthly;

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
                    /month
                  </Text>
                </Flex>
                <Text sx={styles.priceNote}>
                  {isAnnual
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
                  onClick={nudgeEmailForm}
                >
                  {plan.buttonText}
                </Button>
                <Text sx={styles.ctaNote}>{plan.ctaNote}</Text>

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
          All plans include unlimited contacts, unlimited inbox warmup and
          unlimited sequences. Change plans or cancel anytime — no contracts, no
          setup fees.
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
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'body',
    fontSize: ['12px', '13px'],
    fontWeight: 700,
    letterSpacing: '0.3px',
    borderRadius: '30px',
    padding: '8px 8px 8px 14px',
    whiteSpace: 'nowrap',
    border: 0,
    lineHeight: 1.2,
  },
  // Unclaimed: solid fill so it reads as a live offer rather than a label.
  saveBadgeOffer: {
    color: 'white',
    backgroundColor: 'success',
    cursor: 'pointer',
    animation: `${pulse} 2.4s ease-out infinite`,
    transition: 'transform 0.2s ease, filter 0.2s ease',
    '&:hover': {
      filter: 'brightness(1.08)',
      transform: 'translateY(-1px)',
    },
    '&:focus-visible': {
      outline: '2px solid',
      outlineColor: 'heading',
      outlineOffset: '2px',
    },
    '@media (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
  // Claimed: recedes to a confirmation so it stops competing for attention.
  saveBadgeApplied: {
    color: 'success',
    backgroundColor: 'rgba(16, 185, 129, 0.12)',
    padding: '8px 14px',
  },
  saveBadgeIcon: {
    flexShrink: 0,
    fontSize: '15px',
  },
  saveBadgeSave: {
    fontSize: ['11px', '12px'],
    fontWeight: 700,
    letterSpacing: '0.4px',
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    borderRadius: '30px',
    padding: '3px 9px',
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
    letterSpacing: '-0.03em',
    // Lining tabular figures so $19 / $49 / $99 share a width and the three
    // columns line up, and digits don't shift when the billing toggle flips.
    fontVariantNumeric: 'tabular-nums lining-nums',
    fontFeatureSettings: "'tnum' 1, 'lnum' 1",
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
    mb: '10px',
  },
  ctaSecondary: {
    border: '1px solid',
    borderColor: 'border_color',
  },
  ctaNote: {
    display: 'block',
    textAlign: 'center',
    fontSize: '12px',
    color: 'text_secondary',
    mb: ['20px', '24px'],
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

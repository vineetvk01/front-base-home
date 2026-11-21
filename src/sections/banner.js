 /** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { useCallback, useEffect, useState } from 'react';
import { Container, Box, Heading, Text } from 'theme-ui';
import { CiCreditCardOff } from 'react-icons/ci';
import { FaBolt } from 'react-icons/fa';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import EmailSignupForm from 'components/email-signup-form';
import {
  NUDGE_EMAIL_EVENT,
  HERO_EMAIL_INPUT_ID,
  HERO_FORM_ANCHOR_ID,
} from 'lib/nudge-email-form';

export default function Banner() {
  const [isNudging, setIsNudging] = useState(false);

  const handleNudge = useCallback(() => {
    const input = document.getElementById(HERO_EMAIL_INPUT_ID);
    const target = input || document.getElementById(HERO_FORM_ANCHOR_ID);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (!input) return; // already submitted — the success box is showing

    // focus() would fight the smooth scroll, so wait for it to settle.
    window.setTimeout(() => input.focus({ preventScroll: true }), 500);

    // Drop the class first so a second click replays the animation.
    setIsNudging(false);
    window.requestAnimationFrame(() => setIsNudging(true));
  }, []);

  useEffect(() => {
    window.addEventListener(NUDGE_EMAIL_EVENT, handleNudge);
    return () => window.removeEventListener(NUDGE_EMAIL_EVENT, handleNudge);
  }, [handleNudge]);

  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Heading as="h1" variant="heroPrimary" sx={styles.banner.heading}>
          Grow your list without
          <br />
          <Box as="span" sx={styles.banner.highlight}>
            growing your bill
          </Box>
        </Heading>

        <Text as="p" variant="heroSecondary" sx={styles.banner.description}>
          You only pay for the emails you actually send &mdash; never for the
          dormant subscribers sitting on your list. From $19 a month.
        </Text>

        <EmailSignupForm
          inputId={HERO_EMAIL_INPUT_ID}
          formId={HERO_FORM_ANCHOR_ID}
          nudge={isNudging}
          onNudgeEnd={() => setIsNudging(false)}
        />

        <Box sx={styles.banner.subTextContainer}>
          <Box sx={styles.banner.trustItem}>
            <MdOutlineMarkEmailRead
              sx={{ ...styles.banner.trustIcon, color: 'info' }}
            />
            <Text as="span">Unlimited subscribers</Text>
          </Box>
          <Box sx={styles.banner.trustItem}>
            <CiCreditCardOff
              sx={{ ...styles.banner.trustIcon, color: 'primary' }}
            />
            <Text as="span">No credit card</Text>
          </Box>
          <Box sx={styles.banner.trustItem}>
            <FaBolt sx={{ ...styles.banner.trustIcon, color: 'accent' }} />
            <Text as="span">Import your list in minutes</Text>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['60px', null, null, null, null, null, null, null],
    position: 'relative',
    zIndex: 2,
    container: {
      padding: ['60px 20px 20px', '80px 20px 24px', '110px 20px 30px'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    heading: {
      // Line-height and tracking come from the heroPrimary variant; setting them
      // here too would override it with values tuned for much smaller type.
      marginBottom: ['18px', '20px', '22px'],
      maxWidth: ['100%', '100%', '20ch'],
      mx: 'auto',
    },
    // Marker-pen underline. Painted as a background layer rather than a
    // positioned pseudo-element so it never fights the section's stacking
    // context, and so it follows the text if the phrase wraps.
    highlight: {
      display: 'inline',
      backgroundImage:
        'linear-gradient(rgba(139, 92, 246, 0.22), rgba(139, 92, 246, 0.22))',
      backgroundSize: '100% 0.3em',
      backgroundPosition: '0 88%',
      backgroundRepeat: 'no-repeat',
    },
    description: {
      fontSize: ['16px', '17px', '19px'],
      lineHeight: [1.7, 1.75],
      marginBottom: 0,
      maxWidth: '520px',
      mx: 'auto',
      letterSpacing: '0.2px',
      color: 'text_secondary',
    },
    // Horizontal row reads as one reassurance line rather than three stacked
    // claims competing with the CTA for attention.
    subTextContainer: {
      marginTop: ['20px', '24px'],
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: ['10px 18px', '10px 22px'],
    },
    trustItem: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      '& span': {
        fontSize: ['13px', '14px'],
        fontWeight: 500,
        color: 'text_secondary',
        lineHeight: 1.2,
        whiteSpace: 'nowrap',
      },
    },
    trustIcon: {
      fontSize: '17px',
      flexShrink: 0,
    },
  },
};

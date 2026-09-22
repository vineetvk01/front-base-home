 /** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { useCallback, useEffect, useState } from 'react';
import { keyframes } from '@emotion/react';
import { Container, Box, Heading, Text, Button, Input, Label } from 'theme-ui';
import { CiCreditCardOff } from "react-icons/ci";
import { FaArrowCircleRight, FaBolt, FaCheckCircle, FaRobot } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import {
  NUDGE_EMAIL_EVENT,
  HERO_EMAIL_INPUT_ID,
  HERO_FORM_ANCHOR_ID,
} from 'lib/nudge-email-form';

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  15% { transform: translateX(-7px); }
  30% { transform: translateX(7px); }
  45% { transform: translateX(-5px); }
  60% { transform: translateX(5px); }
  75% { transform: translateX(-2px); }
`;

// Posting to /formResponse (not /viewform) is what actually records a response.
const FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSepsUYD3zwxP4K6CjEwXgW2vHhETCiP1eEtfY9ghku6PA4msw/formResponse';
const FORM_EMAIL_FIELD = 'entry.53585159';

export default function Banner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');

    try {
      await fetch(FORM_ACTION, {
        method: 'POST',
        // Google Forms returns no CORS headers, so the response is opaque — we
        // can confirm the request left the browser but not read its status.
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ [FORM_EMAIL_FIELD]: email }).toString(),
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Box sx={styles.banner.eyebrow}>
            <FaRobot sx={styles.banner.eyebrowIcon} />
            <Text as="span">AI agent for cold email</Text>
          </Box>
          <Heading as="h1" variant="heroPrimary" sx={styles.banner.heading}>
            Let an AI agent run your cold outreach.
          </Heading>
          <Text as="p" variant="heroSecondary" sx={styles.banner.description}>
          Frontbase writes the sequences, warms your inboxes, answers the replies, and books the meeting — so your pipeline fills while you work on everything else.
          </Text>
          {status === 'success' ? (
            <Box sx={styles.banner.successBox} role="status" aria-live="polite">
              <FaCheckCircle sx={styles.banner.successIcon} />
              <Box>
                <Text as="p" sx={styles.banner.successTitle}>
                  You&rsquo;re on the list.
                </Text>
                <Text as="p" sx={styles.banner.successText}>
                  We&rsquo;ll reach back in your inbox at {email} with an offer
                  &mdash; stay tuned.
                </Text>
              </Box>
            </Box>
          ) : (
            <Box
              as="form"
              id={HERO_FORM_ANCHOR_ID}
              onSubmit={handleSubmit}
              sx={styles.banner.form}
            >
              <Label htmlFor={HERO_EMAIL_INPUT_ID} sx={styles.banner.srOnly}>
                Work email
              </Label>
              <Input
                id={HERO_EMAIL_INPUT_ID}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onAnimationEnd={() => setIsNudging(false)}
                sx={{
                  ...styles.banner.emailInput,
                  ...(isNudging ? styles.banner.emailInputNudge : {}),
                }}
              />
              <Button
                type="submit"
                variant="primary"
                disabled={status === 'submitting'}
                sx={styles.banner.startedFreeButton}
              >
                {status === 'submitting' ? 'Starting…' : 'Start Free Trial'}
                <FaArrowCircleRight sx={styles.banner.arrowIcon} />
              </Button>
              {status === 'error' && (
                <Text as="p" sx={styles.banner.errorText} role="alert">
                  Something went wrong. Please try again, or email us at
                  vineet@frontbaseapp.com.
                </Text>
              )}
            </Box>
          )}
          <Box sx={styles.banner.subTextContainer}>
            <Box sx={styles.banner.trustItem}>
              <MdOutlineMarkEmailRead sx={{ ...styles.banner.trustIcon, color: 'info' }} />
              <Text as="span">14-day free trial</Text>
            </Box>
            <Box sx={styles.banner.trustItem}>
              <CiCreditCardOff sx={{ ...styles.banner.trustIcon, color: 'primary' }} />
              <Text as="span">No credit card</Text>
            </Box>
            <Box sx={styles.banner.trustItem}>
              <FaBolt sx={{ ...styles.banner.trustIcon, color: 'accent' }} />
              <Text as="span">Five-minute setup</Text>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.banner.videoContainer}>
          {/* Decorative loop: muted + playsInline are what let it autoplay on
              mobile Safari and Chrome; without muted the browser blocks it. */}
          <video
            src="https://res.cloudinary.com/ditoriefv/video/upload/v1790014704/video_animation_kwj6fi.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
          />
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
      minHeight: '50vh',
      padding: ['50px 20px', '70px 20px', '100px 10px'],
      display: 'flex',
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'center',
      alignItems: 'center',
      gap: ['30px', '40px', '0px'],
    },
    heading: {
      // Line-height and tracking come from the heroPrimary variant; setting them
      // here too would override it with values tuned for much smaller type.
      marginBottom: ['20px', '24px', '28px'],
      maxWidth: ['100%', '100%', '18ch'],
      marginLeft: ['auto', 'auto', '0px'],
      marginRight: ['auto', 'auto', '0px'],
    },
    description: {
      fontSize: ['16px', '17px', '18px'],
      lineHeight: [1.7, 1.8],
      marginBottom: ['32px', '40px'],
      maxWidth: '600px',
      marginLeft: ['auto', 'auto', '0px'],
      marginRight: ['auto', 'auto', '0px'],
      letterSpacing: '0.3px',
    },
    videoContainer: {
      width: ['100%', '80%', '200px', null, '57%', '60%', '68%', '60%'],
      mx: ['auto', 'auto', 'right'],
      textAlign: ['center', 'center', 'right'],
      mb: ['20px', '30px', null, null, null, 7],
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      '& video': {
        width: '100%',
        height: 'auto',
        maxHeight: ['240px', '300px', '90%'],
        maxWidth: '100%',
        objectFit: 'contain',
        display: 'block',
        borderRadius: ['10px', '12px'],
      },
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: ['auto', 'auto', 'left'],
      textAlign: ['center', 'center', 'left'],
      mb: ['40px', '40px', null, null, null, 7],
      px: ['20px', '20px', '0px'],
    },
    eyebrow: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      mb: ['16px', '20px'],
      py: '7px',
      px: '14px',
      borderRadius: '30px',
      backgroundColor: 'muted',
      border: '1px solid',
      borderColor: 'border_color',
      '& span': {
        fontSize: ['12px', '13px'],
        fontWeight: 600,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'heading_secondary',
        lineHeight: 1,
      },
    },
    eyebrowIcon: {
      fontSize: '15px',
      color: 'accent',
      flexShrink: 0,
    },
    // Horizontal row reads as one reassurance line rather than three stacked
    // claims competing with the CTA for attention.
    subTextContainer: {
      marginTop: ['24px', '28px'],
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: ['center', 'center', 'flex-start'],
      gap: ['10px 18px', '10px 22px'],
      px: ['20px', '20px', '0px'],
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
    // Input and button share one column so they line up at every breakpoint.
    form: {
      marginTop: ['26px', '30px', '34px'],
      width: ['100%', '320px', '340px'],
      mx: ['auto', 'auto', '0px'],
      px: ['20px', '0px'],
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    srOnly: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0,
    },
    emailInput: {
      width: '100%',
      height: ['52px', '54px'],
      borderRadius: '12px',
      border: '1px solid',
      borderColor: 'border_color',
      backgroundColor: 'background',
      px: '16px',
      fontFamily: 'body',
      fontSize: ['15px', '16px'],
      color: 'heading',
      transition: 'all 0.2s ease',
      '&::placeholder': {
        color: 'text_secondary',
      },
      '&:focus': {
        borderColor: 'primary',
        boxShadow: '0 0 0 3px rgba(17, 24, 39, 0.1)',
        outline: 'none',
      },
      // Only flag invalid input once the user has actually typed something.
      '&:not(:placeholder-shown):invalid': {
        borderColor: 'error',
      },
    },
    emailInputNudge: {
      borderColor: 'primary',
      boxShadow: '0 0 0 3px rgba(17, 24, 39, 0.12)',
      animation: `${shake} 0.5s ease-in-out`,
      // Users who ask for less motion get the highlight without the shake.
      '@media (prefers-reduced-motion: reduce)': {
        animation: 'none',
      },
    },
    errorText: {
      fontSize: '13px',
      lineHeight: 1.5,
      color: 'error',
      m: 0,
    },
    successBox: {
      marginTop: ['26px', '30px', '34px'],
      width: ['100%', '360px', '380px'],
      mx: ['auto', 'auto', '0px'],
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      textAlign: 'left',
      p: ['16px', '18px'],
      borderRadius: '12px',
      backgroundColor: 'rgba(16, 185, 129, 0.08)',
      border: '1px solid',
      borderColor: 'rgba(16, 185, 129, 0.35)',
    },
    successIcon: {
      flexShrink: 0,
      fontSize: '20px',
      color: 'success',
      mt: '2px',
    },
    successTitle: {
      fontSize: ['15px', '16px'],
      fontWeight: 600,
      color: 'heading',
      m: 0,
      mb: '4px',
    },
    successText: {
      fontSize: ['13px', '14px'],
      lineHeight: 1.6,
      color: 'text_secondary',
      m: 0,
      wordBreak: 'break-word',
    },
    startedFreeButton: {
      borderRadius: '12px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: ['center', 'center', 'flex-start'],
      gap: '10px',
      transition: 'all 0.3s ease',
      fontSize: ['16px', '16px', '16px'],
      py: ['14px', '16px'],
      px: ['20px', '24px'],
      fontWeight: 600,
      letterSpacing: '0.3px',
      '&:hover': {
        gap: '15px',
      },
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
    arrowIcon: {
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateX(2px)',
      },
    }
  },
};

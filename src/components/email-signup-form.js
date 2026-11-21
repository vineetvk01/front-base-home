/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { keyframes } from '@emotion/react';
import { Box, Text, Button, Input, Label } from 'theme-ui';
import { FaArrowCircleRight, FaCheckCircle } from 'react-icons/fa';

// The one email capture used in both the hero and the footer, so the two cannot
// drift apart in look, copy or behaviour. The hero additionally drives the
// `nudge` prop, which other CTAs on the page use to pull attention back here.
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

export default function EmailSignupForm({
  inputId,
  formId,
  buttonLabel = 'Get started',
  placeholder = 'you@company.com',
  nudge = false,
  onNudgeEnd,
  align = 'center',
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

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

  const mx = align === 'left' ? ['auto', 'auto', '0px'] : 'auto';

  if (status === 'success') {
    return (
      // Keeps the anchor id alive after submitting, so CTAs elsewhere on the
      // page can still scroll the user here instead of finding nothing.
      <Box
        id={formId}
        sx={{ ...styles.successBox, mx }}
        role="status"
        aria-live="polite"
      >
        <FaCheckCircle sx={styles.successIcon} />
        <Box>
          <Text as="p" sx={styles.successTitle}>
            You&rsquo;re on the list.
          </Text>
          <Text as="p" sx={styles.successText}>
            We&rsquo;ll reach back in your inbox at {email} with your workspace
            invite &mdash; stay tuned.
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box as="form" id={formId} onSubmit={handleSubmit} sx={{ ...styles.form, mx }}>
      <Box sx={styles.formRow}>
        <Label htmlFor={inputId} sx={styles.srOnly}>
          Work email
        </Label>
        <Input
          id={inputId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onAnimationEnd={onNudgeEnd}
          sx={{
            ...styles.emailInput,
            ...(nudge ? styles.emailInputNudge : {}),
          }}
        />
        <Button
          type="submit"
          variant="primary"
          disabled={status === 'submitting'}
          sx={styles.submitButton}
        >
          {status === 'submitting' ? 'Starting…' : buttonLabel}
          <FaArrowCircleRight sx={styles.arrowIcon} />
        </Button>
      </Box>
      {status === 'error' && (
        <Text as="p" sx={styles.errorText} role="alert">
          Something went wrong. Please try again, or email us at
          vineet@frontbaseapp.com.
        </Text>
      )}
    </Box>
  );
}

const styles = {
  form: {
    marginTop: ['26px', '30px', '34px'],
    width: ['100%', '460px', '480px'],
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  // Stacks on the narrowest screens, one line everywhere else.
  formRow: {
    display: 'flex',
    flexDirection: ['column', 'row'],
    gap: '10px',
    width: '100%',
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
    flex: '1 1 auto',
    width: '100%',
    minWidth: 0,
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
    width: ['100%', '400px', '420px'],
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
  submitButton: {
    borderRadius: '12px',
    flexShrink: 0,
    height: ['52px', '54px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    fontSize: ['16px', '16px', '16px'],
    py: 0,
    px: ['20px', '24px'],
    fontWeight: 600,
    letterSpacing: '0.3px',
    whiteSpace: 'nowrap',
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
  },
};

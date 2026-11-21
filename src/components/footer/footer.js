import { jsx, Box, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import EmailSignupForm from 'components/email-signup-form';
import data from './footer.data';

const FooterLogo = '/assets/gravity-icon.png';

// Distinct from the hero form's ids — two elements cannot share one DOM id, and
// the hero's nudge behaviour looks itself up by id.
const FOOTER_EMAIL_INPUT_ID = 'footer-email';
const FOOTER_FORM_ANCHOR_ID = 'footer-email-form';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.sectionTitle}>
          <Heading as="h2">Built for writers,<br />not for media companies</Heading>
          <Text sx={styles.sectionDescription}>
            We built Frontbase because newsletter tooling charges you more every time your list grows, then bills the website separately. If you write the thing yourself and want the bill to make sense, this is for you.
          </Text>
          <Box sx={styles.formWrapper}>
            <EmailSignupForm
              inputId={FOOTER_EMAIL_INPUT_ID}
              formId={FOOTER_FORM_ANCHOR_ID}
            />
            <Text sx={styles.formNote}>
              14-day free trial &middot; No credit card &middot; Unlimited
              subscribers
            </Text>
          </Box>
        </Box>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={FooterLogo} alt="Logo" style={{ height: "80px" }} />
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label, onClick = () => {}}, i) => (
                <Link
                  path={path}
                  key={i}
                  onClick={onClick}
                  label={label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            <b>Mail: <a href="mailto:vineet@frontbaseapp.com">vineet@frontbaseapp.com</a></b>
          </Text>
          <br />
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} | FrontBase Automations Lab
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
  sectionTitle: {
    textAlign: 'center',
    // The six-widget grid used to sit below this block and needed room for it;
    // with only the signup form here, the footer divider's own top padding is
    // already most of the gap.
    mb: [2, 3, 4],
    py: [6, 7, 8],
    h2: {
      fontSize: [4, 5, 6],
      fontWeight: 700,
      color: 'heading',
      mb: [4, 5, 6],
      lineHeight: [1.22, 1.18, 1.14],
      letterSpacing: ['-0.02em', '-0.025em', '-0.03em'],
    },
  },
  sectionDescription: {
    fontSize: ['15px', '17px', '18px'],
    lineHeight: [1.7, 1.8, 1.9],
    color: 'text',
    maxWidth: '800px',
    mx: 'auto',
    mb: 0,
    letterSpacing: '0.3px',
  },
  // Centres the shared signup form under the closing pitch.
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formNote: {
    mt: ['14px', '16px'],
    fontSize: ['13px', '14px'],
    color: 'text_secondary',
    textAlign: 'center',
  },
};

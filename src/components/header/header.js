/** @jsxImportSource theme-ui */
import { Box, Container, Flex, Button, Text } from 'theme-ui';
import Logo from 'components/logo';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import NavLink from './nav-link';
import menuItems from './header.data';
import { nudgeEmailForm, HERO_FORM_ANCHOR_ID } from 'lib/nudge-email-form';

const LogoDark = 'assets/gravity-icon.png';

export default function Header({ className }) {
  // The header also renders on /privacy and /terms, which have no signup form —
  // there the CTA has to go home to find one rather than fire into nothing.
  const handleGetStarted = () => {
    if (
      typeof document !== 'undefined' &&
      document.getElementById(HERO_FORM_ANCHOR_ID)
    ) {
      nudgeEmailForm();
      return;
    }
    window.location.href = '/';
  };

  return (
      <DrawerProvider>
        <header sx={styles.header} className={className} id="header">
          <Container sx={styles.container}>
            <Box sx={styles.brand}>
              <Logo src={LogoDark} style={{ width: '30px' }} />
              <Text variant="heading" sx={styles.brandName}>
                FrontBase
              </Text>
            </Box>
            <Flex as="nav" sx={styles.nav}>
              {menuItems.map(({ path, label, onClick }, i) => (
                <NavLink key={i} path={path} label={label} onClick={onClick} />
              ))}
            </Flex>

            <Button
              variant="primary"
              aria-label="Get started"
              onClick={handleGetStarted}
              sx={styles.cta}
            >
              Get started
            </Button>
            <MobileDrawer />
          </Container>
        </header>
      </DrawerProvider>
  );
}

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nav > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Brand is one unit so the flex row has a single left-hand child to balance
  // the nav and CTA against.
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexShrink: 0,
  },
  brandName: {
    fontSize: ['17px', '18px', null, null, '19px'],
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    whiteSpace: 'nowrap',
  },
  cta: {
    flexShrink: 0,
    // The bar's own type scale — smaller than the in-page buttons, which carry
    // the hero and pricing CTAs and should stay the louder ones.
    fontSize: ['13px', '14px'],
    fontWeight: 600,
    py: ['9px', '10px'],
    px: ['14px', '18px'],
    borderRadius: '10px',
    // Below 1024px the nav is display:none, so without ml:auto the container's
    // space-between strands this button in the middle of the bar instead of
    // next to the menu icon. From 1024px the nav's own ml:auto takes the space
    // and the button only needs a small gap after it.
    ml: ['auto', null, null, null, 3, 4],
  },
  nav: {
    // ml:auto absorbs the free space, so the nav sits right-aligned next to the
    // CTA rather than centred in the bar.
    ml: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      // Was theme index 2 (16px) — brought down with the rest of the bar.
      fontSize: '15px',
      fontWeight: 'body',
      px: [4, null, null, null, 3, 4, 4],
      cursor: 'pointer',
      lineHeight: '1.2',
      whiteSpace: 'nowrap',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};

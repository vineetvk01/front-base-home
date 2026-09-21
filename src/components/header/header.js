/** @jsxImportSource theme-ui */
import { Container, Flex, Button, Text } from 'theme-ui';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

const LogoDark = 'assets/gravity-icon.png';
const BOOK_A_CALL_URL = 'https://calendly.com/vineetsri/basic-intro';

export default function Header({ className }) {
  return (
      <DrawerProvider>
        <header sx={styles.header} className={className} id="header">
          <Container sx={styles.container}>
            <Logo src={LogoDark} style={{ width: "40px" }} />
            <Text variant="heading" style={{ fontSize: "22px" }}>FrontBase</Text>
            <Flex as="nav" sx={styles.nav}>
              {menuItems.map(({ path, label, onClick = () => {} }, i) => (
                <Link
                  activeClass="active"
                  to={path}
                  onClick={onClick}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={i}
                >
                  {label}
                </Link>
              ))}
            </Flex>

            <Button
              variant="secondary"
              aria-label="Book a call"
              onClick={() => window.open(BOOK_A_CALL_URL, '_blank', 'noopener,noreferrer')}
            >
              Book a call
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
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: [4, null, null, null, 5],
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

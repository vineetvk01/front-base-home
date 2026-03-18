import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';

const FooterLogo = '/assets/gravity-icon.png';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.sectionTitle}>
          <Heading as="h2">Built for modern SaaS teams,<br />not feedback chaos</Heading>
          <Text sx={styles.sectionDescription}>
            We built Frontbase because existing tools are either too expensive, too complicated, or ignore what customers actually want. Frontbase is simple, powerful, and customer-centric.
          </Text>
        </Box>
        <Grid sx={styles.widgets}>
          {data.widgets.map((item) => (
            <Box
              key={`footer-widget--key${item.id}`}
              sx={styles.widgets.widgetItem}
            >
              <Image src={item.iconSrc} alt={item.altText} />
              <Box sx={styles.widgets.infoWrapper}>
                <Heading as="h3">{item.title}</Heading>
                <Text as="p">{item.description}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        {/* End of footer widgets area */}
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
    mb: [8, 12, 16],
    py: [6, 8, 10],
    h2: {
      fontSize: [4, 5, 6],
      fontWeight: 700,
      color: 'heading',
      mb: [4, 5, 6],
      lineHeight: 1.2,
      letterSpacing: '-0.5px',
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
  widgets: {
    py: [10, 12, 14],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['50px 0', null, '60px 40px', null, '70px 50px', '60px 100px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(3,1fr)',
    ],
    widgetItem: {
      textAlign: 'center',
    },
    infoWrapper: {
      mt: [3, 4, null, 3, 5],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, 3, null, null, '15px'],
        letterSpacing: '-0.3px',
      },
      p: {
        fontSize: ['14px', '15px', '16px'],
        fontWeight: 400,
        lineHeight: 1.6,
        color: 'text_secondary',
        letterSpacing: '0.2px',
      },
    },
  },
};

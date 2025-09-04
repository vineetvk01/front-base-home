 /** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button, Link } from 'theme-ui';
import { FaArrowCircleRight } from "react-icons/fa";
import Post from 'assets/post.svg';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h3" variant="heroPrimary">
            "Your users already know what to build next."
          </Heading>
          <Text as="p" variant="heroSecondary">
          Bring their feedback out of the inbox and into one simple hub with FrontBase —where you capture, prioritize, and act on the right ideas.
          </Text>
          <Button variant="primary" sx={styles.banner.startedFreeButton} onClick={() => window.open('https://go.frontbaseapp.com')}>
            Get Started Free 
            <FaArrowCircleRight sx={styles.banner.arrowIcon} />
          </Button>
          <Box sx={styles.banner.subTextContainer}>
            <Text as="p">No credit card required. No setup needed.</Text>
            {/* <Text as="p"><Link href='https://calendly.com/vineetsri/15min' target='_blank'>Connect with team.</Link> Schedule a call with us for demo</Text> */}
          </Box>
        </Box>
        <Box sx={styles.banner.videoContainer}>
          <img src={Post} alt='manage your customers' />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
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
    videoContainer: {
      width: ['100%', '80%', '200px', null, '57%', '60%', '68%', '60%'],
      mx: ['auto', 'auto', 'right'],
      textAlign: ['center', 'center', 'right'],
      mb: ['20px', '30px', null, null, null, 7],
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      '& img': {
        maxHeight: ['200px', '250px', '90%'],
        maxWidth: ['80%', '85%', '80%'],
        objectFit: 'contain',
      }
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: ['auto', 'auto', 'left'],
      textAlign: ['center', 'center', 'left'],
      mb: ['40px', '40px', null, null, null, 7],
      px: ['20px', '20px', '0px'],
          },
      subTextContainer: {
        marginTop: '10px',
        color: 'text_secondary',
        textAlign: ['center', 'center', 'left'],
        px: ['20px', '20px', '0px'],
      },
      startedFreeButton: {
      borderRadius: '12px',
      marginTop: ['30px', '35px', '40px'],
      width: ['100%', '280px', '220px'],
      display: 'flex',
      alignItems: 'center',
      justifyContent: ['center', 'center', 'flex-start'],
      gap: '10px',
      transition: 'all 0.3s ease',
      fontSize: ['16px', '16px', '16px'],
      py: ['12px', '12px', '12px'],
      '&:hover': {
        gap: '15px',
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

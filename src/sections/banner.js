/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button, Link } from 'theme-ui';
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
          <Button variant="primary" style={{marginTop: "40px"}} onClick={() => window.open('https://go.frontbaseapp.com')}>Get Started Free</Button>
          <div style={{marginTop: "10px", color: "#000"}} >
            <Text as="p">No credit card required. No setup needed.</Text>
            <Text as="p"><Link href='https://calendly.com/vineetsri/15min' target='_blank'>Connect with team.</Link> Schedule a call with us for demo</Text>
          </div>
        </Box>
        <Box sx={styles.banner.videoContainer}>
          <img src={Post} alt='manage your customers' style={{ maxHeight: "90%", maxWidth: "80%" }}/>
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
      padding: '100px 10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    videoContainer: {
      width: ['0%', '0%', '200px', null, '57%', '60%', '68%', '60%'],
      mx: 'right',
      textAlign: 'right',
      mb: ['40px', null, null, null, null, 7],
      overflow: 'hidden'
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'left',
      textAlign: 'left',
      mb: ['40px', null, null, null, null, 7],
    },
    rocketAnimation: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      minHeight: '300px',
      position: 'relative',
      '& svg': {
        filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))',
      },
      '& .stars circle': {
        filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3))',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          filter: 'drop-shadow(0 4px 12px rgba(255, 255, 255, 0.6))',
          transform: 'scale(1.2)',
        },
      },
      '& .rocket': {
        filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          filter: 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.3))',
          transform: 'scale(1.05)',
        },
      },
      '& .shooting-stars line': {
        strokeDasharray: '0,100',
        strokeLinecap: 'round',
        filter: 'drop-shadow(0 2px 4px rgba(255, 255, 255, 0.4))',
      },
      '& .nebula ellipse': {
        filter: 'drop-shadow(0 5px 15px rgba(147, 51, 234, 0.3))',
        transition: 'all 0.5s ease',
        '&:hover': {
          filter: 'drop-shadow(0 8px 20px rgba(147, 51, 234, 0.5))',
          transform: 'scale(1.1)',
        },
      },
    },
  },
};

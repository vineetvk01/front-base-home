/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button, Link } from 'theme-ui';
import Post from 'assets/post.svg';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Create client portal with No-Code
          </Heading>
          <Text as="p" variant="heroSecondary">
            Build, visualize, automate workflows, and design a path to guide clients through your processes, step-by-step.
          </Text>
          <Button variant="primary" style={{marginTop: "40px"}} onClick={() => window.open('https://go.frontbaseapp.com')}>Start Trial</Button>
          <div style={{marginTop: "10px", color: "#000"}} >
            <Text as="p"><Link href='https://go.frontbaseapp.com/auth/signup' target='_blank'>Sign up using email.</Link> No credit card required</Text>
            <Text as="p"><Link href='https://calendly.com/vineetsri/15min' target='_blank'>Connect with team.</Link> Schedule a call with us for demo</Text>
          </div>
        </Box>
        <Box sx={styles.banner.videoContainer}>
          <img src={Post} alt='manage your customers' style={{ maxHeight: "100%", maxWidth: "100%" }}/>
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
  },
};

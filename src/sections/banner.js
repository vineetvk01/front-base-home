 /** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button } from 'theme-ui';
import { BiSolidParty } from "react-icons/bi";
import { CiCreditCardOff } from "react-icons/ci";
import { FaArrowCircleRight, FaCogs, FaHeart, FaVoteYea } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h4" variant="heroPrimary">
            Build SaaS Products by <br />
              <Box as={MdOutlineFeedback} sx={{ color: 'info', fontSize: 4, display: 'inline-block', verticalAlign: 'middle', mx: 2 }} /> Collect feedbacks from your customers, <br />
              <Box as={FaVoteYea} sx={{ color: 'accent', fontSize: 4, display: 'inline-block', verticalAlign: 'middle', mx: 2 }} /> Prioritize with customer votes, <br />
              <Box as={FaHeart} sx={{ color: 'error', fontSize: 4, display: 'inline-block', verticalAlign: 'middle', mx: 2 }} /> Shipping Updates that your Customers Love.
          </Heading>
          <Text as="p" variant="heroSecondary">
          Frontbase is the all-in-one feedback engine for SaaS teams — with clean idea boards, auto-syncing roadmaps, self-updating changelogs, and engagement loops that run on autopilot.
          </Text>
          <Button variant="primary" sx={styles.banner.startedFreeButton} onClick={() => window.open('https://go.frontbaseapp.com')}>
            Get Started Free 
            <FaArrowCircleRight sx={styles.banner.arrowIcon} />
          </Button>
          <Box sx={styles.banner.subTextContainer}>
            <Text as="p">
              <Box as={BiSolidParty} sx={{ color: 'info', fontSize: 3, display: 'inline-block', verticalAlign: 'middle', mr: 2 }} />
              Free forever plan <br />
              <Box as={CiCreditCardOff} sx={{ color: 'primary', fontSize: 3, display: 'inline-block', verticalAlign: 'middle', mr: 2 }} />
              No credit card required.<br />
              <Box as={FaCogs} sx={{ color: 'accent', fontSize: 3, display: 'inline-block', verticalAlign: 'middle', mr: 2 }} />
              No setup needed.
            </Text>
            {/* <Text as="p"><Link href='https://calendly.com/vineetsri/15min' target='_blank'>Connect with team.</Link> Schedule a call with us for demo</Text> */}
          </Box>
        </Box>
        <Box sx={styles.banner.videoContainer}>
          <img src="https://res.cloudinary.com/ditoriefv/image/upload/v1761897650/production/static-images/portal-mockup-image_lipsy7.png" alt='manage your customers' />
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
        maxWidth: ['100%', '100%', '100%'],
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

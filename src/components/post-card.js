 
import { jsx, Image, Box, Heading, Text, Flex, Link } from 'theme-ui';
import { MdContentCopy } from "react-icons/md";

export default function PostCard({
  src,
  alt,
  postLink,
  title,
  username,
  password,
}) {
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied to clipboard: ${text}`);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
  return (
    <Box sx={styles.card}>
      <Box sx={styles.thumbnail}>
        <Image src={src} alt={alt} />
      </Box>

      <Flex sx={styles.postContent}>
        <Heading sx={styles.title}>
          <Link href={postLink} variant="blog" target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        </Heading>

        <Flex sx={styles.postFooter}>
          <Text sx={styles.postFooter.name}>{username}<MdContentCopy sx={styles.postFooter.copy} onClick={() => copyToClipboard(username)} /></Text>
          <Text sx={styles.postFooter.date}>{password}<MdContentCopy sx={styles.postFooter.copy} onClick={() => copyToClipboard(password)} /></Text>
        </Flex>
      </Flex>
    </Box>
  );
}

const styles = {
  card: {
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(38,78,118,0.12)',
    borderRadius: '7px',
    m: '0 15px 40px',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0px 5px 20px rgba(38,78,118,0.15)',
    },
  },

  thumbnail: {
    borderRadius: '7px 7px 0 0',
    overflow: 'hidden',
    display: 'flex',
    img: {
      width: '100%',
    },
  },
  postContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: ['15px 20px', '25px 30px'],
  },
  title: {
    fontSize: [3, null, null, null, null, 4],
    color: 'heading',
    lineHeight: [1.4, 1.5],
    fontWeight: 700,
    mb: [3, 4, 5],
    pr: [0, null, null, null, 5],
  },
  postFooter: {
    width: '100%',
    justifyContent: 'space-between',
    alignItem: 'center',
    name: {
      fontSize: ['14px', null, 2],
      fontWeight: 400,
      color: 'primary',
      lineHeight: 1.4,
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    date: {
      fontSize: ['14px', null, 2],
      fontWeight: 400,
      lineHeight: 1.5,
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    copy: {
      cursor: 'pointer',
    },
  },
};

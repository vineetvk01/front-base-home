/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

const data = [
  {
    id: 1,
    imgSrc: "https://res.cloudinary.com/ditoriefv/image/upload/v1748708088/production/static-images/online-courses.png",
    altText: 'Online Course',
    postLink: 'https://portal.frontbaseapp.com/course/auth/login',
    title: 'Online Course: Teach & Manage Your Students',
    username: 'demo@frontbaseapp.com',
    password: 'demo',
  },
  {
    id: 2,
    imgSrc: "https://res.cloudinary.com/ditoriefv/image/upload/v1748706477/production/static-images/agency-portal.png",
    altText: 'Agency',
    postLink: 'https://portal.frontbaseapp.com/agency/auth/login',
    title: 'Product Agency: Manage Your Clients & Projects',
    username: 'demo@frontbaseapp.com',
    password: 'demo',
  },
  {
    id: 3,
    imgSrc: "https://res.cloudinary.com/ditoriefv/image/upload/v1748706800/production/static-images/school-portal.png",
    altText: 'School',
    postLink: 'https://portal.frontbaseapp.com/school/auth/login',
    title: 'School Management: Parents & Students',
    username: 'demo@frontbaseapp.com',
    password: 'demo',
  },
  {
    id: 4,
    imgSrc: "https://res.cloudinary.com/ditoriefv/image/upload/v1748711252/production/static-images/paid-discovery.png",
    altText: 'paid discovery',
    postLink: 'https://portal.frontbaseapp.com/paid/auth/login',
    title: 'Paid discovery: Get Paid for Your Expertise',
    username: 'demo@frontbaseapp.com',
    password: 'demo',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSection() {
  return (
    <section sx={{ variant: 'section.news' }}>
      <Container>
        <SectionHeader
          slogan="Sample Portals"
          title="Explore our sample portal similar to your business solution"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                username={item.username}
                password={item.password}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};

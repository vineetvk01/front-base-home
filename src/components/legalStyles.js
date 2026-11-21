// Shared presentation for the Privacy Policy and Terms of Service pages.
// These are theme-ui `sx` objects, not plain inline styles: the rest of the site
// scales its type across breakpoints and pulls colours from the theme, and these
// two pages looked undersized and off-palette while they used fixed pixels.
export const CONTACT_EMAIL = 'vineet@frontbaseapp.com';

const legalStyles = {
  page: {
    pt: ['110px', '130px', '150px'],
    pb: ['60px', '80px', '100px'],
    px: ['20px', '24px'],
  },
  wrap: {
    maxWidth: '760px',
    mx: 'auto',
    color: 'text',
    fontSize: ['16px', '17px'],
    lineHeight: [1.7, 1.75],
  },
  h1: {
    fontSize: ['30px', '34px', '40px'],
    lineHeight: [1.2, 1.18, 1.15],
    letterSpacing: ['-0.02em', '-0.025em'],
    color: 'heading',
    fontWeight: 700,
    m: 0,
    mb: ['10px', '12px'],
  },
  meta: {
    fontSize: ['13px', '14px'],
    lineHeight: 1.6,
    color: 'text_secondary',
    m: 0,
    mb: '8px',
  },
  summary: {
    mt: ['28px', '32px'],
    mb: ['34px', '40px'],
    p: ['18px', '20px 24px'],
    borderRadius: '12px',
    backgroundColor: 'background_secondary',
    border: '1px solid',
    borderColor: 'border_color',
  },
  summaryTitle: {
    fontSize: ['15px', '16px'],
    fontWeight: 700,
    color: 'heading',
    m: 0,
    mb: '10px',
  },
  h2: {
    fontSize: ['21px', '23px', '25px'],
    lineHeight: [1.3, 1.25],
    letterSpacing: '-0.015em',
    color: 'heading',
    fontWeight: 700,
    mt: ['34px', '40px', '46px'],
    mb: ['10px', '12px'],
  },
  h3: {
    fontSize: ['17px', '18px'],
    lineHeight: 1.4,
    color: 'heading',
    fontWeight: 600,
    mt: ['24px', '28px'],
    mb: '8px',
  },
  p: {
    m: 0,
    mb: '16px',
  },
  ul: {
    m: 0,
    mb: '16px',
    pl: '22px',
    listStyle: 'disc',
  },
  li: {
    m: 0,
    mb: '8px',
  },
  link: {
    color: 'heading',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    '&:hover': {
      color: 'accent',
    },
  },
  // Terms-only: the numbered index at the top of the document.
  toc: {
    m: 0,
    mb: '8px',
    pl: '22px',
    fontSize: ['15px', '16px'],
  },
  tocItem: {
    mb: '4px',
  },
  tocLink: {
    color: 'text',
    textDecoration: 'none',
    '&:hover': {
      color: 'heading',
      textDecoration: 'underline',
    },
  },
};

export default legalStyles;

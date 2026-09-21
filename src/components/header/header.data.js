export default [
  {
    path: 'home',
    label: 'Home',
  },
  {
    path: 'features',
    label: 'Features',
  },
  {
    path: 'pricing',
    label: 'Pricing',
  },
  {
    path: '',
    label: 'Release Notes',
    onClick: () => {
      window.open("https://portal.frontbaseapp.com/frontbase/updates");
    },
  },
  {
    path: '',
    label: 'Feature Request',
    onClick: () => {
      window.open("https://portal.frontbaseapp.com/frontbase/feedback");
    },
  },
];

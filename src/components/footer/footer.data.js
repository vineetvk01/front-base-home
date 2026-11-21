export default {
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/privacy',
      label: 'Privacy',
    },
    {
      path: '/terms',
      label: 'Terms and Conditions',
    },
    {
      path: '',
      label: 'Release Notes',
      onClick: () => {
        window.open("https://portal.frontbaseapp.com/frontbase/updates");
      },
    },
  ],
};

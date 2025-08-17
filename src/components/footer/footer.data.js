import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Yes from 'assets/widget/yes.svg';
import Cash from 'assets/widget/cash.svg';
import From from 'assets/widget/form.svg';
import Database from 'assets/widget/database.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: From,
      altText: 'Feedback',
      title: 'Collect Actionable Feedback',
      description:
        'Give your users a simple way to share ideas and suggestions. Every input is tracked, so nothing slips through the cracks.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Customers',
      title: 'Vote & Prioritize',
      description:
        'Let your community vote on features. Instantly see what’s popular and focus your energy where it delivers the most impact.',
    },
    {
      id: 3,
      iconSrc: Cash,
      altText: 'Chat',
      title: 'Automate Customer Updates',
      description:
        'Keep users engaged with automatic notifications and status updates—without the manual effort.',
    },
    {
      id: 4,
      iconSrc: Yes,
      altText: 'Approve',
      title: 'Track Issues & Ship Fixes',
      description:
        'Show customers you’re listening by turning reported bugs into clear, trackable tasks that lead to fast resolutions.',
    },
    {
      id: 5,
      iconSrc: Chat,
      altText: 'Details',
      title: 'Discuss & Understand Requests',
      description:
        'Go beyond feature lists. Dive into conversations that reveal the “why” behind every request and build with context.',
    },
    {
      id: 6,
      iconSrc: Database,
      altText: 'Stay Organized',
      title: 'Stay in Sync & Organized',
      description:
        'Keep your roadmap clear and transparent with automatic changelogs that align updates across your team and customers.',
    },
  ],
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
    // {
    //   path: '',
    //   label: 'Contact',
    //   onClick: () => {
    //     window.open("https://www.notion.so/Release-Notes-fa9a5589597c4adfbbc469ae3c6fbe8a");
    //   },
    // },
  ],
};

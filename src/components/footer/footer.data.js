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
      altText: 'Sequences',
      title: 'Sequences Written For You',
      description:
        'Describe your offer once. Your agent drafts the opener, the follow-ups and the fallbacks, personalised per prospect rather than mail-merged.',
    },
    {
      id: 2,
      iconSrc: Database,
      altText: 'Deliverability',
      title: 'Deliverability On Autopilot',
      description:
        'Continuous warmup on every connected mailbox, randomised send pacing, and DNS checks that catch SPF and DKIM problems before you send.',
    },
    {
      id: 3,
      iconSrc: Chat,
      altText: 'Inbox',
      title: 'One Unified Inbox',
      description:
        'Every reply from every sending account lands in one place, sorted by intent, with a draft response already waiting for you.',
    },
    {
      id: 4,
      iconSrc: Yes,
      altText: 'Replies',
      title: 'Replies Handled Around The Clock',
      description:
        'Your agent answers in your voice, pauses the sequence the moment someone responds, and escalates the prospects worth your time.',
    },
    {
      id: 5,
      iconSrc: Community,
      altText: 'Meetings',
      title: 'Meetings Booked In-Thread',
      description:
        'Real times from your calendar offered inside the same email thread, confirmed without a scheduling link or a single extra round trip.',
    },
    {
      id: 6,
      iconSrc: Cash,
      altText: 'Pipeline',
      title: 'Pipeline You Can Actually See',
      description:
        'Know which sequence, mailbox and opener produced each meeting, so you scale what works instead of guessing at it.',
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

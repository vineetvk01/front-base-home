/** @jsxImportSource theme-ui */
import { useState, useRef, useEffect } from 'react';
import { Container, Box, Text } from 'theme-ui';
import { FiEdit3, FiCalendar, FiGlobe, FiZap } from 'react-icons/fi';
import { FiBold, FiItalic, FiList, FiImage, FiLink2 } from 'react-icons/fi';
import { TbChartHistogram } from 'react-icons/tb';
import {
  MdOutlineSpaceDashboard,
  MdOutlineCampaign,
  MdOutlineAutoAwesome,
  MdOutlinePeopleAlt,
  MdOutlineMarkEmailRead,
  MdOutlineLanguage,
  MdOutlineVpnKey,
} from 'react-icons/md';
import { SiClaude, SiOpenai, SiGooglegemini, SiZapier, SiNotion } from 'react-icons/si';
import { nudgeEmailForm } from 'lib/nudge-email-form';

// Each tab names the sidebar row it should light up, so the mock app stays
// internally consistent as the viewer clicks across it.
const TABS = [
  { id: 'write', label: 'Write', icon: FiEdit3, nav: 'Campaigns' },
  { id: 'schedule', label: 'Schedule', icon: FiCalendar, nav: 'Campaigns' },
  { id: 'stats', label: 'Stats', icon: TbChartHistogram, nav: 'Overview' },
  { id: 'website', label: 'Website', icon: FiGlobe, nav: 'Newsletters' },
  { id: 'automations', label: 'Automations', icon: FiZap, nav: 'Automations' },
];

const SIDEBAR_NAV = [
  { label: 'Overview', icon: MdOutlineSpaceDashboard },
  { label: 'Campaigns', icon: MdOutlineCampaign },
  { label: 'Automations', icon: MdOutlineAutoAwesome },
  { label: 'Subscribers', icon: MdOutlinePeopleAlt },
  { label: 'Newsletters', icon: MdOutlineMarkEmailRead },
  { label: 'Domains', icon: MdOutlineLanguage },
  { label: 'API keys', icon: MdOutlineVpnKey },
];

const TAB_URLS = {
  write: 'frontbaseapp.com/campaigns/6f3a9c',
  schedule: 'frontbaseapp.com/campaigns/schedule',
  stats: 'frontbaseapp.com/overview',
  website: 'frontbaseapp.com/newsletters/site',
  automations: 'frontbaseapp.com/automations/welcome',
};

// The agent-facing strip under the frame: the same surface, driven by tools.
const AGENT_LOGOS = [
  { id: 'claude', icon: SiClaude, label: 'Claude' },
  { id: 'openai', icon: SiOpenai, label: 'ChatGPT' },
  { id: 'gemini', icon: SiGooglegemini, label: 'Gemini' },
  { id: 'zapier', icon: SiZapier, label: 'Zapier' },
  { id: 'notion', icon: SiNotion, label: 'Notion' },
];

function WritePanel() {
  return (
    <Box sx={styles.panel}>
      <Box sx={styles.fieldRow}>
        <Text as="span" sx={styles.fieldLabel}>
          Subject
        </Text>
        <Text as="span" sx={styles.fieldValueStrong}>
          The 10-minute habit that beats an hour at the gym
        </Text>
      </Box>
      <Box sx={styles.fieldRow}>
        <Text as="span" sx={styles.fieldLabel}>
          Preview
        </Text>
        <Text as="span" sx={styles.fieldValue}>
          Three studies worth your time this week
        </Text>
      </Box>

      <Box sx={styles.toolbar}>
        {[FiBold, FiItalic, FiList, FiImage, FiLink2].map((Icon, i) => (
          <Box key={i} sx={styles.toolbarButton}>
            <Icon />
          </Box>
        ))}
        <Box sx={styles.toolbarSpacer} />
        <Box sx={styles.aiChip}>
          <MdOutlineAutoAwesome />
          <Text as="span">Draft with AI</Text>
        </Box>
      </Box>

      <Box sx={styles.editorBody}>
        <Text as="h4" sx={styles.editorHeading}>
          Short walks, long benefits
        </Text>
        <Text as="p" sx={styles.editorParagraph}>
          Hi friends — every week I read the new research so you do not have to,
          and pull out the three findings that actually change what you do on a
          Monday morning.
        </Text>
        <Box sx={styles.editorImages}>
          <Box sx={styles.editorImage} />
          <Box sx={styles.editorImage} />
        </Box>
        <Text as="p" sx={styles.editorSubheading}>
          This week&rsquo;s three
        </Text>
        <Box as="ul" sx={styles.editorList}>
          <Box as="li">Ten minutes of brisk walking after a meal cut post-meal glucose by 17%.</Box>
          <Box as="li">Lifting twice a week held off age-related muscle loss as well as four.</Box>
          <Box as="li">A consistent bedtime beat total sleep hours for next-day focus.</Box>
        </Box>
      </Box>
    </Box>
  );
}

function SchedulePanel() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const queue = [
    {
      name: 'Issue #48 — Short walks, long benefits',
      when: 'Thu, 9:00 AM',
      audience: '12,480 subscribers',
      state: 'Scheduled',
      tone: 'scheduled',
    },
    {
      name: 'Welcome email',
      when: 'On signup',
      audience: 'New subscribers',
      state: 'Automated',
      tone: 'automated',
    },
    {
      name: 'Issue #49 — The monthly research roundup',
      when: 'Mon, 9:00 AM',
      audience: '12,480 subscribers',
      state: 'Draft',
      tone: 'draft',
    },
  ];

  return (
    <Box sx={styles.panel}>
      <Box sx={styles.panelHeader}>
        <Text as="h4" sx={styles.panelTitle}>
          Send schedule
        </Text>
        <Box sx={styles.timezonePill}>
          <FiCalendar />
          <Text as="span">Subscriber local time</Text>
        </Box>
      </Box>

      <Box sx={styles.weekStrip}>
        {days.map((day, i) => (
          <Box
            key={day}
            sx={{
              ...styles.weekDay,
              ...(i === 3 ? styles.weekDayActive : {}),
            }}
          >
            <Text as="span" sx={styles.weekDayName}>
              {day}
            </Text>
            <Text as="span" sx={styles.weekDayNum}>
              {12 + i}
            </Text>
            {i === 3 && <Box sx={styles.weekDayDot} />}
          </Box>
        ))}
      </Box>

      <Box sx={styles.queueList}>
        {queue.map((item) => (
          <Box key={item.name} sx={styles.queueRow}>
            <Box sx={styles.queueMain}>
              <Text as="span" sx={styles.queueName}>
                {item.name}
              </Text>
              <Text as="span" sx={styles.queueMeta}>
                {item.when} · {item.audience}
              </Text>
            </Box>
            <Box
              sx={{
                ...styles.queueState,
                ...(styles.queueStateTone[item.tone] || {}),
              }}
            >
              {item.state}
            </Box>
          </Box>
        ))}
      </Box>

      <Text as="p" sx={styles.panelFootnote}>
        Sends are metered per email. Nothing is charged for the 12,480 names
        sitting on the list between issues.
      </Text>
    </Box>
  );
}

function StatsPanel() {
  const tiles = [
    { label: 'Emails sent', value: '48,920', delta: '+12%' },
    { label: 'Open rate', value: '52.4%', delta: '+3.1pt' },
    { label: 'Click rate', value: '9.8%', delta: '+0.6pt' },
    { label: 'Cost this month', value: '$19', delta: 'flat' },
  ];
  // Paired open/click percentages per issue. Bar heights are drawn as a share
  // of CHART_MAX rather than of 100, so the tallest bar nearly fills the plot
  // instead of leaving the top half of the card empty.
  const CHART_MAX = 62;
  const bars = [
    { issue: '41', open: 46, click: 8 },
    { issue: '42', open: 49, click: 9 },
    { issue: '43', open: 44, click: 7 },
    { issue: '44', open: 53, click: 11 },
    { issue: '45', open: 51, click: 9 },
    { issue: '46', open: 57, click: 12 },
    { issue: '47', open: 52, click: 10 },
  ];

  return (
    <Box sx={styles.panel}>
      <Box sx={styles.panelHeader}>
        <Text as="h4" sx={styles.panelTitle}>
          Last 30 days
        </Text>
        <Box sx={styles.timezonePill}>
          <TbChartHistogram />
          <Text as="span">All newsletters</Text>
        </Box>
      </Box>

      <Box sx={styles.tileGrid}>
        {tiles.map((tile) => (
          <Box key={tile.label} sx={styles.tile}>
            <Text as="span" sx={styles.tileLabel}>
              {tile.label}
            </Text>
            <Text as="span" sx={styles.tileValue}>
              {tile.value}
            </Text>
            <Text as="span" sx={styles.tileDelta}>
              {tile.delta}
            </Text>
          </Box>
        ))}
      </Box>

      <Box sx={styles.chartCard}>
        <Box sx={styles.chartLegend}>
          <Box sx={styles.legendItem}>
            <Box sx={{ ...styles.legendSwatch, backgroundColor: '#111827' }} />
            <Text as="span">Opens</Text>
          </Box>
          <Box sx={styles.legendItem}>
            <Box sx={{ ...styles.legendSwatch, backgroundColor: '#C4B5FD' }} />
            <Text as="span">Clicks</Text>
          </Box>
        </Box>
        <Box sx={styles.chart}>
          {bars.map((bar) => (
            <Box key={bar.issue} sx={styles.chartColumn}>
              <Box sx={styles.chartBars}>
                <Box
                  sx={{
                    ...styles.chartBar,
                    height: `${Math.round((bar.open / CHART_MAX) * 100)}%`,
                    backgroundColor: '#111827',
                  }}
                />
                <Box
                  sx={{
                    ...styles.chartBar,
                    height: `${Math.round((bar.click / CHART_MAX) * 100)}%`,
                    backgroundColor: '#C4B5FD',
                  }}
                />
              </Box>
              <Text as="span" sx={styles.chartLabel}>
                #{bar.issue}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function WebsitePanel() {
  const posts = [
    { title: 'Short walks, long benefits', date: 'Nov 14' },
    { title: 'What the new sleep research actually says', date: 'Nov 7' },
    { title: 'Protein, simplified: the October roundup', date: 'Oct 31' },
  ];

  return (
    <Box sx={styles.panel}>
      <Box sx={styles.sitePreview}>
        <Box sx={styles.siteHeader}>
          <Text as="span" sx={styles.siteBrand}>
            Health Weekly
          </Text>
          <Box sx={styles.siteNav}>
            <Text as="span">Archive</Text>
            <Text as="span">About</Text>
            <Box sx={styles.siteSubscribeBtn}>Subscribe</Box>
          </Box>
        </Box>

        <Box sx={styles.siteHero}>
          <Text as="h4" sx={styles.siteHeroTitle}>
            Evidence-based health, every Thursday.
          </Text>
          <Text as="p" sx={styles.siteHeroText}>
            Three findings, plain language, no supplement pitches. Free forever.
          </Text>
          <Box sx={styles.siteForm}>
            <Box sx={styles.siteInput}>you@email.com</Box>
            <Box sx={styles.siteFormBtn}>Subscribe</Box>
          </Box>
        </Box>

        <Box sx={styles.sitePosts}>
          {posts.map((post) => (
            <Box key={post.title} sx={styles.sitePost}>
              <Box sx={styles.sitePostThumb} />
              <Box>
                <Text as="span" sx={styles.sitePostTitle}>
                  {post.title}
                </Text>
                <Text as="span" sx={styles.sitePostDate}>
                  {post.date}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Text as="p" sx={styles.panelFootnote}>
        Hosted archive, signup page and custom domain included — no separate
        website bill.
      </Text>
    </Box>
  );
}

function AutomationsPanel() {
  const steps = [
    {
      kind: 'Trigger',
      title: 'Someone subscribes',
      meta: 'Any signup form or API',
      tone: 'trigger',
    },
    {
      kind: 'Send',
      title: 'Welcome email',
      meta: 'Immediately · 94% open rate',
      tone: 'send',
    },
    { kind: 'Wait', title: 'Wait 2 days', meta: 'Skips weekends', tone: 'wait' },
    {
      kind: 'Branch',
      title: 'If opened → best-of issue',
      meta: 'Otherwise re-send with a new subject',
      tone: 'branch',
    },
    {
      kind: 'Send',
      title: 'Add to weekly audience',
      meta: 'Then the regular Thursday send takes over',
      tone: 'send',
    },
  ];

  return (
    <Box sx={styles.panel}>
      <Box sx={styles.panelHeader}>
        <Text as="h4" sx={styles.panelTitle}>
          Welcome sequence
        </Text>
        <Box sx={{ ...styles.queueState, ...styles.queueStateTone.automated }}>
          Live
        </Box>
      </Box>

      <Box sx={styles.flow}>
        {steps.map((step, i) => (
          <Box key={step.title} sx={styles.flowItem}>
            <Box sx={styles.flowNode}>
              <Box
                sx={{
                  ...styles.flowKind,
                  ...(styles.flowKindTone[step.tone] || {}),
                }}
              >
                {step.kind}
              </Box>
              <Box sx={styles.flowBody}>
                <Text as="span" sx={styles.flowTitle}>
                  {step.title}
                </Text>
                <Text as="span" sx={styles.flowMeta}>
                  {step.meta}
                </Text>
              </Box>
            </Box>
            {i < steps.length - 1 && <Box sx={styles.flowConnector} />}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const PANELS = {
  write: WritePanel,
  schedule: SchedulePanel,
  stats: StatsPanel,
  website: WebsitePanel,
  automations: AutomationsPanel,
};

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState('write');
  const active = TABS.find((tab) => tab.id === activeTab) || TABS[0];
  const Panel = PANELS[active.id];
  const tabRefs = useRef({});

  // When the row is narrow enough to scroll, selecting a tab that is partly off
  // the edge should bring it into view. block:'nearest' keeps this horizontal —
  // without it the page jumps vertically too.
  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  }, [activeTab]);

  return (
    <section sx={styles.section} id="product">
      <Container>
        <Box sx={styles.tabScroller}>
          <Box sx={styles.tabRow} role="tablist" aria-label="Product preview">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <Box
                as="button"
                type="button"
                key={tab.id}
                ref={(node) => {
                  tabRefs.current[tab.id] = node;
                }}
                role="tab"
                aria-selected={isActive}
                aria-controls="product-preview-panel"
                onClick={() => setActiveTab(tab.id)}
                sx={{
                  ...styles.tab,
                  ...(isActive ? styles.tabActive : {}),
                }}
              >
                <Icon sx={styles.tabIcon} />
                <Text as="span">{tab.label}</Text>
              </Box>
            );
          })}
          </Box>
        </Box>

        <Box sx={styles.frame}>
          <Box sx={styles.chrome}>
            <Box sx={styles.dots}>
              <Box sx={styles.dot} />
              <Box sx={styles.dot} />
              <Box sx={styles.dot} />
            </Box>
            <Box sx={styles.urlBar}>
              <Text as="span">{TAB_URLS[active.id]}</Text>
            </Box>
          </Box>

          <Box sx={styles.appBody}>
            <Box sx={styles.sidebar} aria-hidden="true">
              <Box sx={styles.sidebarBrand}>
                <Box sx={styles.sidebarMark} />
                <Text as="span">Frontbase</Text>
              </Box>
              <Box sx={styles.sidebarNav}>
                {SIDEBAR_NAV.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.label === active.nav;
                  return (
                    <Box
                      key={item.label}
                      sx={{
                        ...styles.sidebarItem,
                        ...(isActive ? styles.sidebarItemActive : {}),
                      }}
                    >
                      <Icon sx={styles.sidebarIcon} />
                      <Text as="span">{item.label}</Text>
                    </Box>
                  );
                })}
              </Box>
              <Box sx={styles.sidebarUser}>
                <Box sx={styles.sidebarAvatar} />
                <Text as="span">Michael</Text>
              </Box>
            </Box>

            <Box
              sx={styles.main}
              id="product-preview-panel"
              role="tabpanel"
              aria-label={`${active.label} preview`}
            >
              <Panel />
            </Box>
          </Box>
        </Box>

        <Box sx={styles.agentStrip}>
          <Text as="p" sx={styles.agentText}>
            Everything you see here, your AI agent can do too.{' '}
            <Box as="button" type="button" onClick={nudgeEmailForm} sx={styles.agentLink}>
              See how
            </Box>
          </Text>
          <Box sx={styles.agentLogos}>
            {AGENT_LOGOS.map((logo) => {
              const Icon = logo.icon;
              return (
                <Box key={logo.id} sx={styles.agentLogo} title={logo.label}>
                  <Icon aria-hidden="true" />
                  <Text as="span" sx={styles.srOnly}>
                    {logo.label}
                  </Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    pt: ['30px', '36px', '44px'],
    pb: ['50px', '70px', '90px'],
    backgroundColor: 'background',
    position: 'relative',
    zIndex: 2,
  },
  // The scroll container is the wrapper, not the pill itself: with the pill
  // doing both jobs, a centred track that overflows leaves its first and last
  // tabs unreachable. The track is max-content with auto side margins, which
  // centres it while it fits and stays fully scrollable once it does not — at
  // any width, not just on phones.
  tabScroller: {
    display: 'flex',
    mb: ['22px', '26px', '30px'],
    overflowX: 'auto',
    overflowY: 'hidden',
    WebkitOverflowScrolling: 'touch',
    // Keeps the pill off the screen edge when it is scrolled on small screens.
    px: ['4px', 0],
    pb: '2px',
    // A slim scrollbar only shows up when there is actually overflow, so it is
    // the affordance when scrolling matters and invisible when it does not.
    scrollbarWidth: 'thin',
    scrollbarColor: '#D1D5DB transparent',
    '&::-webkit-scrollbar': { height: '6px' },
    '&::-webkit-scrollbar-track': { background: 'transparent' },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#D1D5DB',
      borderRadius: '3px',
    },
  },
  // Segmented control on a light track, matching the hero's pill language.
  tabRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    p: '5px',
    mx: 'auto',
    width: 'max-content',
    borderRadius: '999px',
    backgroundColor: 'muted',
    border: '1px solid',
    borderColor: 'border_color',
  },
  tab: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    flexShrink: 0,
    border: '1px solid transparent',
    borderRadius: '999px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    py: ['8px', '9px'],
    px: ['12px', '16px'],
    transition: 'all 0.2s ease',
    '& span': {
      fontFamily: 'body',
      fontSize: ['13px', '14px'],
      fontWeight: 500,
      color: 'text_secondary',
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
    },
    '&:hover span': {
      color: 'heading',
    },
    '&:hover svg': {
      color: 'heading',
    },
  },
  tabActive: {
    backgroundColor: 'background',
    borderColor: 'border_color',
    boxShadow: '0 1px 2px rgba(17, 24, 39, 0.06)',
    '& span': {
      color: 'heading',
      fontWeight: 600,
    },
    '& svg': {
      color: 'accent',
    },
  },
  tabIcon: {
    fontSize: ['14px', '15px'],
    color: 'text_secondary',
    flexShrink: 0,
    transition: 'color 0.2s ease',
  },
  frame: {
    borderRadius: ['12px', '14px', '16px'],
    overflow: 'hidden',
    border: '1px solid',
    borderColor: 'border_color',
    boxShadow: '0 24px 60px -24px rgba(17, 24, 39, 0.28)',
    backgroundColor: 'background',
  },
  chrome: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    px: ['12px', '16px'],
    py: ['9px', '11px'],
    backgroundColor: '#F3F4F6',
    borderBottom: '1px solid',
    borderColor: 'border_color',
  },
  dots: {
    display: 'flex',
    gap: '6px',
    flexShrink: 0,
  },
  dot: {
    width: '9px',
    height: '9px',
    borderRadius: '50%',
    backgroundColor: '#D1D5DB',
  },
  urlBar: {
    mx: 'auto',
    px: '14px',
    py: '4px',
    borderRadius: '999px',
    backgroundColor: 'background',
    border: '1px solid',
    borderColor: 'border_color',
    maxWidth: '70%',
    overflow: 'hidden',
    '& span': {
      fontSize: ['10px', '11px', '12px'],
      color: 'text_secondary',
      whiteSpace: 'nowrap',
    },
  },
  appBody: {
    display: 'flex',
    minHeight: ['380px', '440px', '520px'],
    backgroundColor: '#FBFBFC',
  },
  sidebar: {
    display: ['none', 'none', 'flex'],
    flexDirection: 'column',
    width: ['180px', null, '190px', '210px'],
    flexShrink: 0,
    backgroundColor: '#15161A',
    py: '16px',
    px: '12px',
  },
  sidebarBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    px: '8px',
    mb: '20px',
    '& span': {
      fontSize: '13px',
      fontWeight: 600,
      color: '#F9FAFB',
      letterSpacing: '-0.01em',
    },
  },
  sidebarMark: {
    width: '14px',
    height: '14px',
    borderRadius: '4px',
    background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
    flexShrink: 0,
  },
  sidebarNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
    px: '8px',
    py: '7px',
    borderRadius: '7px',
    transition: 'all 0.2s ease',
    '& span': {
      fontSize: '12.5px',
      fontWeight: 500,
      color: '#9CA3AF',
      lineHeight: 1.2,
    },
  },
  sidebarItemActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    '& span': {
      color: '#F9FAFB',
      fontWeight: 600,
    },
    '& svg': {
      color: '#F9FAFB',
    },
  },
  sidebarIcon: {
    fontSize: '15px',
    color: '#6B7280',
    flexShrink: 0,
  },
  sidebarUser: {
    mt: 'auto',
    pt: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    px: '8px',
    '& span': {
      fontSize: '12.5px',
      color: '#D1D5DB',
      fontWeight: 500,
    },
  },
  sidebarAvatar: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    flexShrink: 0,
  },
  main: {
    flex: '1 1 auto',
    minWidth: 0,
    backgroundColor: 'background',
  },
  panel: {
    p: ['14px', '18px', '22px'],
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

  // ----- Write -----
  fieldRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '12px',
    py: '9px',
    borderBottom: '1px solid',
    borderColor: 'border_color',
  },
  fieldLabel: {
    fontSize: ['11px', '12px'],
    fontWeight: 500,
    color: 'text_secondary',
    width: ['52px', '60px'],
    flexShrink: 0,
  },
  fieldValueStrong: {
    fontSize: ['12.5px', '14px'],
    fontWeight: 600,
    color: 'heading',
    lineHeight: 1.4,
  },
  fieldValue: {
    fontSize: ['12.5px', '13.5px'],
    color: 'text_secondary',
    lineHeight: 1.4,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    py: '8px',
    borderBottom: '1px solid',
    borderColor: 'border_color',
    mb: ['12px', '16px'],
  },
  toolbarButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '26px',
    height: '26px',
    borderRadius: '6px',
    color: 'text_secondary',
    fontSize: '13px',
    backgroundColor: 'muted',
  },
  toolbarSpacer: {
    flex: '1 1 auto',
  },
  aiChip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    px: '9px',
    py: '5px',
    borderRadius: '999px',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    color: 'accent',
    fontSize: '12px',
    '& span': {
      fontSize: ['10.5px', '11.5px'],
      fontWeight: 600,
      whiteSpace: 'nowrap',
    },
  },
  editorBody: {
    px: ['2px', '6px'],
  },
  editorHeading: {
    fontSize: ['15px', '17px', '19px'],
    fontWeight: 700,
    color: 'heading',
    letterSpacing: '-0.02em',
    m: 0,
    mb: ['8px', '10px'],
  },
  editorParagraph: {
    fontSize: ['12px', '13px'],
    lineHeight: 1.65,
    color: 'text',
    m: 0,
    mb: ['12px', '16px'],
  },
  editorImages: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: ['8px', '12px'],
    mb: ['12px', '16px'],
  },
  editorImage: {
    height: ['70px', '90px', '110px'],
    borderRadius: '8px',
    background:
      'linear-gradient(135deg, #1F2937 0%, #374151 45%, #6B7280 100%)',
  },
  editorSubheading: {
    fontSize: ['12.5px', '13.5px'],
    fontWeight: 600,
    color: 'heading',
    m: 0,
    mb: '7px',
  },
  editorList: {
    listStyle: 'none',
    p: 0,
    m: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    '& li': {
      position: 'relative',
      pl: '16px',
      fontSize: ['11.5px', '12.5px'],
      lineHeight: 1.55,
      color: 'text',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: '4px',
        top: '0.55em',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        backgroundColor: 'text_secondary',
      },
    },
  },

  // ----- Shared panel furniture -----
  panelHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    mb: ['14px', '18px'],
  },
  panelTitle: {
    fontSize: ['14px', '16px'],
    fontWeight: 600,
    color: 'heading',
    letterSpacing: '-0.01em',
    m: 0,
  },
  timezonePill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    px: '10px',
    py: '5px',
    borderRadius: '999px',
    border: '1px solid',
    borderColor: 'border_color',
    color: 'text_secondary',
    fontSize: '12px',
    '& span': {
      fontSize: ['10.5px', '11.5px'],
      fontWeight: 500,
      whiteSpace: 'nowrap',
    },
  },
  panelFootnote: {
    mt: 'auto',
    pt: ['14px', '18px'],
    fontSize: ['11px', '12px'],
    lineHeight: 1.6,
    color: 'text_secondary',
    m: 0,
  },

  // ----- Schedule -----
  weekStrip: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: ['4px', '6px'],
    mb: ['14px', '18px'],
  },
  weekDay: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3px',
    py: ['8px', '10px'],
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'border_color',
    backgroundColor: 'background',
  },
  weekDayActive: {
    backgroundColor: 'heading',
    borderColor: 'heading',
    '& span': {
      color: '#F9FAFB !important',
    },
  },
  weekDayName: {
    fontSize: ['9.5px', '10.5px'],
    fontWeight: 500,
    color: 'text_secondary',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  weekDayNum: {
    fontSize: ['12px', '13px'],
    fontWeight: 600,
    color: 'heading',
  },
  weekDayDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: '#C4B5FD',
  },
  queueList: {
    display: 'flex',
    flexDirection: 'column',
    gap: ['8px', '10px'],
  },
  queueRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    p: ['10px', '12px 14px'],
    borderRadius: '10px',
    border: '1px solid',
    borderColor: 'border_color',
    backgroundColor: 'background',
  },
  queueMain: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    minWidth: 0,
  },
  queueName: {
    fontSize: ['12px', '13px'],
    fontWeight: 600,
    color: 'heading',
    lineHeight: 1.35,
  },
  queueMeta: {
    fontSize: ['10.5px', '11.5px'],
    color: 'text_secondary',
    lineHeight: 1.35,
  },
  queueState: {
    flexShrink: 0,
    px: '9px',
    py: '4px',
    borderRadius: '999px',
    fontSize: ['10px', '11px'],
    fontWeight: 600,
    lineHeight: 1.3,
    whiteSpace: 'nowrap',
  },
  queueStateTone: {
    scheduled: {
      backgroundColor: 'rgba(6, 182, 212, 0.12)',
      color: '#0E7490',
    },
    automated: {
      backgroundColor: 'rgba(16, 185, 129, 0.12)',
      color: '#047857',
    },
    draft: {
      backgroundColor: 'muted',
      color: 'text_secondary',
    },
  },

  // ----- Stats -----
  tileGrid: {
    display: 'grid',
    gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
    gap: ['8px', '10px'],
    mb: ['12px', '16px'],
  },
  tile: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    p: ['10px', '12px'],
    borderRadius: '10px',
    border: '1px solid',
    borderColor: 'border_color',
    backgroundColor: 'background',
  },
  tileLabel: {
    fontSize: ['10px', '11px'],
    fontWeight: 500,
    color: 'text_secondary',
    letterSpacing: '0.01em',
  },
  tileValue: {
    fontSize: ['16px', '19px'],
    fontWeight: 700,
    color: 'heading',
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
  },
  tileDelta: {
    fontSize: ['10px', '11px'],
    fontWeight: 600,
    color: 'success',
  },
  chartCard: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    p: ['10px', '14px'],
    borderRadius: '10px',
    border: '1px solid',
    borderColor: 'border_color',
    backgroundColor: 'background',
    minHeight: ['150px', '180px'],
  },
  chartLegend: {
    display: 'flex',
    gap: '14px',
    mb: ['10px', '14px'],
  },
  legendItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    '& span': {
      fontSize: ['10px', '11px'],
      fontWeight: 500,
      color: 'text_secondary',
    },
  },
  legendSwatch: {
    width: '8px',
    height: '8px',
    borderRadius: '2px',
  },
  chart: {
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: ['6px', '12px'],
    minHeight: ['110px', '130px'],
  },
  chartColumn: {
    flex: '1 1 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    height: '100%',
  },
  chartBars: {
    flex: '1 1 auto',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: ['2px', '3px'],
    // Grounds the series on a visible axis instead of leaving them floating.
    borderBottom: '1px solid',
    borderColor: 'border_color',
  },
  chartBar: {
    width: ['8px', '14px'],
    borderRadius: '3px 3px 0 0',
    minHeight: '4px',
  },
  chartLabel: {
    fontSize: ['9px', '10px'],
    color: 'text_secondary',
    fontWeight: 500,
  },

  // ----- Website -----
  sitePreview: {
    borderRadius: '10px',
    border: '1px solid',
    borderColor: 'border_color',
    overflow: 'hidden',
    backgroundColor: 'background',
  },
  siteHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    px: ['12px', '16px'],
    py: ['9px', '11px'],
    borderBottom: '1px solid',
    borderColor: 'border_color',
  },
  siteBrand: {
    fontSize: ['12px', '13px'],
    fontWeight: 700,
    color: 'heading',
    letterSpacing: '-0.01em',
  },
  siteNav: {
    display: 'flex',
    alignItems: 'center',
    gap: ['8px', '12px'],
    '& span': {
      fontSize: ['10.5px', '11.5px'],
      color: 'text_secondary',
      display: ['none', 'inline'],
    },
  },
  siteSubscribeBtn: {
    px: '10px',
    py: '4px',
    borderRadius: '6px',
    backgroundColor: 'heading',
    color: '#F9FAFB',
    fontSize: ['10px', '11px'],
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  siteHero: {
    textAlign: 'center',
    px: ['14px', '20px'],
    py: ['18px', '24px'],
    backgroundColor: '#FAFAFA',
    borderBottom: '1px solid',
    borderColor: 'border_color',
  },
  siteHeroTitle: {
    fontSize: ['14px', '17px'],
    fontWeight: 700,
    color: 'heading',
    letterSpacing: '-0.02em',
    m: 0,
    mb: '6px',
  },
  siteHeroText: {
    fontSize: ['11px', '12px'],
    color: 'text_secondary',
    m: 0,
    mb: ['12px', '14px'],
  },
  siteForm: {
    display: 'flex',
    gap: '6px',
    maxWidth: '300px',
    mx: 'auto',
  },
  siteInput: {
    flex: '1 1 auto',
    px: '10px',
    py: '7px',
    borderRadius: '7px',
    border: '1px solid',
    borderColor: 'border_color',
    backgroundColor: 'background',
    fontSize: ['10.5px', '11.5px'],
    color: 'text_secondary',
    textAlign: 'left',
  },
  siteFormBtn: {
    px: '12px',
    py: '7px',
    borderRadius: '7px',
    backgroundColor: 'accent',
    color: '#FFFFFF',
    fontSize: ['10.5px', '11.5px'],
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  sitePosts: {
    display: 'flex',
    flexDirection: 'column',
  },
  sitePost: {
    display: 'flex',
    alignItems: 'center',
    gap: ['10px', '12px'],
    px: ['12px', '16px'],
    py: ['9px', '11px'],
    borderBottom: '1px solid',
    borderColor: 'border_color',
    '&:last-of-type': {
      borderBottom: 'none',
    },
  },
  sitePostThumb: {
    width: ['38px', '46px'],
    height: ['28px', '34px'],
    borderRadius: '6px',
    flexShrink: 0,
    background: 'linear-gradient(135deg, #374151, #9CA3AF)',
  },
  sitePostTitle: {
    display: 'block',
    fontSize: ['11.5px', '12.5px'],
    fontWeight: 600,
    color: 'heading',
    lineHeight: 1.35,
  },
  sitePostDate: {
    display: 'block',
    fontSize: ['10px', '11px'],
    color: 'text_secondary',
    mt: '2px',
  },

  // ----- Automations -----
  flow: {
    display: 'flex',
    flexDirection: 'column',
  },
  flowItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  flowNode: {
    display: 'flex',
    alignItems: 'center',
    gap: ['10px', '12px'],
    p: ['9px 10px', '11px 14px'],
    borderRadius: '10px',
    border: '1px solid',
    borderColor: 'border_color',
    backgroundColor: 'background',
  },
  flowKind: {
    flexShrink: 0,
    px: '8px',
    py: '4px',
    borderRadius: '6px',
    fontSize: ['9.5px', '10.5px'],
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    width: ['58px', '66px'],
    textAlign: 'center',
  },
  flowKindTone: {
    trigger: {
      backgroundColor: 'rgba(139, 92, 246, 0.12)',
      color: '#6D28D9',
    },
    send: {
      backgroundColor: 'rgba(6, 182, 212, 0.12)',
      color: '#0E7490',
    },
    wait: {
      backgroundColor: 'muted',
      color: 'text_secondary',
    },
    branch: {
      backgroundColor: 'rgba(245, 158, 11, 0.14)',
      color: '#B45309',
    },
  },
  flowBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    minWidth: 0,
  },
  flowTitle: {
    fontSize: ['12px', '13px'],
    fontWeight: 600,
    color: 'heading',
    lineHeight: 1.35,
  },
  flowMeta: {
    fontSize: ['10.5px', '11.5px'],
    color: 'text_secondary',
    lineHeight: 1.35,
  },
  flowConnector: {
    width: '2px',
    height: ['14px', '18px'],
    ml: ['19px', '27px'],
    backgroundColor: 'border_color',
  },

  // ----- Agent strip -----
  agentStrip: {
    mt: ['26px', '32px', '38px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: ['14px', '18px'],
  },
  agentText: {
    m: 0,
    textAlign: 'center',
    fontSize: ['13px', '14px', '15px'],
    color: 'text_secondary',
    lineHeight: 1.6,
  },
  agentLink: {
    border: 0,
    background: 'none',
    p: 0,
    cursor: 'pointer',
    fontFamily: 'body',
    fontSize: 'inherit',
    fontWeight: 600,
    color: 'heading',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    '&:hover': {
      color: 'accent',
    },
  },
  agentLogos: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: ['10px', '14px'],
  },
  agentLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: ['38px', '44px'],
    height: ['38px', '44px'],
    borderRadius: '12px',
    border: '1px solid',
    borderColor: 'border_color',
    backgroundColor: 'background',
    color: 'heading',
    fontSize: ['17px', '19px'],
    transition: 'all 0.2s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 14px -6px rgba(17, 24, 39, 0.3)',
    },
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0,
  },
};

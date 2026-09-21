// Lets any CTA on the page ask the hero email form for attention without
// threading callbacks through every section. Banner listens for this event.
export const NUDGE_EMAIL_EVENT = 'frontbase:nudge-email-form';

export const HERO_EMAIL_INPUT_ID = 'hero-email';
export const HERO_FORM_ANCHOR_ID = 'hero-email-form';

export function nudgeEmailForm() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(NUDGE_EMAIL_EVENT));
}

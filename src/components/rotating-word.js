/** @jsxImportSource theme-ui */
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SWAP_MS = 2600;

// Slot-machine swap: the current word slides up and out, the next rises from
// below. `layout` on the clipping span is what animates the width change
// between words of different lengths, instead of the rest of the line jumping.
export default function RotatingWord({ words }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Readers who ask for less motion keep the first word, static.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, SWAP_MS);

    return () => window.clearInterval(id);
  }, [words.length]);

  // No duplicate copy of the word for assistive tech: a visually hidden twin
  // would also sit in the DOM text, so the heading would read
  // "Your newsletternewsletter shouldn't…" to a crawler. The heading carries an
  // aria-label with the stable sentence instead.
  return (
    <motion.span layout style={styles.clip}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: '110%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-110%' }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-block' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

const styles = {
  clip: {
    display: 'inline-block',
    overflow: 'hidden',
    verticalAlign: 'bottom',
    // Clipping to the line box would cut the descenders in "campaign", so the
    // box is padded and the padding pulled back out to keep the baseline.
    paddingBottom: '0.14em',
    marginBottom: '-0.14em',
    whiteSpace: 'nowrap',
  },
};

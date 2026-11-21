import React from 'react';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';

// The landing page's sections (#home, #product, #features, #pricing) only exist
// on "/", so react-scroll has nothing to scroll to from /privacy or /terms and
// the link silently does nothing. On those pages the same label has to become a
// real link back to the home page's anchor instead.
export default function NavLink({ path, label, onClick, onNavigate }) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const handleClick = () => {
    if (onClick) onClick();
    if (onNavigate) onNavigate();
  };

  if (!isHome) {
    return (
      <a href={path ? `/#${path}` : '/'} onClick={handleClick}>
        {label}
      </a>
    );
  }

  return (
    <ScrollLink
      activeClass="active"
      to={path}
      onClick={handleClick}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {label}
    </ScrollLink>
  );
}

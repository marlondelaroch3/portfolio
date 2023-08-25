import { useEffect } from 'react';

const useSmoothScroll = (): void => {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')) {
        const hash = target.getAttribute('href');
        if (hash && hash.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
};

export default useSmoothScroll;

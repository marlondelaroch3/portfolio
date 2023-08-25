import { useEffect } from "react";

const useSmoothScroll = (): void => {
  const LINK_TO_TOP = "#top";
  const HASH_PREFIX = "#";
  const TARGET_TAG = "A";
  const SCROLL_BEHAVIOR = "smooth";
  const ATTRIBUTE_TO_GET = "href";

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === TARGET_TAG &&
        target.getAttribute(ATTRIBUTE_TO_GET)
      ) {
        const hash = target.getAttribute(ATTRIBUTE_TO_GET);
        if (hash && hash.startsWith(HASH_PREFIX) && hash !== LINK_TO_TOP) {
          e.preventDefault();
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: SCROLL_BEHAVIOR });
          }
        } else if (hash === LINK_TO_TOP) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: SCROLL_BEHAVIOR });
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);
};

export default useSmoothScroll;

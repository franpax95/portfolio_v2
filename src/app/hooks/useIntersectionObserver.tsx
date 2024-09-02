import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverHookOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useIntersectionObserver = (
  elements: string[], // Array of element IDs to observe
  options: IntersectionObserverHookOptions = {}
) => {
  const [activeId, setActiveId] = useState<string>('');
  const elementRefs = useRef<Map<string, IntersectionObserverEntry>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          elementRefs.current.set(entry.target.id, entry);
        });

        const visibleElements = Array.from(elementRefs.current.values())
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleElements.length > 0) {
          setActiveId(visibleElements[0].target.id);
        }
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || '0px',
        threshold: options.threshold || 0.25
      }
    );

    elements.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [elements, options]);

  return activeId;
};

import { useMemo, useRef, useState, useEffect } from 'react';
import clsx from 'classnames';

// Import all images from assets/food
import img1 from '../assets/food/delicebrugge-chickenburger.png';
import img2 from '../assets/food/delicebrugge-classic.jpg';
import img3 from '../assets/food/delicebrugge-dish.jpg';
import img4 from '../assets/food/delicebrugge-dish2.jpg';
import img5 from '../assets/food/delicebrugge-dish3.jpg';
import img6 from '../assets/food/delicebrugge-indoor1.jpg';
import img7 from '../assets/food/delicebrugge-leffe.png';
import img8 from '../assets/food/delicebrugge-pasta.jpg';
import img9 from '../assets/food/delicebrugge-shrimps.jpg';
import img10 from '../assets/food/delicebrugge-vlaamscarbonada.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function GalleryCarousel() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const total = images.length;

  const scrollToIndex = (i) => {
    const container = containerRef.current;
    if (!container) return;
    const child = container.children[i];
    if (!child) return;
    const left = child.offsetLeft - 8; // a little padding
    container.scrollTo({ left, behavior: 'smooth' });
  };

  useEffect(() => {
    // Subtle shake on mobile to hint scrollability
    const container = containerRef.current;
    if (!container) return;
    const media = window.matchMedia('(max-width: 640px)');
    if (!media.matches) return;
    const start = container.scrollLeft;
    container.scrollTo({ left: start + 24, behavior: 'smooth' });
    const id = setTimeout(() => container.scrollTo({ left: start, behavior: 'smooth' }), 350);
    return () => clearTimeout(id);
  }, []);

  const next = () => setIndex((p) => Math.min(p + 1, total - 1));
  const prev = () => setIndex((p) => Math.max(p - 1, 0));

  useEffect(() => {
    scrollToIndex(index);
  }, [index]);

  return (
    <div className="relative">
      {/* Desktop arrows */}
      <button
        type="button"
        onClick={prev}
        className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow border border-neutral-200 hover:bg-white"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow border border-neutral-200 hover:bg-white"
        aria-label="Next"
      >
        ›
      </button>

      <div
        ref={containerRef}
        className="no-scrollbar scroll-x-tabs grid grid-flow-col auto-cols-[80%] sm:auto-cols-[45%] lg:auto-cols-[25%] gap-3 sm:gap-4 overflow-x-auto"
      >
        {images.map((src, i) => (
          <div key={i} className="aspect-[4/3] w-full rounded-2xl bg-cover bg-center shadow-md" style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>
    </div>
  );
}



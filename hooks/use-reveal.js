import { useEffect, useRef, useState } from "react";

// Triggers EVERY time element enters viewport (re-animates on scroll up/down).
// Pass { once: true } to fire only once.
export const useReveal = ({ once = false, threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return [ref, visible];
};

// Animated count up — re-runs every time `start` flips false→true.
export const useCountUp = (end, duration = 1800, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }
    let raf;
    const startTime = performance.now();
    const numeric = parseFloat(String(end).replace(/[^\d.]/g, "")) || 0;
    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(numeric * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return value;
};

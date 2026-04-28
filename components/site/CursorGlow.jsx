import { useEffect, useRef } from "react";

// Soft glowing cursor follower (disabled on touch).
export const CursorGlow = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[55] h-[400px] w-[400px] rounded-full opacity-70 mix-blend-multiply hidden md:block"
      style={{
        background:
          "radial-gradient(circle at center, hsl(var(--primary) / 0.18) 0%, hsl(var(--accent) / 0.08) 35%, transparent 70%)",
        filter: "blur(20px)",
      }}
    />
  );
};

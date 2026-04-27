import { useReveal } from "@/hooks/use-reveal";

// Reusable scroll-reveal wrapper. Re-animates each time element re-enters viewport.
// Pass once={true} to disable re-trigger.
export const Reveal = ({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  once = false,
  className = "",
  children,
  style,
  ...rest
}) => {
  const [ref, visible] = useReveal({ once });
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...(style || {}) }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

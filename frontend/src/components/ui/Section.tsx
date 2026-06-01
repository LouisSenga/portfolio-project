import type { CSSProperties, ReactNode, RefObject } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  innerRef?: RefObject<HTMLDivElement | null>;
  style?: CSSProperties;
};

export default function Section({
  id,
  children,
  className,
  containerClassName = "section-container",
  containerStyle,
  innerRef,
  style,
}: SectionProps) {
  const sectionClassName = ["site-section", className].filter(Boolean).join(" ");

  return (
    <section
      id={id}
      className={sectionClassName}
      style={{ position: "relative", ...style }}>
      <div ref={innerRef} className={containerClassName} style={containerStyle}>
        {children}
      </div>
    </section>
  );
}

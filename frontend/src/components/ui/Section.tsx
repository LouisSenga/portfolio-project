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
  return (
    <section
      id={id}
      className={className}
      style={{ position: "relative", padding: "7rem 0", ...style }}>
      <div ref={innerRef} className={containerClassName} style={containerStyle}>
        {children}
      </div>
    </section>
  );
}

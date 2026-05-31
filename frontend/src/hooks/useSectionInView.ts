"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export function useSectionInView() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return { ref, inView };
}

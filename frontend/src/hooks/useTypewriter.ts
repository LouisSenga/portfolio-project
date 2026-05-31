"use client";

import { useEffect, useState } from "react";

export function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((value) => (value + 1) % words.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [deleting, displayed, index, words]);

  return displayed;
}

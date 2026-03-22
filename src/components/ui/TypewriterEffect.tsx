"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
}

export function TypewriterEffect({ words, className }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const tween = gsap.to(cursor, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else if (currentText.length > 0) {
        setCurrentText(word.substring(0, currentText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <span className={className}>
      {currentText}
      <span ref={cursorRef} className="ml-1 inline-block h-8 w-[3px] bg-[#d4a35f]" />
    </span>
  );
}

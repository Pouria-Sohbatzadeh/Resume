import React, { useState, useEffect } from "react";
import { ScrollButton } from "../../styled_component/ScrollButton";

export default function Previous_NextButtons({
  previousHandler,
  nextHandler,
  scrollContainerRef,
}) {
  const [activePrev, setActivePrev] = useState(false);
  const [activeNext, setActiveNext] = useState(false);

  useEffect(() => {
    if (!scrollContainerRef?.current) return;

    const container = scrollContainerRef.current;

    function updateActiveStates() {
      const { scrollLeft, scrollWidth, clientWidth } = container;

      const maxScrollLeft = scrollWidth - clientWidth;
      const tolerance = 1;

      // In RTL with negative scrollLeft:
      // At "start" (rightmost), scrollLeft === 0 (no scrolling)
      // At "end" (leftmost), scrollLeft === -maxScrollLeft

      // So "previous" button active when NOT at start (scrollLeft !== 0)
      const prevActive = scrollLeft !== 0;

      // "Next" button active when NOT at end (scrollLeft > -maxScrollLeft + tolerance)
      const nextActive = scrollLeft > -maxScrollLeft + tolerance;

      setActivePrev(prevActive);
      setActiveNext(nextActive);
    }

    // Initial check
    updateActiveStates();

    container.addEventListener("scroll", updateActiveStates, { passive: true });

    console.log({
      scrollLeft: container.scrollLeft,
      scrollWidth: container.scrollWidth,
      clientWidth: container.clientWidth,
      maxScroll: container.scrollWidth - container.clientWidth,
    });

    return () => container.removeEventListener("scroll", updateActiveStates);
  }, [scrollContainerRef]);

  return (
    <div className="flexCenter gap-[20px]">
      {/* Previous */}
      <ScrollButton
        onClick={previousHandler}
        aria-label="scroll previous"
        active={activePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </ScrollButton>

      {/* Next */}
      <ScrollButton
        onClick={nextHandler}
        aria-label="scroll next"
        active={activeNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      </ScrollButton>
    </div>
  );
}

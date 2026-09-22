"use client";

import { useState } from "react";

export default function ReviewText({ review }: { review: string }) {
  const [expanded, setExpanded] = useState(false);
  const reviewIsLong = review.length > 220;
  const shownReview = expanded || !reviewIsLong ? review : review.slice(0, 220) + "…";

  return (
    <>
      <p className="mt-6 max-w-prose leading-relaxed text-[#1B2A3D]/80">
        {shownReview}
      </p>
      {reviewIsLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 w-fit text-sm font-medium text-[#7A2E2E] underline decoration-[#C9A227] decoration-2 underline-offset-4 transition-colors hover:text-[#1B2A3D]"
        >
          {expanded ? "Show less" : "Continue reading"}
        </button>
      )}
    </>
  );
}
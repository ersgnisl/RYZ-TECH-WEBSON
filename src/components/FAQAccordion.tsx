"use client";

import { useState } from "react";
import type { Faq } from "@/lib/services";

export default function FAQAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-foreground/10 rounded-2xl bg-foreground/[0.04]">
      {items.map((item, i) => {
        const isOpen = i === openIndex;
        return (
          <div key={item.question} className="px-6">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-semibold text-foreground">
                {item.question}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isOpen && (
              <p className="pb-5 text-foreground/80">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

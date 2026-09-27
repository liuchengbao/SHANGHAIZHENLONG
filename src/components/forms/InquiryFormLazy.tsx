"use client";

import dynamic from "next/dynamic";

export const InquiryFormLazy = dynamic(
  () =>
    import("@/components/forms/InquiryForm").then((mod) => mod.InquiryForm),
  {
    loading: () => (
      <div className="h-96 animate-pulse rounded-2xl border border-slate-200 bg-slate-50" />
    ),
    ssr: true,
  },
);

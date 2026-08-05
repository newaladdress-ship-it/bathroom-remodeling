"use client";

import { siteConfig } from "@/lib/site-config";

interface ObscuredEmailProps {
  className?: string;
  children?: React.ReactNode;
}

export function ObscuredEmail({ className = "", children }: ObscuredEmailProps) {
  const emailStr = siteConfig.email || "sales@arzhomeremodeling.com";

  return (
    <a 
      href={`mailto:${emailStr}`} 
      className={className} 
      aria-label={`Email us at ${emailStr}`}
    >
      {children || emailStr}
    </a>
  );
}

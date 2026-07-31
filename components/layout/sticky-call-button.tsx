import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 shadow-[0_-6px_20px_rgba(0,0,0,0.15)] animate-in slide-in-from-bottom duration-300">
      <div className="max-w-md mx-auto flex flex-col items-center gap-1.5">
        <a
          href={`tel:${siteConfig.phoneClean}`}
          className="w-full flex items-center justify-center gap-3 bg-accent text-accent-foreground font-extrabold rounded-xl py-3.5 px-4 shadow-md hover:bg-accent/90 active:scale-[0.97] transition-all duration-200 no-underline text-base tracking-wide"
          aria-label={`Call local remodeling specialist at ${siteConfig.phone}`}
        >
          <Phone className="w-5 h-5 fill-current" aria-hidden="true" />
          <span>CALL LOCAL EXPERT: {siteConfig.phone}</span>
        </a>
        <div className="flex items-center gap-2 text-[11px] font-bold text-accent tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span>In-Home Estimates Available Today</span>
        </div>
      </div>
    </div>
  );
}

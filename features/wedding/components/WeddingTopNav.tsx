import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";

export function WeddingTopNav() {
  return (
    <header className="wedding-nav">
      <div className="wedding-shell flex items-center justify-between">
        <Link className="display-heading text-[1.55rem] tracking-[-0.06em]" href="/">
          Vowventure<span className="text-[#c98679]">.</span>
        </Link>
        <Link className="wedding-back-link" href="/">
          Back to Vowventure <ArrowUpRight size={14} />
        </Link>
      </div>
    </header>
  );
}

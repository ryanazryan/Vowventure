export function Footer() {
  return (
    <footer className="border-t border-[#3b312a18] py-8" id="attend">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a className="display-heading text-[1.5rem] tracking-[-0.06em]" href="#top">
            Vowventure<span className="text-[#c98679]">.</span>
          </a>
          <p className="mt-1 text-[0.7rem] text-[#8c8279]">Virtual Weddings, Reimagined.</p>
        </div>
        <div className="flex items-center gap-5 text-[0.68rem] font-semibold text-[#8c8279]">
          <a className="footer-link transition-colors hover:text-[#292724]" href="#experience">Discover</a>
          <a className="footer-link transition-colors hover:text-[#292724]" href="#how-it-works">How It Works</a>
          <a className="footer-link transition-colors hover:text-[#292724]" href="#features">Features</a>
        </div>
        <p className="text-[0.65rem] text-[#aaa098]">© 2026 Vowventure</p>
      </div>
    </footer>
  );
}

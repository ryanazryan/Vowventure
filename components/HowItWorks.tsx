import { ArrowRight, Sparkle } from "@/components/Icons";

const steps = [
  { number: "01", title: "Create your wedding", description: "Shape a celebration that feels like you." },
  { number: "02", title: "Share your invitation", description: "Send one beautiful link to everyone you love." },
  { number: "03", title: "Guests enter your venue", description: "They arrive ready to explore and connect." },
  { number: "04", title: "Celebrate together", description: "Make a memory that feels truly shared." },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32" id="how-it-works">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-5">Simple by design</div>
            <h2 className="display-heading max-w-[12ch] text-[3rem] leading-[0.98] sm:text-[3.7rem]">From “I do” to “we&apos;re here.”</h2>
          </div>
          <p className="max-w-sm text-[0.95rem] leading-7 text-[#77716b]">Everything you need to bring your people into the same moment, wherever they are.</p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-4 md:gap-0">
          {steps.map((step, index) => (
            <div className="relative" key={step.number}>
              <article className="step-card h-full p-5 md:mr-3 md:border-0 md:bg-transparent md:p-0 md:pr-8">
                <div className="relative flex items-center gap-4">
                  <div className="step-number">{step.number}</div>
                  {index < steps.length - 1 ? <div aria-hidden="true" className="step-line" /> : null}
                </div>
                <h3 className="display-heading mt-7 max-w-[10ch] text-[1.45rem] leading-tight">{step.title}</h3>
                <p className="mt-3 max-w-60 text-[0.78rem] leading-5 text-[#857a72]">{step.description}</p>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-3 rounded-xl border border-[#3b312a18] bg-[#f2ede5] px-5 py-4 text-[0.75rem] text-[#77716b] md:mt-20 md:mx-auto md:max-w-2xl md:justify-center">
          <Sparkle className="text-[#c98679]" size={17} />
          <span>It feels like a wedding. It works like a room full of friends.</span>
          <ArrowRight className="hidden text-[#c98679] sm:block" size={15} />
        </div>
      </div>
    </section>
  );
}

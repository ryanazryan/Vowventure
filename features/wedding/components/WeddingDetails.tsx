import { formatWeddingDate, formatWeddingTime, getCoupleName } from "@/features/wedding/lib/formatWedding";
import type { Wedding } from "@/features/wedding/types";

type WeddingDetailsProps = {
  wedding: Wedding;
};

export function WeddingDetails({ wedding }: WeddingDetailsProps) {
  const details = [
    { label: "The couple", value: getCoupleName(wedding) },
    { label: "The date", value: formatWeddingDate(wedding.date) },
    { label: "The time", value: `${formatWeddingTime(wedding.time)} · ${wedding.timezone}` },
    { label: "The venue", value: wedding.venue },
  ];

  return (
    <section className="wedding-section wedding-details-section" id="details">
      <div className="wedding-shell">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <div className="eyebrow mb-5">The invitation</div>
            <h2 className="display-heading max-w-[9ch] text-[3rem] leading-[0.98] sm:text-[3.8rem]">A note from the happy couple.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-[#77716b]">{wedding.description}</p>
            <dl className="mt-10 grid gap-x-6 gap-y-7 border-t border-[#3b312a18] pt-7 sm:grid-cols-2">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="eyebrow text-[#a09389]">{detail.label}</dt>
                  <dd className="mt-2 text-sm font-semibold text-[#403a35]">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

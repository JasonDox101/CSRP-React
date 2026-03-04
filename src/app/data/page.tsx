import Image from "next/image";

const dataSections = [
  {
    number: 1,
    title: "Demographics",
    paragraphs: [
      "The total number of patients with at least one PheCode corresponding to suicide ideation or attempt (PheCodes 297.1 and 297.2) is 4868, which corresponds to 4.04% of the MGB (Mass General Brigham) Biobank cohort.",
    ],
    images: [
      {
        src: "/assets/images/csrp/data1.png",
        alt: "MGB data demographics",
      },
      {
        src: "/assets/images/csrp/data2.png",
        alt: "MGB data demographics detail",
      },
    ],
  },
  {
    number: 2,
    title: "Mental health codes",
    paragraphs: [
      "We select patients with PheCodes in the range 295:307 to broadly define a “mental health issues” category. The total number of patients with at least one PheCode corresponding to a mental health issue is 60820, which corresponds to 50.47% of the MGB Biobank cohort.",
      "We display the most frequent metal health codes present in the next figure.",
    ],
    images: [
      {
        src: "/assets/images/csrp/data3.png",
        alt: "MGB mental health codes",
      },
      {
        src: "/assets/images/csrp/data4.png",
        alt: "MGB mental health codes detail",
      },
    ],
  },
];

export default function DataPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
      <section className="space-y-10">
        <div className="space-y-4">
          <div className="h-1 w-16 rounded-full bg-[var(--harvard-primary-blue)]" />
          <h1 className="text-3xl font-bold tracking-tight text-[var(--harvard-blue)] md:text-4xl">
            MGB Data
          </h1>
          <p className="text-base text-[var(--harvard-medium-gray)] md:text-lg">
            Exploratory Analysis
          </p>
        </div>

        <ul className="space-y-10">
          {dataSections.map((section) => (
            <li key={section.number} className="flex items-start gap-5">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--harvard-primary-blue)] text-sm font-bold text-white">
                {section.number}
              </span>
              <div className="flex-1 space-y-4">
                <h2 className="text-lg font-semibold text-[var(--harvard-blue)] md:text-xl">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[15px] leading-relaxed text-[var(--harvard-dark)] md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.images.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    width={1200}
                    height={900}
                    className="w-full rounded-lg border border-[var(--harvard-border-gray)]"
                    alt={image.alt}
                    sizes="100vw"
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

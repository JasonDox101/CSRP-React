import Image from "next/image";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName.length > 0
    ? `/${repositoryName}`
    : "";
const withBasePath = (path: string) => `${basePath}${path}`;

const researchItems = [
  {
    title: "Federated Transfer Learning",
    image: withBasePath("/assets/images/applications/federated-transfer-learning.png"),
    alt: "Federated Transfer Learning",
  },
  {
    title: "Automated Feature Selection",
    image: withBasePath("/assets/images/applications/automated-feature-selection.png"),
    alt: "Automated Feature Selection",
  },
  {
    title: "Mental Health Knowledge Network",
    image: withBasePath("/assets/images/applications/mental-health-knowledge-network.png"),
    alt: "Mental Health Knowledge Network",
  },
];

const highlights = [
  "New opportunities for envisaging, implementing, and evaluating the efficacy and efficiencies of interventions by leveraging the vast array of data across different modalities, including patient and provider-level survey data, electronic health records (EHR) data, wearable device data and geocoded data.",
  "Improved performance of innovative prediction modeling strategies for suicide risk and treatment response that can be used to both address the needs of the research projects herein and to optimize risk prediction for future studies.",
  "Novel shared resources including a forum for exchanging ideas and approaches to address the most pressing analytic challenges and a commitment to disseminating open source software tools for the broader scientific research community.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--harvard-white)]">
      <header className="bg-[var(--harvard-crimson)]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-6 py-16 text-center md:py-20">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            CSRP Methods Core
          </h1>
          <p className="max-w-2xl text-pretty text-base text-white/80 leading-relaxed md:text-lg">
            Novel Implementation Strategies for Improved Suicide Prevention Efforts
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-[1200px] space-y-12 px-6 py-12 md:py-16">
        <section
          className="mb-12"
          id="center-for-suicide-risk-prevention-and-research"
        >
          <h2 className="mb-4 text-2xl font-semibold text-[var(--harvard-blue)]">
            Center for Suicide Risk Prevention and Research
          </h2>
          <Image
            src={withBasePath("/assets/images/csrp/mainchart.png")}
            width={1400}
            height={780}
            className="w-full rounded-lg border border-[var(--harvard-border-gray)]"
            alt="CSRP Methods Core chart"
            sizes="100vw"
          />
          <p className="mt-4 text-[var(--harvard-dark)]">
            The CSRP Methods Core (CSRP-MC) brings together an experienced team of
            biostatisticians, informaticians and app developers to leverage novel
            data elements, leading edge statistical and computational approaches, and
            innovative study designs to implement and evaluate pragmatic approaches
            to improve outcomes among patients at risk for suicide.
          </p>
        </section>

        <section className="mb-12" id="csrp-mc-research">
          <h2 className="mb-6 text-2xl font-semibold text-[var(--harvard-blue)]">
            CSRP-MC Research
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {researchItems.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-[var(--harvard-border-gray)] bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-xl font-semibold text-[var(--harvard-blue)] leading-snug">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
          <ul className="mt-6 list-disc space-y-3 pl-6 text-[var(--harvard-dark)]">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

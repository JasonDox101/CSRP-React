import Image from "next/image";

type RpprYear = {
  number: 1 | 2 | 3;
  title: string;
  summary: string;
  documentFileName: string;
  infographicFileName?: string;
};

const rpprYears: RpprYear[] = [
  {
    number: 1,
    title: "Year 1 Progress Summary (Y1)",
    summary:
      "The first year focused on establishing the Center’s infrastructure and laying the groundwork for the Signature (SIG) clinical trial and exploratory studies. The Methods Core Data Coordinating Center (MC DCC) initiated a REDCap-based data capture platform and established protocols for data monitoring and sharing with the NIMH Data Archive. The Harvard Medical School (HMS) team developed a preliminary Mental Health Knowledge Graph (MHKG) and the ARRTLE algorithm for adversarial robust risk transfer learning. Initial findings revealed that FHIR-standard features are sparser than full research datasets, requiring longer historical data for predictive reliability. Additionally, the Accelerator for Clinical Transformation (ACT) team successfully migrated the Suicide Prevention Smart App to the Epic Test environment for further refinement.",
    documentFileName: "CSRP MC RPPR Y1 B2 Accomplishments 12MAR2024.pdf",
    infographicFileName: "CSRPY1.png",
  },
  {
    number: 2,
    title: "Year 2 Progress Summary (Y2)",
    summary:
      "During the second year, the project transitioned toward deepening technical integration and developing advanced medical embedding algorithms. The MC DCC finalized the data integration pipeline between Epic and REDCap and generated initial reports for the Data and Safety Monitoring Board (DSMB). A significant breakthrough was the development of the DOME algorithm and the ARCH algorithm, plus ONCE and KOMAP to reduce technical barriers for EHR-based AI research. Meanwhile, the ACT team performed a comprehensive hazard analysis to identify and mitigate potential failures in clinical workflows and software systems.",
    documentFileName: "20250304_CSRP MC RPPR Y2 B2 Accomplishments.pdf",
    infographicFileName: "CSRPY2.png",
  },
  {
    number: 3,
    title: "Year 3 Progress Summary (Y3)",
    summary:
      "The third year centered on enhancing model transportability and robustness through representation learning and federated learning. SONAR and GAME enabled high-accuracy mapping of local codes to standardized vocabularies without sharing raw patient data. ADAPT was introduced to combat algorithm drift from temporal shifts such as COVID-19 and ICD transitions. STRIFLE improved learning accuracy in label-scarce target populations. These methodologies were applied to adolescent suicide risk prediction, significantly improving discrimination for patients without prior attempts.",
    documentFileName: "20250224_CSRP MC RPPR Y3 B2 Accomplishments.pdf",
    infographicFileName: "CSRPY3.png",
  },
];

const toFileLink = (fileName: string) =>
  `/api/rppr-files/${encodeURIComponent(fileName)}`;

export default function RpprPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
      <header className="mb-10 space-y-4">
        <div className="h-1 w-16 rounded-full bg-[var(--harvard-primary-blue)]" />
        <h1 className="text-3xl font-bold tracking-tight text-[var(--harvard-blue)] md:text-4xl">
          RPPR
        </h1>
      </header>

      <ul className="space-y-12">
        {rpprYears.map((year) => (
          <li key={year.number} className="flex items-start gap-5">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--harvard-primary-blue)] text-sm font-bold text-white">
              {year.number}
            </span>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-semibold text-[var(--harvard-blue)]">
                {year.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-[var(--harvard-dark)] md:text-base">
                {year.summary}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={toFileLink(year.documentFileName)}
                  className="inline-flex items-center rounded-md bg-[var(--harvard-primary-blue)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--harvard-primary-blue-hover)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open RPPR Document
                </a>
              </div>
              {year.infographicFileName ? (
                <Image
                  src={toFileLink(year.infographicFileName)}
                  width={1200}
                  height={800}
                  className="w-full rounded-lg border border-[var(--harvard-border-gray)]"
                  alt={`${year.title} infographic`}
                  sizes="100vw"
                />
              ) : (
                <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-dashed border-[var(--harvard-border-gray)] bg-white text-[var(--harvard-medium-gray)]">
                  Placeholder for Y1 infographic
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

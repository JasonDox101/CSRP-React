const aims = [
  {
    number: 1,
    title: "Data collection, data synthesis, and app development",
    description:
      "To collect and integrate multiple data resources for CSRP initiatives, through novel development of clinical decision support Apps, and meticulous data management and quality control strategies.",
  },
  {
    number: 2,
    title: "Support the development and conduct of CSRP research studies",
    description:
      "To lead and support the design, analysis and conduct of CSRP clinical trials, including implementing safety and accrual monitoring plans; developing and implementing rigorous quality control procedures; and collaborating with CSRP investigators on design, analysis and reporting of the Signature and Exploratory Research and Pilot Projects. Through this work, we will additionally generate novel study designs and identify opportunities to rapidly refine and optimize intervention content and delivery.",
  },
  {
    number: 3,
    title: "Develop novel clinical prediction methodologies",
    description: "To develop and evaluate algorithms for",
    bullets: [
      "automated feature selection and engineering;",
      "suicide risk prediction;",
      "predicting heterogeneous treatment effects via causal modeling;",
      "recalibrated risk estimates via semi-supervised learning;",
      "transfer learning and collaborative co-training strategies to enhance risk prediction to improve generalizability.",
    ],
  },
  {
    number: 4,
    title: "Dissemination of methodological advances and other center-generated resources",
    description:
      "To facilitate a forum for researchers with diverse background in statistics/ML and informatics to exchange ideas, discuss methodological strategies and identify analytic challenges for NIMH-relevant projects. The team will facilitate analytical and informatics support and collaboration through monthly web-based meetings, bi-weekly office hours, as well as disseminating video and textual tutorials along with web APIs.",
  },
];

export default function AimsPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-18 md:px-10">
      <header className="mb-12 space-y-5">
        <div className="h-1 w-16 rounded-full bg-[var(--harvard-primary-blue)]" />
        <h1 className="text-4xl font-bold tracking-tight text-[var(--harvard-blue)] md:text-5xl">
          Specific Aims
        </h1>
        <p className="text-base leading-8 text-[var(--harvard-dark)] md:text-lg">
          The overriding goal of the CSRP-MC is to support application and
          evaluation of sound statistical principles and approaches to enhance and
          enable novel implementation strategies for improved suicide prevention
          efforts.
        </p>
      </header>
      <ul className="space-y-14">
        {aims.map((aim) => (
          <li key={aim.number} className="flex items-start gap-6">
            <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--harvard-primary-blue)] text-base font-bold text-white">
              {aim.number}
            </span>
            <div className="flex-1 space-y-2">
              <h2 className="text-3xl font-semibold text-[var(--harvard-blue)]">
                Aim {aim.number}: {aim.title}
              </h2>
              <p className="text-base leading-8 text-[var(--harvard-dark)] md:text-lg">
                {aim.description}
              </p>
              {aim.bullets ? (
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-8 text-[var(--harvard-dark)] md:text-lg">
                  {aim.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ol>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

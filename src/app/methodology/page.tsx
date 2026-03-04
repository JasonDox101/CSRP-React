import Image from "next/image";

const methodologySections = [
  {
    number: 1,
    id: "federated-transfer-learning",
    title: "Federated Transfer Learning",
    image: {
      src: "/assets/images/methodology/federated-transfer-learning.jpg",
      alt: "Federated Transfer Learning",
    },
    content: null,
  },
  {
    number: 2,
    id: "automated-feature-selection",
    title: "Automated Feature Selection",
    image: {
      src: "/assets/images/methodology/automated-feature-selection.png",
      alt: "Automated Feature Selection",
    },
    content: (
      <>
        <p className="mt-4 text-[var(--harvard-dark)]">
          ARCH (Aggregated naRrative Codified Health) records analysis generates
          a large-scale knowledge graph for a comprehensive set of EHR codified
          and narrative features (
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/39863245/"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--harvard-primary-blue)] underline underline-offset-4"
          >
            Gan et al., 2025
          </a>
          ). It allows:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-[var(--harvard-dark)]">
          <li>feature representation</li>
          <li>information extraction</li>
          <li>uncertainty quantification</li>
        </ul>
        <p className="mt-4 text-[var(--harvard-dark)]">
          The ARCH algorithm first derives embedding vectors from a co-occurrence
          matrix of all EHR concepts and then generates cosine similarities along
          with associated p-values to measure the strength of relatedness between
          clinical features with statistical certainty quantification. In the
          final step, ARCH performs a sparse embedding regression to remove
          indirect linkage between entity pairs.
        </p>
        <p className="mt-4 text-[var(--harvard-dark)]">
          DOME (DirectiOnal Medical Embedding) is another algorithm for knowledge
          graph construction from EHR data (
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/39755324/"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--harvard-primary-blue)] underline underline-offset-4"
          >
            Wen et al., 2025
          </a>
          ). The DOME algorithm encodes temporal directional relationships
          between medical concepts using summary-level EHR data. DOME begins by
          aggregating patient-level EHR data into an asymmetric co-occurrence
          matrix. It then calculates two Positive Pointwise Mutual Information
          (PPMI) matrices that encode the pairwise prior and posterior
          dependencies between medical concepts. Next, a joint matrix
          factorization is applied to these PPMI matrices, generating three
          vectors for each concept: one semantic embedding and two directional
          context embeddings. Together, these vectors provide a comprehensive
          representation of the temporal relationships between EHR concepts.
        </p>
      </>
    ),
  },
];

export default function MethodologyPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
      <header className="mb-10 space-y-4">
        <div className="h-1 w-16 rounded-full bg-[var(--harvard-primary-blue)]" />
        <h1 className="text-3xl font-bold tracking-tight text-[var(--harvard-blue)] md:text-4xl">
          Methodology
        </h1>
      </header>

      <ul className="space-y-12">
        {methodologySections.map((section) => (
          <li key={section.id} className="flex items-start gap-5" id={section.id}>
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--harvard-primary-blue)] text-sm font-bold text-white">
              {section.number}
            </span>
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-semibold text-[var(--harvard-blue)]">
                {section.title}
              </h2>
              <Image
                src={section.image.src}
                width={1200}
                height={675}
                className="w-full rounded-lg border border-[var(--harvard-border-gray)]"
                alt={section.image.alt}
                sizes="100vw"
              />
              {section.content}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

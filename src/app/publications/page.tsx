import Image from "next/image";

type Publication = {
  number: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
  summary: string;
  publicationUrl: string;
  infographicFileName?: string;
};

const publications: Publication[] = [
  {
    number: 1,
    title: "ARCH: Large-scale Knowledge Graph via Aggregated Narrative Codified Health Records Analysis",
    summary:
      "The ARCH algorithm addresses codified-data and clinical-note integration by constructing a large-scale knowledge graph with over 60,000 clinical concepts from 12.5 million Veterans Affairs patients. It derives embedding vectors from co-occurrence matrices, quantifies relatedness with cosine similarity and p-values, and applies sparse embedding regression to remove indirect linkages with statistical certainty. Validation across disease phenotyping, drug side-effect prediction, and Alzheimer’s subtyping shows robust performance beyond pure text models such as PubMedBERT.",
    publicationUrl: "https://www.medrxiv.org/content/10.1101/2023.05.14.23289955v1",
    infographicFileName: "ARCH_Large.png",
  },
  {
    number: 2,
    title: "DOME: Directional medical embedding vectors from Electronic Health Records",
    summary:
      "DOME captures temporally directional dependencies between clinical concepts using summary-level EHR data. It aggregates patient data into asymmetric co-occurrence matrices, computes dual PPMI matrices, and outputs shared semantic, prior-context, and posterior-context embeddings for each concept. Validation studies show improved risk prediction, unsupervised distinction between drug indications and side effects, and directional knowledge-graph construction while preserving patient privacy.",
    publicationUrl:
      "https://www.sciencedirect.com/science/article/pii/S1532046424001862?ref=pdf_download&fr=RR-2&rr=9e4bd909effb1d29",
    infographicFileName: "DOME.png",
  },
  {
    number: 3,
    title:
      "Robust automated harmonization of heterogeneous data through ensemble machine learning: algorithm development and validation study",
    summary:
      "SONAR combines semantic learning from variable descriptions with distribution learning from cohort data to solve variable misalignment in multi-cohort studies. It leverages CODER and SapBERT features together with subgroup distribution statistics, including quartile-based vectors across demographic subgroups, to map local concepts to standardized vocabularies. Supervised SONAR outperforms semantic-only approaches, especially for hard concepts with weak textual descriptions, reducing manual curation burden for large-scale integrative research.",
    publicationUrl: "https://medinform.jmir.org/2025/1/e54133/",
    infographicFileName: "Robust_automated.png",
  },
  {
    number: 4,
    title: "Representation learning to advance multi-institutional studies with electronic health record data",
    summary:
      "GAME addresses data heterogeneity and privacy constraints in multi-center EHR collaborations by combining graph attention networks and federated learning without raw-data sharing. It integrates information across institutional knowledge graphs, cross-site language-model relations, and a shared contrastive semantic space with hard-negative sampling. Across seven institutions and two languages, GAME demonstrated strong top-1 alignment performance and transferability in Alzheimer’s and suicide-risk studies.",
    publicationUrl: "https://arxiv.org/abs/2502.08547",
    infographicFileName: "Representation_Learning.png",
  },
  {
    number: 5,
    title: "Semi-supervised triply robust inductive transfer learning",
    summary:
      "STRIFLE is designed for label-scarce medical settings with high-dimensional covariate shift. It jointly uses source-labeled, target-sparse-labeled, and target-unlabeled data through density-ratio and imputation nuisance models to achieve triple robustness. The method improves efficiency even under nuisance-model misspecification and offers performance guarantees relative to target-only estimation. It is demonstrated in cross-population polygenic risk prediction for Type II diabetes.",
    publicationUrl: "https://arxiv.org/abs/2209.04977",
    infographicFileName: "SEMI.png",
  },
  {
    number: 6,
    title: "Adversarial Drift-Aware Predictive Transfer: Toward Durable Clinical AI",
    summary:
      "ADAPT addresses post-deployment performance decay caused by temporal drift, including coding transitions and pandemic shocks. It formulates training as adversarial optimization over an uncertainty set of plausible future distributions inferred from historical estimators and limited current data. By optimizing worst-case future performance, ADAPT balances short-term accuracy and long-term robustness. Longitudinal suicide-risk studies show improved stability without frequent retraining or large new labeling efforts.",
    publicationUrl: "https://arxiv.org/abs/2601.11860",
    infographicFileName: "Adversatrial_Drift.png",
  },
];

const toFileLink = (fileName: string) =>
  `/api/publications-files/${encodeURIComponent(fileName)}`;

export default function PublicationsPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-18 md:px-10">
      <header className="mb-12 space-y-5">
        <div className="h-1 w-16 rounded-full bg-[var(--harvard-primary-blue)]" />
        <h1 className="text-4xl font-bold tracking-tight text-[var(--harvard-blue)] md:text-5xl">
          Publications
        </h1>
      </header>

      <ul className="space-y-14">
        {publications.map((publication) => (
          <li key={publication.number} className="flex items-start gap-6">
            <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--harvard-primary-blue)] text-base font-bold text-white">
              {publication.number}
            </span>
            <div className="flex-1 space-y-5">
              <h2 className="text-3xl font-semibold text-[var(--harvard-blue)]">
                {publication.title}
              </h2>
              <p className="text-base leading-8 text-[var(--harvard-dark)] md:text-lg">
                {publication.summary}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={publication.publicationUrl}
                  className="inline-flex items-center rounded-md bg-[var(--harvard-primary-blue)] px-5 py-2.5 text-base font-semibold text-white transition hover:bg-[var(--harvard-primary-blue-hover)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Publication
                </a>
              </div>
              {publication.infographicFileName ? (
                <Image
                  src={toFileLink(publication.infographicFileName)}
                  width={1200}
                  height={800}
                  className="w-full rounded-lg border border-[var(--harvard-border-gray)]"
                  alt={`${publication.title} infographic`}
                  sizes="100vw"
                />
              ) : (
                <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-dashed border-[var(--harvard-border-gray)] bg-white text-[var(--harvard-medium-gray)]">
                  Infographic Coming Soon
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

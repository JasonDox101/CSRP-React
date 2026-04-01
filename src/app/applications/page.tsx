import Image from "next/image";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName.length > 0
    ? `/${repositoryName}`
    : "";
const withBasePath = (path: string) => `${basePath}${path}`;

const applications = [
  {
    number: 1,
    id: "federated-transfer-learning",
    title: "Federated Transfer Learning",
    image: {
      src: withBasePath("/assets/images/applications/federated-transfer-learning.png"),
      alt: "Federated Transfer Learning",
    },
    link: "https://shiny.parse-health.org/ARRTLE/",
  },
  {
    number: 2,
    id: "automated-feature-selection",
    title: "Automated Feature Selection",
    image: {
      src: withBasePath("/assets/images/applications/automated-feature-selection.png"),
      alt: "Automated Feature Selection",
    },
    link: "https://app.parse-health.org/ARCH/",
  },
  {
    number: 3,
    id: "mental-health-knowledge-network",
    title: "Mental Health Knowledge Network",
    image: {
      src: withBasePath("/assets/images/applications/mental-health-knowledge-network.png"),
      alt: "Mental Health Knowledge Network",
    },
    link: "https://shiny.parse-health.org/keser-mental-health/",
  },
];

export default function ApplicationsPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-18 md:px-10">
      <header className="mb-12 space-y-5">
        <div className="h-1 w-16 rounded-full bg-[var(--harvard-primary-blue)]" />
        <h1 className="text-4xl font-bold tracking-tight text-[var(--harvard-blue)] md:text-5xl">
          Web Applications
        </h1>
      </header>

      <ul className="space-y-14">
        {applications.map((application) => (
          <li
            key={application.id}
            id={application.id}
            className="flex items-start gap-6"
          >
            <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--harvard-primary-blue)] text-base font-bold text-white">
              {application.number}
            </span>
            <div className="flex-1">
              <h2 className="mb-4 text-3xl font-semibold text-[var(--harvard-blue)]">
                {application.title}
              </h2>
              <Image
                src={application.image.src}
                width={1200}
                height={675}
                className="w-full rounded-lg border border-[var(--harvard-border-gray)]"
                alt={application.image.alt}
                sizes="100vw"
              />
              <a
                href={application.link}
                className="mt-4 inline-flex items-center rounded-md bg-[var(--harvard-primary-blue)] px-5 py-2.5 text-base font-semibold text-white transition hover:bg-[var(--harvard-primary-blue-hover)]"
                target="_blank"
                rel="noreferrer"
              >
                View Web App
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

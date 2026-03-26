const allowedDocuments = new Set([
  "CSRP MC RPPR Y1 B2 Accomplishments 12MAR2024.docx",
  "20250304_CSRP MC RPPR Y2 B2 Accomplishments.docx",
  "20250224_CSRP MC RPPR Y3 B2 Accomplishments.docx",
]);

type ViewPageProps = {
  searchParams: Promise<{ file?: string }>;
};

export default async function RpprDocumentViewPage({ searchParams }: ViewPageProps) {
  const { file } = await searchParams;
  let fileName = "";

  if (file) {
    try {
      fileName = decodeURIComponent(file);
    } catch {
      fileName = "";
    }
  }
  const isValid = allowedDocuments.has(fileName);
  const previewUrl = isValid
    ? `/api/rppr-files/${encodeURIComponent(fileName)}`
    : "";
  const downloadUrl = isValid ? `${previewUrl}?download=1` : "";

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-10 md:px-10">
      <header className="mb-6 space-y-3">
        <div className="h-1 w-16 rounded-full bg-[var(--harvard-primary-blue)]" />
        <h1 className="text-2xl font-bold tracking-tight text-[var(--harvard-blue)] md:text-3xl">
          RPPR Document Viewer
        </h1>
      </header>

      {isValid ? (
        <section className="space-y-4">
          <p className="text-sm text-[var(--harvard-dark)] md:text-base">{fileName}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={downloadUrl}
              className="inline-flex items-center rounded-md bg-[var(--harvard-primary-blue)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--harvard-primary-blue-hover)]"
            >
              Download Document
            </a>
          </div>
          <iframe
            src={previewUrl}
            title={fileName}
            className="h-[80vh] w-full rounded-lg border border-[var(--harvard-border-gray)] bg-white"
          />
        </section>
      ) : (
        <p className="text-[var(--harvard-dark)]">Document not found.</p>
      )}
    </main>
  );
}

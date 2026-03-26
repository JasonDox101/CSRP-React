import { readFile } from "node:fs/promises";
import path from "node:path";

const allowedDocumentFiles = new Set([
  "CSRP MC RPPR Y1 B2 Accomplishments 12MAR2024.pdf",
  "20250304_CSRP MC RPPR Y2 B2 Accomplishments.pdf",
  "20250224_CSRP MC RPPR Y3 B2 Accomplishments.pdf",
]);

const allowedImageFiles = new Set([
  "CSRPY1.png",
  "CSRPY2.png",
  "CSRPY3.png",
]);

const mimeTypes: Record<string, string> = {
  ".pdf": "application/pdf",
  ".png": "image/png",
};

type RouteContext = {
  params: Promise<{ filePath: string[] }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const requestUrl = new URL(_request.url);
  const shouldDownload = requestUrl.searchParams.get("download") === "1";
  const { filePath } = await context.params;

  if (!filePath || filePath.length !== 1) {
    return new Response("Not Found", { status: 404 });
  }

  let fileName: string;
  try {
    fileName = decodeURIComponent(filePath[0]);
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  if (fileName.includes("..") || fileName.includes("/") || fileName.includes("\\")) {
    return new Response("Not Found", { status: 404 });
  }

  const isAllowedDocument = allowedDocumentFiles.has(fileName);
  const isAllowedImage = allowedImageFiles.has(fileName);

  if (!isAllowedDocument && !isAllowedImage) {
    return new Response("Not Found", { status: 404 });
  }

  const absolutePath = path.join(process.cwd(), "doc", fileName);

  try {
    const fileBuffer = await readFile(absolutePath);
    const ext = path.extname(fileName).toLowerCase();
    const contentType = mimeTypes[ext] ?? "application/octet-stream";

    const contentDisposition = isAllowedDocument
      ? shouldDownload
        ? "attachment"
        : "inline"
      : "inline";

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `${contentDisposition}; filename*=UTF-8''${encodeURIComponent(fileName)}`,
      },
    });
  } catch {
    return new Response("Not Found", { status: 404 });
  }
}

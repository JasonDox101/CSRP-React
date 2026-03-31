import { readFile } from "node:fs/promises";
import path from "node:path";

const allowedImageFiles = new Set([
  "ARCH_Large.png",
  "DOME.png",
  "Robust_automated.png",
  "Representation_Learning.png",
  "SEMI.png",
  "Adversatrial_Drift.png",
]);

const mimeTypes: Record<string, string> = {
  ".png": "image/png",
};

type RouteContext = {
  params: Promise<{ filePath: string[] }>;
};

export async function GET(_request: Request, context: RouteContext) {
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

  if (!allowedImageFiles.has(fileName)) {
    return new Response("Not Found", { status: 404 });
  }

  const absolutePath = path.join(process.cwd(), "doc", fileName);

  try {
    const fileBuffer = await readFile(absolutePath);
    const ext = path.extname(fileName).toLowerCase();
    const contentType = mimeTypes[ext] ?? "application/octet-stream";

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(fileName)}`,
      },
    });
  } catch {
    return new Response("Not Found", { status: 404 });
  }
}

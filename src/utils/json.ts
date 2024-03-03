import { promises as fs } from "fs";

export async function readJsonFile(fileName: string) {
  const file = await fs.readFile(
    `${process.cwd()}/src/assets/${fileName}`,
    "utf8"
  );

  return JSON.parse(file);
}

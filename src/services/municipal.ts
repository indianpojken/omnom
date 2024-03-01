import { readJsonFile } from "@/lib/json";

export type Municipal = string;
export type Municipalities = Municipal[];

export async function getMunicipalities(): Promise<Municipalities> {
  const { municipalities } = await readJsonFile("municipalities.json");
  return municipalities;
}

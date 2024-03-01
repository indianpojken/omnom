import { readJsonFile } from "@/lib/json";

type Municipal = string;
type Municipalities = Municipal[];

export async function getMunicipalities(): Promise<Municipalities> {
  const { municipalities } = await readJsonFile("municipalities.json");
  return municipalities;
}

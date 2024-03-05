import { getMunicipalities } from "@/services/municipalities";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  const municipalities = await getMunicipalities();
  return Response.json(municipalities);
}

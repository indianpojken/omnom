import { Bebas_Neue } from "next/font/google";

import { getMunicipalities } from "@/services/municipalities";
import MunicipalitiesLetterNavigator from "@/components/LetterNavigator";
import MunicipalList from "@/components/MunicipalList";
import LetterNavigator from "@/components/LetterNavigator";

const inter = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default async function Page() {
  const municipalities = await getMunicipalities();

  return (
    <main className="flex mx-auto min-h-screen flex-col px-12 py-10 max-w-[800px]">
      <h1
        className={`${inter.className} mb-4 text-7xl text-amber-900 uppercase`}
      >
        Omnom
      </h1>

      <section>
        <header className="mb-2">
          <h2 className="text-zinc-900 font-bold uppercase">Kommuner</h2>
        </header>

        <LetterNavigator data={municipalities} />
      </section>

      <section className="mt-10">
        <MunicipalList municipalities={municipalities} />
      </section>
    </main>
  );
}

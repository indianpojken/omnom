import { getMunicipalities } from "@/services/municipalities";

import MunicipalList from "@/components/MunicipalList";
import LetterNavigator from "@/components/LetterNavigator";
import Logo from "@/components/Logo/Logo";

export default async function Page() {
  const municipalities = await getMunicipalities();

  return (
    <main className="flex mx-auto min-h-screen flex-col px-6 py-10 max-w-[800px]">
      <header>
        <Logo />
      </header>

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

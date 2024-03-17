import { getAllMunicipalitiesWithRestaurants } from "@/services/municipalities";

import { municipalities } from "@/constants";

import MunicipalList from "@/components/MunicipalList";
import LetterNavigator from "@/components/LetterNavigator";
import Logo from "@/components/Logo/Logo";
import { MotionMain } from "@/components/Motion";

export default async function Page() {
  const municipalitiesWithRestaurants =
    await getAllMunicipalitiesWithRestaurants();

  return (
    <MotionMain
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex mx-auto min-h-screen flex-col px-6 py-10 max-w-[800px]"
    >
      <header>
        <Logo />
      </header>

      <section>
        <header className="mb-2">
          <h2 className="text-zinc-900 font-bold uppercase">Kommuner</h2>
        </header>

        <LetterNavigator
          data={municipalitiesWithRestaurants}
          comparativeData={[...municipalities]}
        />
      </section>

      <section className="mt-10">
        <MunicipalList municipalities={municipalitiesWithRestaurants} />
      </section>
    </MotionMain>
  );
}

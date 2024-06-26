import { headers } from "next/headers"; // prevent static render

import { getAllMunicipalitiesWithRestaurants } from "@/services/municipalities";

import { municipalities } from "@/constants";

import MunicipalList from "@/components/MunicipalList";
import LetterNavigator from "@/components/LetterNavigator";
import { MotionSection } from "@/components/Motion";

export default async function Page() {
  const headersList = headers(); // prevent static render

  const municipalitiesWithRestaurants =
    await getAllMunicipalitiesWithRestaurants();

  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col"
    >
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
    </MotionSection>
  );
}

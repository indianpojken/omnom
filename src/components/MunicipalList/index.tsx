import { groupMunicipalitiesByInitial } from "@/services/municipalities";
import type { Municipalities } from "@/types";

export default function MunicipalList({
  municipalities,
}: {
  municipalities: Municipalities;
}) {
  const groupedMunicipalities = groupMunicipalitiesByInitial(municipalities);

  return (
    <section className="flex flex-col gap-6">
      {Object.keys(groupedMunicipalities).map((letter) => (
        <section key={letter}>
          <h2 className="text-zinc-900 text-xl font-bold uppercase">
            {letter}
          </h2>

          <section id={`${letter}`} className="flex flex-wrap gap-4 mt-4">
            {groupedMunicipalities[letter].map((municipal) => (
              <article
                className="self-start text-amber-900 bg-amber-50 p-2 rounded-md"
                key={municipal}
              >
                {municipal}
              </article>
            ))}
          </section>
        </section>
      ))}
    </section>
  );
}

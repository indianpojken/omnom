import { groupMunicipalitiesByInitial } from "@/services/municipalities";
import type { Municipalities } from "@/types";
import Link from "next/link";

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
              <Link key={municipal} href={`/municipal/${municipal}`}>
                <article className="transition-colors self-start text-amber-900 hover:text-amber-100 bg-amber-50 hover:bg-amber-950 p-2 rounded-md">
                  {municipal}
                </article>
              </Link>
            ))}
          </section>
        </section>
      ))}
    </section>
  );
}

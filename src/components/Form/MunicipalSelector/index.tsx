"use client";

import { municipalities } from "@/constants";

export default function MunicipalSelector() {
  return (
    <select
      className="rounded-md border-b-2 border-amber-900 text-amber-950 bg-amber-50 p-3 outline-0 placeholder:text-zinc-400 focus:outline"
      name="municipal"
      id="municipal"
    >
      <option className="font-sans text-amber-950">Välj kommun</option>
      {municipalities.map((municipal) => (
        <option
          className="font-sans text-amber-950 selection:bg-amber-950 hover:bg-amber-950"
          key={municipal}
          defaultValue={municipal}
        >
          {municipal}
        </option>
      ))}
    </select>
  );
}

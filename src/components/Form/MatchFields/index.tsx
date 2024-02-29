"use client";

import { useState, useEffect, InputHTMLAttributes } from "react";

import { icons } from "../icons";

export { useInputMatcher } from "./hook";

type Matches = "match" | "noMatch" | "incomplete";

const colors: Record<Matches, string> = {
  match: "border-emerald-400",
  noMatch: "border-rose-400",
  incomplete: "border-zinc-200",
};

export default function MatchFields({
  id,
  type,
  placeholder,
  required,
  icon,
  matcher,
}: {
  id: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder: string;
  required?: boolean;
  icon?: boolean;
  matcher: (id: string, value: boolean) => void;
}) {
  const [values, setValues] = useState<{
    first: string;
    second: string;
  }>({
    first: "",
    second: "",
  });

  const isMatch = (): Matches => {
    if (values.first && values.second) {
      if (values.first === values.second) {
        return "match";
      } else {
        return "noMatch";
      }
    } else {
      return "incomplete";
    }
  };

  useEffect(() => matcher(id, isMatch() === "match"), [values]);

  return (
    <article
      className={`flex-1 flex pr-2 border-r-4 rounded-md transition-colors duration-300 ${
        colors[isMatch()]
      }`}
    >
      <section className="flex flex-1 rounded-md border border-zinc-200 divide-zinc-200 divide-x-[1px] overflow-hidden">
        {icon && (
          <aside className="flex justify-center item-center p-2">
            {icons[type!]}
          </aside>
        )}

        <section className="flex flex-1 flex-col divide-zinc-200 divide-y-[1px]">
          <input
            className="flex-1 bg-zinc-100 p-2 text-zinc-600 outline-0 placeholder:text-zinc-400 focus:outline"
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            value={values.first}
            onChange={(event) =>
              setValues({ ...values, first: event.target.value })
            }
            required={required}
            autoComplete="off"
          />

          <input
            className="flex-1 bg-zinc-100 p-2 text-zinc-600 outline-0 placeholder:text-zinc-400 focus:outline"
            type={type}
            placeholder={`Bekräfta ${placeholder.toLowerCase()}`}
            value={values.second}
            onChange={(event) =>
              setValues({ ...values, second: event.target.value })
            }
            required={required}
            autoComplete="off"
          />
        </section>
      </section>
    </article>
  );
}

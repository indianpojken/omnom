"use client";

import { useState, useEffect } from "react";

import { icons } from "../icons";
export { useInputMatcher } from "./hook";

export default function MatchFields({
  id,
  icon,
  matcher,
  ...props
}: React.ComponentProps<"input"> & {
  id: string;
  icon?: boolean;
  matcher: (id: string, value: boolean) => void;
}) {
  const [values, setValues] = useState({
    first: "",
    second: "",
  });

  const isMatch = (): boolean =>
    values.first === values.second &&
    Object.values(values).every((value) => value !== "");

  useEffect(() => matcher(id, isMatch()), [values]);

  return (
    <article
      className={`flex-1 flex pr-2 border-r-4 rounded-md transition-colors duration-300 ${
        isMatch() ? "border-sky-400" : "border-zinc-200"
      }`}
    >
      <section className="flex flex-1 rounded-md border border-zinc-200 divide-zinc-200 divide-x-[1px] overflow-hidden">
        {icon && (
          <aside className="flex justify-center item-center p-2">
            {icons[props.type!]}
          </aside>
        )}

        <section className="flex flex-1 flex-col divide-zinc-200 divide-y-[1px]">
          <input
            className="flex-1 bg-zinc-100 p-2 text-zinc-600 outline-0 placeholder:text-zinc-400 focus:outline"
            {...props}
            id={id}
            name={id}
            value={values.first}
            onChange={(event) =>
              setValues({ ...values, first: event.target.value })
            }
          />

          <input
            {...props}
            className="flex-1 bg-zinc-100 p-2 text-zinc-600 outline-0 placeholder:text-zinc-400 focus:outline"
            value={values.second}
            onChange={(event) =>
              setValues({ ...values, second: event.target.value })
            }
            placeholder={
              props.placeholder && `Bekräfta ${props.placeholder.toLowerCase()}`
            }
          />
        </section>
      </section>
    </article>
  );
}

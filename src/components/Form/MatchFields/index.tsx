"use client";

import { useState, useEffect } from "react";

import { Icons } from "@/components/Icons";
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
    <article className="flex-1 flex">
      <section className="flex flex-1 rounded-md border-b-2 border-amber-900 text-amber-950 bg-amber-100">
        {icon && (
          <aside className="flex justify-center item-center p-2 text-amber-900">
            {Icons[props.type!]}
          </aside>
        )}

        <section className="flex flex-1 flex-col ">
          <label className="sr-only" htmlFor={id}>
            {props.placeholder}
          </label>

          <input
            className="flex-1 p-2 text-amber-950 bg-amber-50 outline-0 rounded-se-md placeholder:text-zinc-400 focus:outline border-b border-b-amber-100"
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
            className="flex-1 p-2 text-amber-950 bg-amber-50 outline-0 rounded-ee-md placeholder:text-zinc-400 focus:outline"
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

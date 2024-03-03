"use client";

import { icons } from "../icons";

export default function Field({
  icon,
  ...props
}: React.ComponentProps<"input"> & {
  icon?: boolean;
}) {
  const getClasses = () =>
    icon
      ? "flex-1 rounded-e-md border-b-2 border-amber-900 text-amber-950 bg-amber-50 p-2 outline-0 placeholder:text-zinc-400 focus:outline"
      : "flex-1 rounded-md border-b-2 border-amber-900 text-amber-950 bg-amber-50 p-2  outline-0 placeholder:text-zinc-400 focus:outline";

  return (
    <article className="flex">
      {icon && (
        <aside className="flex justify-center item-center bg-amber-100 border-amber-900 rounded-s-md border-b-2 p-2 text-amber-900">
          {icons[props.type!]}
        </aside>
      )}

      <label className="sr-only" htmlFor={props.id}>
        {props.placeholder}
      </label>

      <input {...props} className={getClasses()} />
    </article>
  );
}

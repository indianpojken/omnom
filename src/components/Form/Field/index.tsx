"use client";

import { icons } from "@/components/Icons";

export default function Field({
  icon,
  ...props
}: React.ComponentProps<"input"> & {
  icon?: string;
}) {
  const getClasses = () =>
    icon
      ? "flex-1 rounded-e-md border-b-2 border-amber-900 text-amber-950 bg-amber-50 p-2 outline-0 placeholder:text-zinc-400 focus:outline"
      : "flex-1 rounded-md border-b-2 border-amber-900 text-amber-950 bg-amber-50 p-2  outline-0 placeholder:text-zinc-400 focus:outline";

  return (
    <article className="flex flex-1">
      {icon && (
        <aside className="flex justify-center item-center bg-amber-100 border-amber-900 rounded-s-md border-b-2 p-2 text-amber-900">
          {icons[icon]}
        </aside>
      )}

      <label className="sr-only" htmlFor={props.id}>
        {props.placeholder}
      </label>

      <input {...props} name={props.id} className={getClasses()} />
    </article>
  );
}

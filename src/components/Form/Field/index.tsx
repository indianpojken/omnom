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
      ? "flex-1 rounded-e-md border border-zinc-200 bg-zinc-100 p-2 text-zinc-600 outline-0 placeholder:text-zinc-400 focus:outline"
      : "flex-1 rounded-md border border-zinc-200 bg-zinc-100 p-2 text-zinc-600 outline-0 placeholder:text-zinc-400 focus:outline";

  return (
    <article className="flex">
      {icon && (
        <aside className="flex justify-center item-center rounded-s-md border border-r-0 border-zinc-200 p-2">
          {icons[props.type!]}
        </aside>
      )}

      <input {...props} className={getClasses()} />
    </article>
  );
}

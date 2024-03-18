"use client";

import { icons } from "@/components/Icons";

export default function Field({
  icon,
  ...props
}: React.ComponentProps<"input"> & {
  icon?: string;
}) {
  return (
    <article className="flex-1 mt-2 flex rounded-md overflow-hidden border-b-2 border-amber-900">
      {icon && (
        <aside className="flex justify-center items-center font-bold p-2 bg-amber-100 text-amber-900">
          {icons[icon]}
        </aside>
      )}

      <label className="sr-only" htmlFor={props.id}>
        {props.placeholder}
      </label>

      <input
        {...props}
        name={props.id}
        className="flex-1 p-2 bg-amber-50 outline-none"
      />
    </article>
  );
}

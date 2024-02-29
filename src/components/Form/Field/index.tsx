"use client";

import { InputHTMLAttributes } from "react";

import { icons } from "../icons";

export default function Field({
  id,
  type,
  placeholder,
  value,
  onChange,
  required,
  icon,
  className,
}: {
  id?: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  icon?: boolean;
  className?: string;
}) {
  const getClasses = () =>
    icon
      ? "flex-1 rounded-e-md border border-zinc-200 bg-zinc-100 p-2 text-zinc-600 outline-0 placeholder:text-zinc-400 focus:outline"
      : "flex-1 rounded-md border border-zinc-200 bg-zinc-100 p-2 text-zinc-600 outline-0 placeholder:text-zinc-400 focus:outline";

  return (
    <article className="flex">
      {icon && (
        <aside className="flex justify-center item-center rounded-s-md border border-r-0 border-zinc-200 p-2">
          {icons[type!]}
        </aside>
      )}

      <input
        id={id}
        name={id}
        type={type}
        className={className ?? getClasses()}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </article>
  );
}

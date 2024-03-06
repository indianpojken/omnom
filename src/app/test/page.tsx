"use client";

import { useState } from "react";

type Field = (
  add: () => void,
  remove: (index: number) => void,
  index: number
) => React.ReactNode;

function ArrayField({ id, fields }: { id: string; fields: Field }) {
  const [items, setItems] = useState<Field[]>([fields]);

  const add = () => setItems([...items, fields]);

  const remove = (index: number) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  return (
    <section>{items.map((item, index) => item(add, remove, index))}</section>
  );
}

export default function Page() {
  return (
    <main className="flex mx-auto min-h-screen flex-col px-6 py-10 max-w-[800px]">
      <ArrayField
        id="item"
        fields={(add, remove, index) => (
          <article key={index} className="flex gap-4">
            <input type="text" className="border border-zinc-900" />

            <button onClick={() => remove(index)}>remove</button>
            <button onClick={() => add()}>add</button>
            <p>{index}</p>
          </article>
        )}
      />
    </main>
  );
}

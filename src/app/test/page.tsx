"use client";

import { useState } from "react";

type Field = (
  add: () => void,
  remove: (index: number) => void,
  index: number,
  forwards: (id: string) => {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
) => React.ReactNode;

function ArrayField({ id, fields }: { id: string; fields: Field }) {
  const [items, setItems] = useState<
    {
      values: Record<string, string>;
      component: Field;
    }[]
  >([{ values: {}, component: fields }]);

  const add = () => {
    setItems([...items, { values: {}, component: fields }]);
  };

  const remove = (index: number) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  return (
    <section>
      {items.map((item, index) =>
        item.component(add, remove, index, (name: string) => ({
          value: items[index].values[name],
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setItems([
              ...items,
              // {
              //   ...items[index],
              //   values: { id: event.target.id, value: event.target.value },
              // },
            ]);
          },
        }))
      )}
    </section>
  );
}

export default function Page() {
  return (
    <main className="flex mx-auto min-h-screen flex-col px-6 py-10 max-w-[800px]">
      <ArrayField
        id="item"
        fields={(add, remove, index, forwards) => (
          <article key={index} className="flex gap-4">
            <input
              {...forwards}
              type="text"
              className="border border-zinc-900"
            />

            <button onClick={() => remove(index)}>remove</button>
            <button onClick={() => add()}>add</button>
            <p>{index}</p>

            <input type="radio" id="huey" name="drone" {...forwards} />
          </article>
        )}
      />
    </main>
  );
}

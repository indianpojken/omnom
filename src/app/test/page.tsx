"use client";

import { useState } from "react";

type Field<T> = (
  add: () => void,
  remove: (index: number) => void,
  index: number,
  forwards: (name: keyof T) => {
    value: T[keyof T];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
) => React.ReactNode;

type FieldState<T> = {
  values: T;
  component: Field<T>;
}[];

function ArrayField<T>({ id, fields }: { id: string; fields: Field<T> }) {
  const [items, setItems] = useState<FieldState<T>>([
    { values: {} as T, component: fields },
  ]);

  const add = () => {
    setItems([...items, { values: {} as T, component: fields }]);
  };

  const remove = (index: number) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  console.log(items.map((item) => item.values));

  return (
    <section>
      {items.map((item, index) =>
        item.component(add, remove, index, (name) => ({
          value: items[index].values[name],
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setItems((prevItems) => [
              ...prevItems.slice(0, index),
              {
                ...prevItems[index],
                values: {
                  ...prevItems[index].values,
                  [name]: event.target.value,
                },
              },
              ...prevItems.slice(index + 1),
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
      <ArrayField<{ food: string; allergen: number }>
        id="item"
        fields={(add, remove, index, forwards) => (
          <article key={index} className="flex gap-4">
            <input
              {...forwards("food")}
              type="text"
              className="border border-zinc-900"
            />

            <button onClick={() => remove(index)}>remove</button>
            <button onClick={() => add()}>add</button>
            <p>{index}</p>

            <input
              type="radio"
              id="huey"
              name="drone"
              {...forwards("allergen")}
            />

            <input
              type="radio"
              id="huey"
              name="drone"
              {...forwards("allergen")}
            />
          </article>
        )}
      />
    </main>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { municipalities } from "@/constants";
import Field from "@/components/Form/Field";
import SubmitButton from "@/components/Form/SubmitButton";
import {
  createRestaurantAction,
  updateRestaurantAction,
} from "@/actions/restaurant";
import { Restaurant } from "@/types";

export default function EditRestaurant({
  restaurant,
}: {
  restaurant?: Restaurant;
}) {
  const action = restaurant ? updateRestaurantAction : createRestaurantAction;

  return (
    <form action={action} className="flex flex-col gap-4">
      <Field
        id="name"
        type="text"
        placeholder="Restaurangens namn"
        required
        icon="restaurant"
        defaultValue={restaurant?.name}
      />

      <article className="flex-1 mt-2 flex rounded-md overflow-hidden border-b-2 border-amber-900">
        <input
          id="price"
          name="price"
          className="text-right flex-1 p-2 bg-amber-50 outline-none"
          type="text"
          pattern="\d*"
          defaultValue={restaurant?.price ?? "0"}
          required
        />

        <aside className="flex justify-center items-center font-bold  px-2 bg-amber-100 text-amber-900">
          SEK
        </aside>
      </article>

      <select
        className="rounded-md border-b-2 border-amber-900 text-amber-950 bg-amber-50 p-3 outline-0 placeholder:text-zinc-400 focus:outline"
        name="municipal"
        id="municipal"
        defaultValue={restaurant?.municipal}
      >
        {restaurant?.municipal ?? (
          <option className="font-sans text-amber-950">Välj kommun</option>
        )}
        {municipalities.map((municipal) => (
          <option
            className="font-sans text-amber-950 selection:bg-amber-950 hover:bg-amber-950"
            key={municipal}
          >
            {municipal}
          </option>
        ))}
      </select>

      <section className="flex flex-wrap gap-4">
        <Field
          id="lunchHoursOpening"
          type="time"
          defaultValue={restaurant?.lunchHoursOpening ?? "11:00"}
          required
          icon="clock"
        />

        <Field
          id="lunchHoursClosing"
          type="time"
          defaultValue={restaurant?.lunchHoursClosing ?? "13:00"}
          required
          icon="clock"
        />
      </section>

      <section className="flex flex-wrap gap-4">
        <Field
          id="address"
          type="text"
          placeholder="Address"
          required
          icon="location"
          defaultValue={restaurant?.address ?? ""}
        />

        <Field
          id="zipCode"
          type="text"
          placeholder="Postnummer"
          required
          icon="number"
          defaultValue={restaurant?.zipCode ?? ""}
        />
      </section>

      <section className="flex flex-wrap gap-4">
        <Field
          id="phoneNumber"
          type="text"
          placeholder="Telefonnummer"
          icon="phone"
          defaultValue={restaurant?.phoneNumber ?? ""}
        />

        <Field
          id="website"
          type="text"
          placeholder="Webbsida"
          icon="url"
          defaultValue={restaurant?.website ?? ""}
        />
      </section>

      <SubmitButton>Spara</SubmitButton>
    </form>
  );
}

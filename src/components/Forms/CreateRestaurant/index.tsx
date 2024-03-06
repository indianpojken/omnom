"use client";

import { municipalities } from "@/constants";
import Field from "@/components/Form/Field";
import SubmitButton from "@/components/Form/SubmitButton";
import { createRestaurantAction } from "@/actions/restaurant";

export default function CreateRestaurant() {
  return (
    <form action={createRestaurantAction} className="flex flex-col gap-4">
      <Field
        id="name"
        type="text"
        placeholder="Restaurangens namn"
        required
        icon="restaurant"
      />

      <select
        className="rounded-md border-b-2 border-amber-900 text-amber-950 bg-amber-50 p-3 outline-0 placeholder:text-zinc-400 focus:outline"
        name="municipal"
        id="municipal"
      >
        <option className="font-sans text-amber-950">Välj kommun</option>
        {municipalities.map((municipal) => (
          <option
            className="font-sans text-amber-950 selection:bg-amber-950 hover:bg-amber-950"
            key={municipal}
            defaultValue={municipal}
          >
            {municipal}
          </option>
        ))}
      </select>

      <section className="flex flex-wrap gap-4">
        <Field
          id="lunchHoursOpening"
          type="time"
          defaultValue="11:00"
          required
          icon="clock"
        />

        <Field
          id="lunchHoursClosing"
          type="time"
          defaultValue="13:00"
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
        />

        <Field
          id="zipCode"
          type="text"
          placeholder="Postnummer"
          required
          icon="number"
        />
      </section>

      <section className="flex flex-wrap gap-4">
        <Field
          id="phoneNumber"
          type="text"
          placeholder="Telefonnummer"
          icon="phone"
        />

        <Field id="website" type="text" placeholder="Webbsida" icon="url" />
      </section>

      <SubmitButton>Spara</SubmitButton>
    </form>
  );
}

"use client";

import { useFormState } from "react-dom";

import Field from "@/components/Form/Field";
import SubmitButton from "@/components/Form/SubmitButton";
import MunicipalSelector from "../../Form/MunicipalSelector";
import { createRestaurantAction } from "@/actions/restaurant";

export default function CreateRestaurant({ owner }: { owner: string }) {
  const createRestaurantActionWithOwner = createRestaurantAction.bind(
    null,
    owner
  );

  const [sate, action] = useFormState(createRestaurantActionWithOwner, null);

  return (
    <form action={action} className="flex flex-col gap-4">
      <Field
        id="name"
        type="text"
        placeholder="Restaurangens namn"
        required
        icon="restaurant"
      />

      <MunicipalSelector />

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

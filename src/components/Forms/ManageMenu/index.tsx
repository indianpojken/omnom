"use client";

import { TestAction } from "@/actions/test";
import { useForm } from "react-hook-form";

import type { Menu } from "@/types";
import MenuField from "@/components/Form/MenuField";

export default function ManageMenu() {
  const form = useForm<Menu>({
    defaultValues: {
      hej: { items: [{ food: "", vegetarian: false, allergies: [] }] },
    },
  });

  return (
    <form
      className="flex flex-col items-start"
      action={() => form.handleSubmit((data) => TestAction(data))()}
    >
      <MenuField form={form} id="hej" />
      <input type="submit" />
    </form>
  );
}

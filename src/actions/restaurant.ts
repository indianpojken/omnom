"use server";

import { createRestaurant } from "@/services/restaurants";
import { Restaurant } from "@/types";
import { getUser } from "@/utils/user";
import { revalidatePath } from "next/cache";

function getData(formData: FormData): Omit<Restaurant, "id" | "owner"> {
  return {
    name: formData.get("name") as string,
    municipal: formData.get("municipal") as string,
    address: formData.get("address") as string,
    zipCode: formData.get("zipCode") as string,
    lunchHoursOpening: formData.get("lunchHoursOpening") as string,
    lunchHoursClosing: formData.get("lunchHoursClosing") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    website: formData.get("website") as string,
  };
}

export async function createRestaurantAction(formData: FormData) {
  const user = await getUser();
  const data = { owner: user.id, ...getData(formData) };

  console.log(data);

  await createRestaurant(data);
  revalidatePath("/manage");
}

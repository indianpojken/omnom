"use server";

import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurants,
  getRestaurantFromUser,
  updateRestaurant,
} from "@/services/restaurants";
import { Restaurant } from "@/types";
import { getUser, isAdmin } from "@/utils/user";
import { revalidatePath } from "next/cache";

function getData(formData: FormData): Omit<Restaurant, "id" | "owner"> {
  return {
    name: formData.get("name") as string,
    price: Number(formData.get("price")),
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

  await createRestaurant(data);
  revalidatePath("/manage");
}

export async function updateRestaurantAction(formData: FormData) {
  const user = await getUser();
  const data = { owner: user.id, ...getData(formData) };
  const restaurant = await getRestaurantFromUser(user.id);

  if (restaurant) {
    await updateRestaurant(restaurant, data);
    revalidatePath("/manage");
  } else {
    throw new Error(`No restaurant found.`);
  }
}

export async function getAllRestaurantsAction(): Promise<Restaurant[]> {
  return await getAllRestaurants();
}

export async function removeRestaurantAction(id: Restaurant["id"]) {
  if (await isAdmin()) {
    await deleteRestaurant(id);
    revalidatePath("/manage");
  } else {
    throw new Error(`Ajabaja, det där får inte du göra!`);
  }
}

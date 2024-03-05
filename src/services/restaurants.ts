import { and, eq } from "drizzle-orm";

import { database } from "@/services/database";
import { restaurants } from "@/schemas/restaurants";

import type { User } from "@supabase/supabase-js";
import type { Restaurant } from "@/types";

export async function createRestaurant(
  restaurant: Omit<Restaurant, "id">
): Promise<Restaurant> {
  const [createdRestaurant] = await database
    .insert(restaurants)
    .values(restaurant)
    .returning();

  return createdRestaurant;
}

export async function getRestaurantFromUser(id: User["id"]) {
  return await database.query.restaurants.findFirst({
    where: eq(restaurants.owner, id),
  });
}

export async function getRestaurant(id: Restaurant["id"]) {
  const restaurant = await database.query.restaurants.findMany({
    where: eq(restaurants.id, id),
  });

  if (restaurant) {
    return restaurant;
  } else {
    throw new Error(`Failed to get restaurant: no restaurant by id '${id}'.`);
  }
}

export async function getRestaurantsByMunicipal(
  municipal: Restaurant["municipal"]
) {
  return await database.query.restaurants.findMany({
    where: eq(restaurants.municipal, municipal),
  });
}

export async function getAllRestaurants(): Promise<Restaurant[]> {
  return await database.query.restaurants.findMany();
}

export async function deleteRestaurant(
  owner: Restaurant["owner"],
  id: Restaurant["id"]
) {
  const [restaurant] = await database
    .delete(restaurants)
    .where(and(eq(restaurants.owner, owner), eq(restaurants.id, id)))
    .returning();

  if (restaurant) {
    return restaurant;
  } else {
    throw new Error(
      `Failed to delete restaurant: no restaurant by id '${id}'.`
    );
  }
}

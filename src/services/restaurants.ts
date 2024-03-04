import { and, eq } from "drizzle-orm";

import { database } from "@/services/database";
import { restaurants } from "@/schemas/restaurants";

import type { User } from "@supabase/supabase-js";
import type { Restaurant } from "@/types";

export async function createRestaurant(
  restaurant: Restaurant
): Promise<Restaurant> {
  const [createdRestaurant] = await database
    .insert(restaurants)
    .values(restaurant)
    .returning();

  return createdRestaurant;
}

export async function getAllRestaurantsFromUser(id: User["id"]) {
  return await database.query.restaurants.findMany({
    where: eq(restaurants.id, id),
  });
}

export async function getRestaurant(id: Restaurant["id"]) {
  return await database.query.restaurants.findMany({
    where: eq(restaurants.id, id),
  });
}

export async function deleteRestaurant(
  owner: Restaurant["owner"],
  id: Restaurant["id"]
) {
  const [restaurant] = await database
    .delete(restaurants)
    .where(and(eq(restaurants.owner, owner), eq(restaurants.id, id)))
    .returning();
}

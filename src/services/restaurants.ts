"use server";

import { asc, eq, ilike } from "drizzle-orm";

import { database } from "@/services/database";
import { restaurants } from "@/schemas/restaurants";
import { menus } from "@/schemas/menus";
import { formatDate } from "@/utils/dates";

import type { User } from "@supabase/supabase-js";
import type { Date, Menu, Restaurant, RestaurantWithMenu } from "@/types";

export async function getRestaurantFromUser(id: User["id"]) {
  return await database.query.restaurants.findFirst({
    where: eq(restaurants.owner, id),
  });
}

export async function createRestaurant(
  restaurant: Omit<Restaurant, "id">
): Promise<Restaurant> {
  const [createdRestaurant] = await database
    .insert(restaurants)
    .values(restaurant)
    .returning();

  return createdRestaurant;
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

export async function updateRestaurant(
  restaurant: Restaurant,
  data: Omit<Restaurant, "id">
): Promise<Restaurant> {
  const [updatedRestaurant] = await database
    .update(restaurants)
    .set(data)
    .where(eq(restaurants.id, restaurant.id))
    .returning();

  return updatedRestaurant;
}

export async function getAllRestaurants(): Promise<Restaurant[]> {
  return await database.query.restaurants.findMany();
}

export async function deleteRestaurant(id: Restaurant["id"]) {
  const [restaurant] = await database
    .delete(restaurants)
    .where(eq(restaurants.id, id))
    .returning();

  if (restaurant) {
    return restaurant;
  } else {
    throw new Error(
      `Failed to delete restaurant: no restaurant by id '${id}'.`
    );
  }
}

export async function getRestaurantsWithMenuFromMunicipal(
  municipal: string,
  date: Date
): Promise<Array<RestaurantWithMenu>> {
  const items = await database.query.restaurants.findMany({
    orderBy: [asc(restaurants.name)],
    where: ilike(restaurants.municipal, municipal as string),
    with: {
      menus: {
        columns: {
          data: true,
        },
        where: eq(menus.yearAndWeek, formatDate(date)),
      },
    },
  });

  return items.map(({ menus, ...item }) => ({
    ...item,
    menu: menus.at(0)?.data as Menu,
  }));
}

import { invites } from "@/schemas/invites";
import { restaurants } from "./schemas/restaurants";
import { menus } from "./schemas/menus";
import { roles } from "@/constants";

export type Invite = typeof invites.$inferSelect;
export type Restaurant = typeof restaurants.$inferSelect;
export type Roles = (typeof roles)[number];
export type MenuEntry = typeof menus.$inferSelect;

export type Municipal = string;
export type Municipalities = Municipal[];

export type Date = {
  year: number;
  week: number;
};

export type Menu = Record<
  string,
  {
    items: {
      food: string;
      vegetarian: boolean;
      allergies: string[];
    }[];
  }
>;

export type RestaurantWithMenu = Restaurant & { menu: Menu };

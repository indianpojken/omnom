import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";

import { menus } from "./menus";

export const restaurants = pgTable("restaurants", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  owner: text("owner").notNull(),
  name: text("name").notNull(),
  municipal: text("municipal").notNull(),
  address: text("address").notNull(),
  zipCode: text("zipCode").notNull(),
  lunchHoursOpening: text("lunchHoursOpening").notNull(),
  lunchHoursClosing: text("lunchHoursClosing").notNull(),
  phoneNumber: text("phoneNumber"),
  website: text("website"),
  price: integer("price").notNull(),
});

export const restaurantsRelations = relations(restaurants, ({ many }) => ({
  menus: many(menus),
}));

import { pgTable, text, json } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";

import { restaurants } from "./restaurants";

export const menus = pgTable("menus", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  data: json("data"),
  restaurant: text("restaurant")
    .references(() => restaurants.id, { onDelete: "cascade" })
    .notNull(),
  yearAndWeek: text("yearAndWeek").notNull(),
});

export const menusRelations = relations(menus, ({ one }) => ({
  restaurant: one(restaurants, {
    fields: [menus.restaurant],
    references: [restaurants.id],
  }),
}));

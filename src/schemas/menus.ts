import { pgTable, text, json } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const menus = pgTable("menus", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  data: json("data"),
  restaurant: text("restaurant").notNull(),
  yearAndWeek: text("yearAndWeek").notNull(),
});

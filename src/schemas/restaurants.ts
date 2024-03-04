import { pgTable, text } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const restaurants = pgTable("restaurants", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  owner: text("owner").notNull(),
  name: text("name").notNull(),
  municipal: text("name").notNull(),
  address: text("address").notNull(),
  zipCode: text("zipCode").notNull(),
  phoneNumber: text("phoneNumber"),
  website: text("website"),
  lunchHours: text("lunchHours"),
});

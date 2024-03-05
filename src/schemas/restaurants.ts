import { pgTable, text } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

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
});

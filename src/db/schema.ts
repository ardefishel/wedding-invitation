import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  whatsapp: varchar("whatsapp", { length: 30 }).notNull(),
  status: varchar("status", { length: 20 }).notNull(), // 'hadir' | 'tidak-hadir'
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const wishes = pgTable("wishes", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

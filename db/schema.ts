import { sqliteTable, text, integer, primaryKey } from "drizzle-orm/sqlite-core";
export const quizzes=sqliteTable("quizzes",{id:text().primaryKey(),owner:text().notNull(),title:text().notNull(),data:text().notNull(),created:integer().notNull()});
export const rooms=sqliteTable("rooms",{code:text().primaryKey(),host:text().notNull(),quiz:text().notNull(),phase:text().notNull(),idx:integer().notNull(),started:integer().notNull(),created:integer().notNull()});
export const players=sqliteTable("players",{id:text().primaryKey(),room:text().notNull(),name:text().notNull()});
export const answers=sqliteTable("answers",{player:text().notNull(),room:text().notNull(),idx:integer().notNull(),choice:integer().notNull(),points:integer().notNull()},t=>[primaryKey({columns:[t.player,t.room,t.idx]})]);

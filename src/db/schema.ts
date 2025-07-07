/* eslint-disable @typescript-eslint/no-unused-vars */
import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, varchar, text, tinyint, boolean } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const beacon = mysqlTable("beacon", {
	id: int().autoincrement().notNull(),
	uid: varchar({ length: 33 }).notNull(),
	isNotification: tinyint("is_notification"),
	// isNotification: boolean('is_notification').notNull().default(false),
},
(table) => [
	primaryKey({ columns: [table.id], name: "beacon_id"}),
]);

export const kmapQuestion = mysqlTable("kmap_question", {
	id: int().autoincrement().notNull(),
	uid: varchar({ length: 33 }).notNull(),
	testResult: tinyint("test_result"),
},
(table) => [
	primaryKey({ columns: [table.id], name: "kmap_question_id"}),
]);

export const lurs = mysqlTable("lurs", {
	id: int().autoincrement().notNull(),
	uid: varchar({ length: 33 }).notNull(),
	learn: text(),
	unlearn: text(),
	relearn: text(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "lurs_id"}),
]);

export const redeems = mysqlTable("redeems", {
	id: int().autoincrement().notNull(),
	uid: varchar({ length: 33 }).notNull(),
	isRedeem: tinyint("is_redeem"),
},
(table) => [
	primaryKey({ columns: [table.id], name: "redeems_id"}),
]);

export const users = mysqlTable("users", {
	id: int().autoincrement().notNull(),
	uid: varchar({ length: 33 }).notNull(),
	fullname: varchar({ length: 150 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "users_id"}),
]);

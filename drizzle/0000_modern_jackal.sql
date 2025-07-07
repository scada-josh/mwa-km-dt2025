-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `beacon` (
	`id` int AUTO_INCREMENT NOT NULL,
	`uid` varchar(33) NOT NULL,
	`is_notification` tinyint(1),
	CONSTRAINT `beacon_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `kmap_question` (
	`id` int AUTO_INCREMENT NOT NULL,
	`uid` varchar(33) NOT NULL,
	`test_result` tinyint(1),
	CONSTRAINT `kmap_question_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `lurs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`uid` varchar(33) NOT NULL,
	`learn` text,
	`unlearn` text,
	`relearn` text,
	CONSTRAINT `lurs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `redeems` (
	`id` int AUTO_INCREMENT NOT NULL,
	`uid` varchar(33) NOT NULL,
	`is_redeem` tinyint(1),
	CONSTRAINT `redeems_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`uid` varchar(33) NOT NULL,
	`fullname` varchar(150) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);

*/
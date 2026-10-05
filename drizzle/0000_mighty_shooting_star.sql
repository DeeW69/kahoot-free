CREATE TABLE `answers` (
	`player` text NOT NULL,
	`room` text NOT NULL,
	`idx` integer NOT NULL,
	`choice` integer NOT NULL,
	`points` integer NOT NULL,
	PRIMARY KEY(`player`, `room`, `idx`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`id` text PRIMARY KEY NOT NULL,
	`room` text NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `quizzes` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`title` text NOT NULL,
	`data` text NOT NULL,
	`created` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rooms` (
	`code` text PRIMARY KEY NOT NULL,
	`host` text NOT NULL,
	`quiz` text NOT NULL,
	`phase` text NOT NULL,
	`idx` integer NOT NULL,
	`started` integer NOT NULL,
	`created` integer NOT NULL
);

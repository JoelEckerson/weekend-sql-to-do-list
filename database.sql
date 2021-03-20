CREATE TABLE "todo"(
	"id" serial primary key,
	"task" varchar(30),
	"completed" boolean
);

INSERT INTO "todo" ( task, completed) VALUES ( 'do homework', false );
SELECT * from "todo";
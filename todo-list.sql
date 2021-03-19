CREATE TABLE "todo"(
	"id" serial primary key,
	"task" varchar(30),
	"completed" varchar(10),
	"completedbutton" varchar(30),
	"deletebutton" varchar(30)
);

INSERT INTO "todo" ( task, completed) VALUES ( 'do homework', 'false' );
SELECT * from "todo";
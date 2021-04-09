CREATE TABLE "clients" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "number" VARCHAR(10),
  "email" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "category"  TEXT NOT NULL
);
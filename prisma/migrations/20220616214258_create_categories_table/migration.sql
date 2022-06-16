-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(250) NOT NULL,
    "slug" VARCHAR(250) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

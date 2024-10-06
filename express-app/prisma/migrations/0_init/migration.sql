-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "email" VARCHAR NOT NULL,
    "passwordHash" VARCHAR NOT NULL,
    "googleId" VARCHAR,
    "googleEmail" VARCHAR,
    "firstName" VARCHAR,
    "lastName" VARCHAR,
    "lastLogin" TIMESTAMPTZ(6),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_googleId_key" ON "user"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "user_googleEmail_key" ON "user"("googleEmail");


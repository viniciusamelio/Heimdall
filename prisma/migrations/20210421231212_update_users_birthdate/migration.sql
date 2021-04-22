/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `created_at` TIMESTAMP(0),
    MODIFY `updated_at` TIMESTAMP(0);

-- CreateIndex
CREATE UNIQUE INDEX `users.email_unique` ON `users`(`email`);

-- AlterTable
ALTER TABLE `users` MODIFY `birthdate` DATE,
    ALTER COLUMN `created_at` DROP DEFAULT,
    MODIFY `updated_at` TIMESTAMP(0);

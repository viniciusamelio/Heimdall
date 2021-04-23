-- AlterTable
ALTER TABLE `users` ADD COLUMN     `token` VARCHAR(255),
    MODIFY `created_at` TIMESTAMP(0),
    MODIFY `updated_at` TIMESTAMP(0);

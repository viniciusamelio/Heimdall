-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(180) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `birthdate` DATE NOT NULL,
    `sex` VARCHAR(1),
    `created_at` TIMESTAMP(0) NOT NULL,
    `updated_at` TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

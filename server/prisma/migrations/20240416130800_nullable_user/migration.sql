-- AlterTable
ALTER TABLE `Product` MODIFY `image_url` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `gender` ENUM('male', 'female') NULL,
    MODIFY `role` ENUM('user', 'admin', 'superAdmin') NULL DEFAULT 'user';

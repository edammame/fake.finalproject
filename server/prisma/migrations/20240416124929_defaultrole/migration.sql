-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('user', 'admin', 'superAdmin') NOT NULL DEFAULT 'user';

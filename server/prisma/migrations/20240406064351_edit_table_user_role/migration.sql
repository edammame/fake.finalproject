-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('user', 'admin', 'superAdmin') NULL DEFAULT 'user';

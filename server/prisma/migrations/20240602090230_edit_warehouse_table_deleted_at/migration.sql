/*
  Warnings:

  - You are about to drop the column `delete_at` on the `warehouse` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `warehouse` DROP COLUMN `delete_at`,
    ADD COLUMN `deleted_at` DATETIME(3) NULL;

/*
  Warnings:

  - You are about to drop the column `name` on the `Warehouse` table. All the data in the column will be lost.
  - Added the required column `warehouseName` to the `Warehouse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Warehouse` DROP COLUMN `name`,
    ADD COLUMN `warehouseName` VARCHAR(191) NOT NULL;

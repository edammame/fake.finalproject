/*
  Warnings:

  - You are about to drop the column `longtitude` on the `warehouse` table. All the data in the column will be lost.
  - Added the required column `longitude` to the `Warehouse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `warehouse` DROP COLUMN `longtitude`,
    ADD COLUMN `longitude` VARCHAR(191) NOT NULL;

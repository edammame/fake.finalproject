/*
  Warnings:

  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `warehouseName` on the `Warehouse` table. All the data in the column will be lost.
  - Added the required column `category_name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warehouse_name` to the `Warehouse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Category` DROP COLUMN `name`,
    ADD COLUMN `category_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `productName`,
    ADD COLUMN `product_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Warehouse` DROP COLUMN `warehouseName`,
    ADD COLUMN `warehouse_name` VARCHAR(191) NOT NULL;

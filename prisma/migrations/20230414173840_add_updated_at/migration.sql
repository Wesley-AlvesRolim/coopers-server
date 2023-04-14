/*
  Warnings:

  - You are about to drop the column `readAt` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `readAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "readAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "readAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

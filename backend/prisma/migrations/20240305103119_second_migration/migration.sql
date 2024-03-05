/*
  Warnings:

  - You are about to drop the column `create_date` on the `tb_ejercicio` table. All the data in the column will be lost.
  - You are about to drop the column `modify_date` on the `tb_ejercicio` table. All the data in the column will be lost.
  - You are about to drop the column `create_date` on the `tb_explicacion` table. All the data in the column will be lost.
  - You are about to drop the column `modify_date` on the `tb_explicacion` table. All the data in the column will be lost.
  - You are about to drop the column `create_date` on the `tb_respuesta` table. All the data in the column will be lost.
  - You are about to drop the column `ejercicioId` on the `tb_respuesta` table. All the data in the column will be lost.
  - You are about to drop the column `modify_date` on the `tb_respuesta` table. All the data in the column will be lost.
  - You are about to drop the column `create_date` on the `tb_tema` table. All the data in the column will be lost.
  - You are about to drop the column `modify_date` on the `tb_tema` table. All the data in the column will be lost.
  - Added the required column `respuesta_1_id` to the `tb_ejercicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `respuesta_2_id` to the `tb_ejercicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `respuesta_3_id` to the `tb_ejercicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `respuesta_4_id` to the `tb_ejercicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo_teoria_1` to the `tb_explicacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo_teoria_2` to the `tb_explicacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo_teoria_3` to the `tb_explicacion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tb_respuesta` DROP FOREIGN KEY `tb_respuesta_ejercicioId_fkey`;

-- AlterTable
ALTER TABLE `tb_ejercicio` DROP COLUMN `create_date`,
    DROP COLUMN `modify_date`,
    ADD COLUMN `respuesta_1_id` INTEGER NOT NULL,
    ADD COLUMN `respuesta_2_id` INTEGER NOT NULL,
    ADD COLUMN `respuesta_3_id` INTEGER NOT NULL,
    ADD COLUMN `respuesta_4_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tb_explicacion` DROP COLUMN `create_date`,
    DROP COLUMN `modify_date`,
    ADD COLUMN `photo_teoria_1` VARCHAR(191) NOT NULL,
    ADD COLUMN `photo_teoria_2` VARCHAR(191) NOT NULL,
    ADD COLUMN `photo_teoria_3` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tb_respuesta` DROP COLUMN `create_date`,
    DROP COLUMN `ejercicioId`,
    DROP COLUMN `modify_date`;

-- AlterTable
ALTER TABLE `tb_tema` DROP COLUMN `create_date`,
    DROP COLUMN `modify_date`;

-- AddForeignKey
ALTER TABLE `tb_ejercicio` ADD CONSTRAINT `tb_ejercicio_respuesta_1_id_fkey` FOREIGN KEY (`respuesta_1_id`) REFERENCES `tb_respuesta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_ejercicio` ADD CONSTRAINT `tb_ejercicio_respuesta_2_id_fkey` FOREIGN KEY (`respuesta_2_id`) REFERENCES `tb_respuesta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_ejercicio` ADD CONSTRAINT `tb_ejercicio_respuesta_3_id_fkey` FOREIGN KEY (`respuesta_3_id`) REFERENCES `tb_respuesta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_ejercicio` ADD CONSTRAINT `tb_ejercicio_respuesta_4_id_fkey` FOREIGN KEY (`respuesta_4_id`) REFERENCES `tb_respuesta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

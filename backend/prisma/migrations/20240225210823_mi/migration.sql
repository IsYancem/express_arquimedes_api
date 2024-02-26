-- CreateTable
CREATE TABLE `tb_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `role_id` INTEGER NOT NULL,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modify_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modify_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_historial_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `puntaje` INTEGER NOT NULL,
    `correctas` VARCHAR(191) NOT NULL,
    `incorrectas` VARCHAR(191) NOT NULL,
    `create_date` DATETIME(3) NOT NULL,
    `modify_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_tema` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_tema` VARCHAR(191) NOT NULL,
    `create_date` DATETIME(3) NOT NULL,
    `modify_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_explicacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teoria_1` VARCHAR(191) NOT NULL,
    `teoria_2` VARCHAR(191) NOT NULL,
    `teoria_3` VARCHAR(191) NOT NULL,
    `tema_id` INTEGER NOT NULL,
    `create_date` DATETIME(3) NOT NULL,
    `modify_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_ejercicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `enunciado` VARCHAR(191) NOT NULL,
    `tema_id` INTEGER NOT NULL,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modify_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_respuesta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `respuesta` VARCHAR(191) NOT NULL,
    `is_true` BOOLEAN NOT NULL,
    `ejercicioId` INTEGER NOT NULL,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modify_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_user` ADD CONSTRAINT `tb_user_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `tb_role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_historial_user` ADD CONSTRAINT `tb_historial_user_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `tb_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_explicacion` ADD CONSTRAINT `tb_explicacion_tema_id_fkey` FOREIGN KEY (`tema_id`) REFERENCES `tb_tema`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_ejercicio` ADD CONSTRAINT `tb_ejercicio_tema_id_fkey` FOREIGN KEY (`tema_id`) REFERENCES `tb_tema`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_respuesta` ADD CONSTRAINT `tb_respuesta_ejercicioId_fkey` FOREIGN KEY (`ejercicioId`) REFERENCES `tb_ejercicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

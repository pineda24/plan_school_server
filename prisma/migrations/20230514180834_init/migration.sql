-- CreateTable
CREATE TABLE `career` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `fecalt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fecbaj` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `career_id` INTEGER NOT NULL,
    `subject_id` INTEGER NOT NULL,
    `fecalt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fecbaj` DATETIME(3) NULL,
    `area` VARCHAR(191) NOT NULL,
    `reqsim` INTEGER NULL,
    `requi1` INTEGER NULL,
    `requi2` INTEGER NULL,
    `requi3` INTEGER NULL,
    `requi4` INTEGER NULL,
    `semestre` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `nsesio` INTEGER NOT NULL,
    `durses` INTEGER NOT NULL,
    `fecalt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fecbaj` DATETIME(3) NULL,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `plan` ADD CONSTRAINT `plan_career_id_fkey` FOREIGN KEY (`career_id`) REFERENCES `career`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plan` ADD CONSTRAINT `plan_reqsim_fkey` FOREIGN KEY (`reqsim`) REFERENCES `subject`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plan` ADD CONSTRAINT `plan_requi1_fkey` FOREIGN KEY (`requi1`) REFERENCES `subject`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plan` ADD CONSTRAINT `plan_requi2_fkey` FOREIGN KEY (`requi2`) REFERENCES `subject`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plan` ADD CONSTRAINT `plan_requi3_fkey` FOREIGN KEY (`requi3`) REFERENCES `subject`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plan` ADD CONSTRAINT `plan_requi4_fkey` FOREIGN KEY (`requi4`) REFERENCES `subject`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

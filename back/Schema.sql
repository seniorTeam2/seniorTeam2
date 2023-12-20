-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema team2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema team2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `team2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `team2` ;

-- -----------------------------------------------------
-- Table `team2`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team2`.`user` (
  `UserID` INT NOT NULL AUTO_INCREMENT,
  `Password` VARCHAR(255) NULL DEFAULT NULL,
  `Email` VARCHAR(255) NULL DEFAULT NULL,
  `Role` VARCHAR(50) NULL DEFAULT NULL,
  `FirstName` VARCHAR(255) NULL DEFAULT NULL,
  `LastName` VARCHAR(255) NULL DEFAULT NULL,
  `ConfirmPassword` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`UserID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `team2`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team2`.`cart` (
  `CartID` INT NOT NULL AUTO_INCREMENT,
  `NameCart` VARCHAR(255) NULL DEFAULT NULL,
  `CartImage` LONGTEXT NULL DEFAULT NULL,
  `Price` INT NULL DEFAULT NULL,
  `Quantity` INT NULL DEFAULT NULL,
  `user_UserID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`CartID`),
  INDEX `fk_cart_user1_idx` (`user_UserID` ASC) VISIBLE,
  CONSTRAINT `fk_cart_user1`
    FOREIGN KEY (`user_UserID`)
    REFERENCES `team2`.`user` (`UserID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `team2`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team2`.`category` (
  `CategoryID` INT NOT NULL AUTO_INCREMENT,
  `NameCategory` VARCHAR(255) NULL DEFAULT NULL,
  `CategoryImage` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`CategoryID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `team2`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `team2`.`product` (
  `ProductID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NULL DEFAULT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `Price` DECIMAL(10,2) NULL DEFAULT NULL,
  `Quantity` INT NULL DEFAULT NULL,
  `Rating` INT NULL DEFAULT NULL,
  `Color` VARCHAR(255) NULL DEFAULT NULL,
  `Size` VARCHAR(45) NULL DEFAULT NULL,
  `Availability` VARCHAR(45) NULL DEFAULT NULL,
  `Discount` INT NULL DEFAULT NULL,
  `ProductImage` LONGTEXT NULL DEFAULT NULL,
  `CategoryID` INT NULL DEFAULT NULL,
  `user_UserID` INT NULL DEFAULT NULL,
  `cart_CartID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`ProductID`),
  INDEX `fk_product_category1_idx` (`CategoryID` ASC) VISIBLE,
  INDEX `fk_product_user1_idx` (`user_UserID` ASC) VISIBLE,
  INDEX `fk_product_cart1_idx` (`cart_CartID` ASC) VISIBLE,
  CONSTRAINT `fk_product_cart1`
    FOREIGN KEY (`cart_CartID`)
    REFERENCES `team2`.`cart` (`CartID`),
  CONSTRAINT `fk_product_category1`
    FOREIGN KEY (`CategoryID`)
    REFERENCES `team2`.`category` (`CategoryID`),
  CONSTRAINT `fk_product_user1`
    FOREIGN KEY (`user_UserID`)
    REFERENCES `team2`.`user` (`UserID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

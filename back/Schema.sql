-- MySQL Workbench Forward Engineering

-- Disable unique checks, foreign key checks, and set SQL mode
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- Create the 'team2' schema if not exists
CREATE SCHEMA IF NOT EXISTS `team2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `team2`;

-- Table: 'user'
CREATE TABLE IF NOT EXISTS `user` (
  `UserID` INT AUTO_INCREMENT,
  `Password` VARCHAR(255) NULL,
  `Email` VARCHAR(255) NULL,
  `Role` VARCHAR(50) NULL,
  `FirstName` VARCHAR(255) NULL,
  `LastName` VARCHAR(255) NULL,
  `ConfirmPassword` VARCHAR(255) NULL,
  PRIMARY KEY (`UserID`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Table: 'cart'
CREATE TABLE IF NOT EXISTS `cart` (
  `CartID` INT AUTO_INCREMENT,
  `NameCart` INT NULL DEFAULT NULL,
  `CartImage` LONGTEXT NULL,
  `Price` INT NULL,
  `Quantity` INT NULL,
  `user_UserID` INT NULL,
  PRIMARY KEY (`CartID`),
  INDEX `fk_cart_user1_idx` (`user_UserID` ASC),
  CONSTRAINT `fk_cart_user1`
    FOREIGN KEY (`user_UserID`)
    REFERENCES `user` (`UserID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Table: 'category'
CREATE TABLE IF NOT EXISTS `category` (
  `CategoryID` INT AUTO_INCREMENT,
  `NameCategory` VARCHAR(255) NULL,
  `CategoryImage` LONGTEXT NULL,
  PRIMARY KEY (`CategoryID`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Table: 'product'
CREATE TABLE IF NOT EXISTS `product` (
  `ProductID` INT AUTO_INCREMENT,
  `Name` VARCHAR(255) NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `Price` DECIMAL(10,2) NULL,
  `Quantity` INT NULL,
  `Rating` INT NULL,
  `Color` VARCHAR(255) NULL,
  `Size` VARCHAR(45) NULL,
  `Availability` VARCHAR(45) NULL,
  `Discount` INT NULL,
  `ProductImage` LONGTEXT NULL,
  `CategoryID` INT NULL,
  `user_UserID` INT NULL,
  `cart_CartID` INT NULL,
  PRIMARY KEY (`ProductID`),
  INDEX `fk_product_category1_idx` (`CategoryID` ASC),
  INDEX `fk_product_user1_idx` (`user_UserID` ASC),
  INDEX `fk_product_cart1_idx` (`cart_CartID` ASC),
  CONSTRAINT `fk_product_category1`
    FOREIGN KEY (`CategoryID`)
    REFERENCES `category` (`CategoryID`),
  CONSTRAINT `fk_product_user1`
    FOREIGN KEY (`user_UserID`)
    REFERENCES `user` (`UserID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_cart1`
    FOREIGN KEY (`cart_CartID`)
    REFERENCES `cart` (`CartID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- Restore original settings
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

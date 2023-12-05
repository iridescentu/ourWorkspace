-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ows
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contents`
--

DROP TABLE IF EXISTS `contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contents` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `author_id` varchar(255) DEFAULT NULL,
  `hidden` bit(1) DEFAULT NULL,
  `image` varchar(1500) DEFAULT NULL,
  `left` double DEFAULT NULL,
  `login_id` varchar(255) DEFAULT NULL,
  `nick_name` varchar(255) DEFAULT NULL,
  `target_id` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `top` double DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contents`
--

LOCK TABLES `contents` WRITE;
/*!40000 ALTER TABLE `contents` DISABLE KEYS */;
INSERT INTO `contents` VALUES (1,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHcS6_NS1X17kkWPwWOuYMNJmu43DJhqYpINv79KZ0m7mqNht0hAEUuFJLNWY--dpj8Z3KW5KgXEAE3O0ihISzx0IZoO4Opjy4rCKR6rbViYV3imn9WBlPbfSID8JQudzSjCdx5oWUYMJtu8pPcbJhYg3A=w159-h154-s-no-gm?authuser=0',0,'gPwjd0326','HyeJeong','gPwjd0326','안녕',0,NULL),(2,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHfJRZohLgah0dPLgpC5BbphgMnLgl7Jqnnzt_Je3ZiOMutKZREWoqhFk15AyFdSOrDVzCUHfHvhyEezvQFvHW_5ayrjnWIYY0Sttoqh2tD5TczXiNvFIwMIAk_cq3lA_ix3RYSZ5JBWWIuCyKWXterC2g=w171-h177-s-no-gm?authuser=0',0,'gPwjd0326','HyeJeong','gPwjd0326','hello',0,NULL),(3,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',0,'gPwjd0326','HyeJeong','gPwjd0326','hi',0,NULL),(4,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','메롱',NULL,NULL),(5,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','메롱',NULL,NULL),(6,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','메롱',NULL,NULL),(7,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','메롱',NULL,NULL),(8,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','메롱',NULL,NULL),(9,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','메롱',NULL,NULL),(10,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','메롱',NULL,NULL),(11,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','메롱',NULL,NULL),(12,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','메롱',NULL,NULL),(13,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','메롱',NULL,NULL),(14,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','메롱',NULL,NULL),(15,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','혜정이 수고했어 힘내자',NULL,NULL),(16,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','혜정이 수고했어 힘내자',NULL,NULL),(17,'gPwjd0326',_binary '\0','https://lh3.googleusercontent.com/pw/ADCreHdxeVVzMMzU4Vt9rdemIpUrUf3oLiTXcf57H1-0IdSjLCmtYtbI2LZeVMDpCfUeAwcNJaRTR66h264Q155aqBrAnv2Dfi2Gqjb1a9QCY7ojqYilFB4AV_uwmJUmtfbrpry6XCvoMmnvYOnmFdmR0zIpyA=w194-h199-s-no-gm?authuser=0',NULL,'gPwjd0326','HyeJeong','gPwjd0326','혜정이 수고했어 힘내자',NULL,NULL),(18,NULL,_binary '\0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,NULL,_binary '\0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,NULL,_binary '\0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,NULL,_binary '\0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(22,NULL,_binary '\0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,NULL,_binary '\0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `contents` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-05 21:00:25

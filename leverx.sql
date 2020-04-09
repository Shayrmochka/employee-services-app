-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: lererx
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName_EN` varchar(45) DEFAULT 'qweqweqwe',
  `lastName_EN` varchar(45) DEFAULT 'qweqweqwe',
  `firstName_RU` varchar(45) DEFAULT 'qweqweqwe',
  `lastName_RU` varchar(45) DEFAULT 'qwewqeqw',
  `patronym_RU` varchar(45) DEFAULT 'qeqwewqe',
  `gender` varchar(45) DEFAULT 'Mr',
  `password` varchar(45) DEFAULT '123',
  `role` varchar(45) DEFAULT 'user',
  `worker_type` varchar(45) DEFAULT 'hr',
  `department` varchar(45) DEFAULT NULL,
  `room` varchar(45) DEFAULT NULL,
  `internal_phone` varchar(45) DEFAULT NULL,
  `mobile_phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `skype` varchar(45) DEFAULT NULL,
  `c_number` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `skype_UNIQUE` (`skype`),
  UNIQUE KEY `c_number_UNIQUE` (`c_number`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=143 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Dzmitry','Antonenka','Дмитрий','Антоненко','Батькович','Mr','123','admin','employee','Web & Mobile','1608','123','+375 29 1234567','adamsdfdsf@leverx.com','a.asddf','C4523443','images/0.jpg'),(2,'Alex','Zhukau','Олег','Жуков','Виталич','Mr','321','editor','hr','Web & Mobile','1608','124','+375 29 1254367','zhukau@mal.ru','z.sadd','C4673244','images/1.jpg'),(4,'Maxim','Podolsky','Максим','Подольский','Максимыч','Mr','123','user','employee','Web & Mobile','1608','323','+375 29 1254367','qwe@mail.ru','qwe','C4634443','images/2.jpg'),(140,'Anna','Belova','Анна','Белова','Антоновна','Mrs','1233','admin','hr','Web & Mobile','1608','13213','+375 29 1254367','ewe@mail.ru','qwewew','C4128443','images/3.jpg'),(141,'Vitaliy','Vlasov','Виталий','Власов','Виталич','Mr','1232','editor','employee','Web & Mobile','1608','12312','+375 29 1254367','eweee@mail.ru','wew','C1178443','images/4.jpg'),(142,'Stepan','Smirnov','Степан','Смирнов','Иванович','Mr','2323','user','employee','Web & Mobile','1608','213','+375 29 1254367','eeeeeeee@mail.ru','qweqwee','C2278443','images/5.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-09 16:00:35

-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: app_java
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CELULAR` bigint(20) NOT NULL,
  `DIRECCION` varchar(200) NOT NULL,
  `DOCUMENTO` bigint(20) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `PRIMER_APELLIDO` varchar(30) NOT NULL,
  `PRIMER_NOMBRE` varchar(30) NOT NULL,
  `SEGUNDO_APELLIDO` varchar(30) DEFAULT NULL,
  `SEGUNDO_NOMBRE` varchar(30) DEFAULT NULL,
  `TIPO_DOCUMENTO` varchar(2) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `CLIENTE_PK` (`DOCUMENTO`,`TIPO_DOCUMENTO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foto`
--

DROP TABLE IF EXISTS `foto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `foto` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CODIGO` bigint(20) NOT NULL,
  `RUTA` varchar(200) NOT NULL,
  `MANTENIMIENTO_ID` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UK_pwgx9sw8t8ttabjdlcx917ewk` (`CODIGO`),
  UNIQUE KEY `UK_h86ilcjsatrk79gmh5w54qy6s` (`RUTA`),
  KEY `FOTO_FK1` (`MANTENIMIENTO_ID`),
  CONSTRAINT `FOTO_FK1` FOREIGN KEY (`MANTENIMIENTO_ID`) REFERENCES `mantenimiento` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foto`
--

LOCK TABLES `foto` WRITE;
/*!40000 ALTER TABLE `foto` DISABLE KEYS */;
/*!40000 ALTER TABLE `foto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mantenimiento`
--

DROP TABLE IF EXISTS `mantenimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mantenimiento` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CODIGO` bigint(20) NOT NULL,
  `ESTADO` bigint(20) DEFAULT NULL,
  `FECHA` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `MECANICO_ID` bigint(20) NOT NULL,
  `VEHICULO_ID` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UK_gg6dvjp7qojlknswnurv2boum` (`CODIGO`),
  KEY `MANTENIMIENTO_FK1` (`MECANICO_ID`),
  KEY `MANENIMIENTO_FK2` (`VEHICULO_ID`),
  CONSTRAINT `MANENIMIENTO_FK2` FOREIGN KEY (`VEHICULO_ID`) REFERENCES `vehiculo` (`ID`),
  CONSTRAINT `MANTENIMIENTO_FK1` FOREIGN KEY (`MECANICO_ID`) REFERENCES `mecanico` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marca` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CODIGO` bigint(20) NOT NULL,
  `NOMBRE_MARCA` varchar(30) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UK_hrgn1f7un5rmstj1pei06ri1l` (`CODIGO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mecanico`
--

DROP TABLE IF EXISTS `mecanico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mecanico` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CELULAR` varchar(255) NOT NULL,
  `DIRECCION` varchar(200) NOT NULL,
  `DOCUMENTO` bigint(20) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `ESTADO` varchar(1) NOT NULL,
  `PRIMER_APELLIDO` varchar(30) NOT NULL,
  `PRIMER_NOMBRE` varchar(30) NOT NULL,
  `SEGUNDO_APELLIDO` varchar(30) DEFAULT NULL,
  `SEGUNDO_NOMBRE` varchar(30) DEFAULT NULL,
  `TIPO_DOCUMENTO` varchar(2) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `MECANICO_PK` (`DOCUMENTO`,`TIPO_DOCUMENTO`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `repuesto_mantenimiento`
--

DROP TABLE IF EXISTS `repuesto_mantenimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repuesto_mantenimiento` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CODIGO` bigint(20) NOT NULL,
  `TIEMPO_ESTIMADO` bigint(20) NOT NULL,
  `UNIDADES` bigint(20) NOT NULL,
  `MANTENIMIENTO_ID` bigint(20) DEFAULT NULL,
  `REPUESTO_ID` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UK_24s5sxe5v65fc7vcwd8g4hqls` (`CODIGO`),
  KEY `REPUESTO_MANENIMIENTO_FK2` (`MANTENIMIENTO_ID`),
  KEY `REPUESTO_MANENIMIENTO_FK1` (`REPUESTO_ID`),
  CONSTRAINT `REPUESTO_MANENIMIENTO_FK1` FOREIGN KEY (`REPUESTO_ID`) REFERENCES `respuesto` (`ID`),
  CONSTRAINT `REPUESTO_MANENIMIENTO_FK2` FOREIGN KEY (`MANTENIMIENTO_ID`) REFERENCES `mantenimiento` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repuesto_mantenimiento`
--

LOCK TABLES `repuesto_mantenimiento` WRITE;
/*!40000 ALTER TABLE `repuesto_mantenimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `repuesto_mantenimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respuesto`
--

DROP TABLE IF EXISTS `respuesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `respuesto` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CODIGO` bigint(20) NOT NULL,
  `NOMBRE_RESPUESTO` varchar(100) DEFAULT NULL,
  `PRECIO_UNITARIO` bigint(20) NOT NULL,
  `PROVEEDOR` varchar(300) DEFAULT NULL,
  `UNIDAD_INVENTARIO` bigint(20) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UK_trngompyd1jhsutcf28wlli86` (`CODIGO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuesto`
--

LOCK TABLES `respuesto` WRITE;
/*!40000 ALTER TABLE `respuesto` DISABLE KEYS */;
/*!40000 ALTER TABLE `respuesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio`
--

DROP TABLE IF EXISTS `servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicio` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CODIGO` bigint(20) NOT NULL,
  `NOMBRE_SERVICIO` varchar(100) NOT NULL,
  `Precio` bigint(20) NOT NULL,
  `MANTENIMIENTO_ID` bigint(20) DEFAULT NULL,
  `SERVICIO_ID` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UK_h0ej2cgm74fe0e00oclp8tc98` (`CODIGO`),
  UNIQUE KEY `UK_kdvw2sj5ruw2t0msgwhfqmlfb` (`NOMBRE_SERVICIO`),
  KEY `SERVICIO_MANENIMIENTO_FK2` (`MANTENIMIENTO_ID`),
  KEY `SERVICIO_MANENIMIENTO_FK1` (`SERVICIO_ID`),
  CONSTRAINT `SERVICIO_MANENIMIENTO_FK1` FOREIGN KEY (`SERVICIO_ID`) REFERENCES `servicio_mantenimiento` (`ID`),
  CONSTRAINT `SERVICIO_MANENIMIENTO_FK2` FOREIGN KEY (`MANTENIMIENTO_ID`) REFERENCES `mantenimiento` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio`
--

LOCK TABLES `servicio` WRITE;
/*!40000 ALTER TABLE `servicio` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio_mantenimiento`
--

DROP TABLE IF EXISTS `servicio_mantenimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicio_mantenimiento` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CODIGO` bigint(20) NOT NULL,
  `TIEMPO_ESTIMADO` bigint(20) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UK_nep7tnc9hiujy6x0nxihu5km4` (`CODIGO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio_mantenimiento`
--

LOCK TABLES `servicio_mantenimiento` WRITE;
/*!40000 ALTER TABLE `servicio_mantenimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicio_mantenimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehiculo`
--

DROP TABLE IF EXISTS `vehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehiculo` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `COLOR` varchar(30) NOT NULL,
  `PLACA` varchar(6) NOT NULL,
  `CLIENTE_ID` bigint(20) DEFAULT NULL,
  `MARCA_ID` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UK_c2gdf8wjdohihb337fahjqt65` (`COLOR`),
  UNIQUE KEY `UK_k70thnjt5b7cdk8ih686q3gi7` (`PLACA`),
  KEY `VEHICULO_FK2` (`CLIENTE_ID`),
  KEY `VEHICULO_FK1` (`MARCA_ID`),
  CONSTRAINT `VEHICULO_FK1` FOREIGN KEY (`MARCA_ID`) REFERENCES `marca` (`ID`),
  CONSTRAINT `VEHICULO_FK2` FOREIGN KEY (`CLIENTE_ID`) REFERENCES `cliente` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehiculo`
--

LOCK TABLES `vehiculo` WRITE;
/*!40000 ALTER TABLE `vehiculo` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehiculo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-06 20:28:49

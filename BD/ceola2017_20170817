CREATE DATABASE  IF NOT EXISTS `ceola2017` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ceola2017`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 192.168.0.100    Database: ceola2017
-- ------------------------------------------------------
-- Server version	5.6.36

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
-- Table structure for table `aplicacion`
--

DROP TABLE IF EXISTS `aplicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aplicacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aplicacion`
--

LOCK TABLES `aplicacion` WRITE;
/*!40000 ALTER TABLE `aplicacion` DISABLE KEYS */;
INSERT INTO `aplicacion` VALUES (1,'Facturación','http://192.168.0.100/facturacion',1),(3,'Control administrador','http://192.168.0.100/controladmin',1);
/*!40000 ALTER TABLE `aplicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cirugia`
--

DROP TABLE IF EXISTS `cirugia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cirugia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operado` int(11) NOT NULL DEFAULT '0' COMMENT '0 = No; 1=Si; 2= desiste',
  `seguimiento` int(11) DEFAULT '0',
  `detalle_seguimiento` mediumtext,
  `configuracion` text,
  `estado` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `actualizado_por` int(11) DEFAULT NULL,
  `presupuesto_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cirugia_presupuesto1_idx` (`presupuesto_id`),
  CONSTRAINT `fk_cirugia_presupuesto1` FOREIGN KEY (`presupuesto_id`) REFERENCES `presupuesto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cirugia`
--

LOCK TABLES `cirugia` WRITE;
/*!40000 ALTER TABLE `cirugia` DISABLE KEYS */;
/*!40000 ALTER TABLE `cirugia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipo_medico`
--

DROP TABLE IF EXISTS `equipo_medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipo_medico` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(45) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `primer_apellido` varchar(255) NOT NULL,
  `segundo_apellido` varchar(255) DEFAULT NULL,
  `tipo` varchar(20) DEFAULT NULL,
  `configuracion` text,
  `estado` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion` datetime NOT NULL,
  `creado_por` int(11) DEFAULT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `actualizado_por` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipo_medico`
--

LOCK TABLES `equipo_medico` WRITE;
/*!40000 ALTER TABLE `equipo_medico` DISABLE KEYS */;
INSERT INTO `equipo_medico` VALUES (1,'7452183-5','Isabel \r\n','Castro\r\n','Valdebenito\r\n','Anestesista',NULL,1,'2017-08-07 18:29:18',-1,NULL,NULL),(2,'7098441-5','Ulises\r\n','Bañados\r\n','Ralil\r\n','Arsenalero',NULL,1,'2017-08-10 19:46:09',-1,NULL,NULL),(3,'12345980-1','Medico','Pulento','Pulento','Cirujano',NULL,1,'2017-08-10 19:47:11',-1,NULL,NULL);
/*!40000 ALTER TABLE `equipo_medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipo_medico_has_cirugia`
--

DROP TABLE IF EXISTS `equipo_medico_has_cirugia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipo_medico_has_cirugia` (
  `equipo_medico_id` int(11) NOT NULL,
  `cirugia_id` int(11) NOT NULL,
  PRIMARY KEY (`equipo_medico_id`,`cirugia_id`),
  KEY `fk_equipo_medico_has_cirugia_cirugia1_idx` (`cirugia_id`),
  KEY `fk_equipo_medico_has_cirugia_equipo_medico1_idx` (`equipo_medico_id`),
  CONSTRAINT `fk_equipo_medico_has_cirugia_cirugia1` FOREIGN KEY (`cirugia_id`) REFERENCES `cirugia` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_equipo_medico_has_cirugia_equipo_medico1` FOREIGN KEY (`equipo_medico_id`) REFERENCES `equipo_medico` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipo_medico_has_cirugia`
--

LOCK TABLES `equipo_medico_has_cirugia` WRITE;
/*!40000 ALTER TABLE `equipo_medico_has_cirugia` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipo_medico_has_cirugia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `honorario`
--

DROP TABLE IF EXISTS `honorario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `honorario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `equipo_medico_has_cirugia_equipo_medico_id` int(11) NOT NULL,
  `equipo_medico_has_cirugia_cirugia_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`equipo_medico_has_cirugia_equipo_medico_id`,`equipo_medico_has_cirugia_cirugia_id`),
  KEY `fk_honorarios_equipo_medico_has_cirugia1_idx` (`equipo_medico_has_cirugia_equipo_medico_id`,`equipo_medico_has_cirugia_cirugia_id`),
  CONSTRAINT `fk_honorarios_equipo_medico_has_cirugia1` FOREIGN KEY (`equipo_medico_has_cirugia_equipo_medico_id`, `equipo_medico_has_cirugia_cirugia_id`) REFERENCES `equipo_medico_has_cirugia` (`equipo_medico_id`, `cirugia_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `honorario`
--

LOCK TABLES `honorario` WRITE;
/*!40000 ALTER TABLE `honorario` DISABLE KEYS */;
/*!40000 ALTER TABLE `honorario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insumo`
--

DROP TABLE IF EXISTS `insumo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `insumo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  `valor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insumo`
--

LOCK TABLES `insumo` WRITE;
/*!40000 ALTER TABLE `insumo` DISABLE KEYS */;
INSERT INTO `insumo` VALUES (1,'Jeringas',1000),(2,'Tijeras',2000),(3,'Gasa',3000),(4,'Alcohol',4000);
/*!40000 ALTER TABLE `insumo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_paciente`
--

DROP TABLE IF EXISTS `log_paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_paciente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accion` varchar(45) NOT NULL COMMENT 'U = update\nD = delete',
  `fecha` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_paciente`
--

LOCK TABLES `log_paciente` WRITE;
/*!40000 ALTER TABLE `log_paciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_presupuesto`
--

DROP TABLE IF EXISTS `log_presupuesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_presupuesto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accion` varchar(45) NOT NULL COMMENT 'U = update\nD = delete',
  `fecha` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_presupuesto`
--

LOCK TABLES `log_presupuesto` WRITE;
/*!40000 ALTER TABLE `log_presupuesto` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_presupuesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_presupuesto_base`
--

DROP TABLE IF EXISTS `log_presupuesto_base`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_presupuesto_base` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accion` varchar(45) NOT NULL COMMENT 'U = update\nD = delete',
  `fecha` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_presupuesto_base`
--

LOCK TABLES `log_presupuesto_base` WRITE;
/*!40000 ALTER TABLE `log_presupuesto_base` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_presupuesto_base` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_usuario`
--

DROP TABLE IF EXISTS `log_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accion` varchar(45) NOT NULL COMMENT 'U = update\nD = delete',
  `fecha` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_usuario`
--

LOCK TABLES `log_usuario` WRITE;
/*!40000 ALTER TABLE `log_usuario` DISABLE KEYS */;
INSERT INTO `log_usuario` VALUES (1,'U','2017-07-20 20:21:49',2),(2,'U','2017-07-20 20:29:49',1),(3,'U','2017-07-20 20:32:27',1),(4,'U','2017-07-20 20:34:46',1),(5,'U','2017-07-20 23:30:51',1),(6,'U','2017-07-20 23:32:47',1),(7,'U','2017-07-20 23:39:16',1);
/*!40000 ALTER TABLE `log_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicamento`
--

DROP TABLE IF EXISTS `medicamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medicamento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  `valor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicamento`
--

LOCK TABLES `medicamento` WRITE;
/*!40000 ALTER TABLE `medicamento` DISABLE KEYS */;
INSERT INTO `medicamento` VALUES (1,'Paracetamol',1000),(2,'Aspirina',2000),(3,'Vitamina C',3000);
/*!40000 ALTER TABLE `medicamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `icono` varchar(255) DEFAULT NULL,
  `metodo` varchar(255) DEFAULT NULL,
  `orden` int(11) DEFAULT NULL,
  `estado` int(11) NOT NULL DEFAULT '1',
  `aplicacion_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`aplicacion_id`),
  KEY `fk_menu_aplicacion1_idx` (`aplicacion_id`),
  CONSTRAINT `fk_menu_aplicacion1` FOREIGN KEY (`aplicacion_id`) REFERENCES `aplicacion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'Inicio',NULL,NULL,'home',1,1,1),(2,'Pacientes','Registro de pacientes','registroPaciente','paciente',2,1,1),(3,'Presupuestos','Presupuestos de cirugías','presupuesto','presupuesto',3,1,1),(4,'Cirugías','Programación de cirugías','cirugia','cirugia',4,1,1),(5,'Formas de pago','Gestión de medios de pago','pago','pago',5,1,1),(6,'Post cirugías','Gestión de programas médicos','postcirugia','postcirugia',6,1,1),(7,'Honorarios médicos','Gestión de pago de honorarios','honorario','honorario',7,1,1),(8,'Seguimientos','Atención post-presupuesto','seguimiento','seguimiento',8,1,1),(9,'Configuración','Mantenedor del sistema','admin','admin',9,1,1),(10,'Inicio','inicio','home','home',1,1,3),(11,'Usuarios','Gestión de Usuarios','users','users',2,1,3),(12,'Aplicaciones','Gestión de Aplicaciones','apps','apps',3,1,3);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pabellon`
--

DROP TABLE IF EXISTS `pabellon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pabellon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  `valor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pabellon`
--

LOCK TABLES `pabellon` WRITE;
/*!40000 ALTER TABLE `pabellon` DISABLE KEYS */;
INSERT INTO `pabellon` VALUES (1,'Pabellon 1',100000),(2,'Pabellon 2',200000),(3,'Pabellon 3',300000),(4,'Pabellon 4',400000);
/*!40000 ALTER TABLE `pabellon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paciente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(45) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `primer_apellido` varchar(255) NOT NULL,
  `segundo_apellido` varchar(255) DEFAULT NULL,
  `prevision_id` int(11) NOT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `movil` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` datetime DEFAULT NULL,
  `configuracion` text,
  `estado` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion` datetime DEFAULT NULL,
  `creado_por` int(11) NOT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `actualizado_por` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_paciente_usuario_idx` (`creado_por`),
  KEY `fk_paciente_prevision1_idx` (`prevision_id`),
  CONSTRAINT `fk_paciente_prevision1` FOREIGN KEY (`prevision_id`) REFERENCES `prevision` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_paciente_usuario` FOREIGN KEY (`creado_por`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
INSERT INTO `paciente` VALUES (8,'86940949','Jaqueline Ivette','Roman','Toro',2,'3222497068','996171614','jromant@mtt.gob.cl','Santa Marta #40, Playa Ancha, Valparaíso','1963-04-19 00:00:00',NULL,1,'2017-07-23 14:36:49',1,NULL,NULL),(9,'164848973','Jorge Ignacio','Garin','Roman',12,NULL,'981886925','jorge.garin.roman@gmail.com','Gutemberg #97, Depto K, Cerro Baron, Valparaíso','1987-08-01 00:00:00',NULL,1,'2017-07-23 16:26:10',1,NULL,NULL),(10,'179766078','Javiera Paz','Veas','Perez',1,NULL,'976663197','j.veas.91@gmail.com','Gutemberg #97, Depto K, Cerro Baron, Valparaíso','1991-05-18 00:00:00',NULL,1,'2017-07-23 17:39:54',1,NULL,NULL);
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `precio_equipo_medico`
--

DROP TABLE IF EXISTS `precio_equipo_medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `precio_equipo_medico` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `equipo_medico_id` int(11) NOT NULL,
  `prestacion_id` int(11) NOT NULL,
  `factor` varchar(255) DEFAULT NULL,
  `valor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_equipo_medico_has_prestacion_prestacion1_idx` (`prestacion_id`),
  KEY `fk_equipo_medico_has_prestacion_equipo_medico1_idx` (`equipo_medico_id`),
  CONSTRAINT `fk_equipo_medico_has_prestacion_equipo_medico1` FOREIGN KEY (`equipo_medico_id`) REFERENCES `equipo_medico` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_equipo_medico_has_prestacion_prestacion1` FOREIGN KEY (`prestacion_id`) REFERENCES `prestacion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `precio_equipo_medico`
--

LOCK TABLES `precio_equipo_medico` WRITE;
/*!40000 ALTER TABLE `precio_equipo_medico` DISABLE KEYS */;
/*!40000 ALTER TABLE `precio_equipo_medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestacion`
--

DROP TABLE IF EXISTS `prestacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prestacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `nombre_interno` varchar(255) NOT NULL,
  `codigo_prestacion` varchar(255) NOT NULL COMMENT 'Código de la prestación de la clínica',
  `arancel` int(11) NOT NULL,
  `configuracion` text,
  `estado` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `actualizado_por` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestacion`
--

LOCK TABLES `prestacion` WRITE;
/*!40000 ALTER TABLE `prestacion` DISABLE KEYS */;
INSERT INTO `prestacion` VALUES (2,'INTUBACION                                                  \r\n','INTUBACION                                                  \r\n','1202001\r\n',200916,NULL,1,'2017-08-07 18:24:10',-1,NULL,NULL);
/*!40000 ALTER TABLE `prestacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `presupuesto`
--

DROP TABLE IF EXISTS `presupuesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `presupuesto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prevision_id` int(11) DEFAULT NULL,
  `prestacion_id` int(11) DEFAULT NULL,
  `cirujano1` int(11) NOT NULL,
  `valor_cirujano1` int(11) NOT NULL,
  `cirujano2` int(11) DEFAULT NULL,
  `valor_cirujano2` int(11) DEFAULT NULL,
  `anestecista` int(11) DEFAULT NULL,
  `valor_anestecista` int(11) DEFAULT NULL,
  `arsenalero` int(11) DEFAULT NULL,
  `valor_arsenalero` int(11) DEFAULT NULL,
  `pabellon_id` int(11) NOT NULL,
  `insumo_id` int(11) DEFAULT NULL,
  `medicamento_id` int(11) DEFAULT NULL,
  `protesis_id` int(11) DEFAULT NULL,
  `protesis_valor` varchar(255) DEFAULT NULL,
  `copago_fonasa` varchar(255) DEFAULT NULL,
  `copago_clinica` varchar(255) DEFAULT NULL,
  `ojo` varchar(45) NOT NULL,
  `fecha_probable_cirugia` datetime NOT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `validez` int(11) DEFAULT NULL,
  `ruta_fisica` varchar(255) DEFAULT NULL,
  `nombre_respaldo` varchar(255) DEFAULT NULL,
  `configuracion` text,
  `estado` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion` datetime NOT NULL,
  `seguimiento` int(11) NOT NULL DEFAULT '0' COMMENT '0 = no realizado; 1= realizado',
  `creado_por` int(11) NOT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `actualizado_por` int(11) DEFAULT NULL,
  `paciente_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_presupuesto_paciente1_idx` (`paciente_id`),
  CONSTRAINT `fk_presupuesto_paciente1` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `presupuesto`
--

LOCK TABLES `presupuesto` WRITE;
/*!40000 ALTER TABLE `presupuesto` DISABLE KEYS */;
INSERT INTO `presupuesto` VALUES (1,NULL,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL,'por ojo','2017-07-25 20:54:01',NULL,30,NULL,NULL,NULL,1,'2017-07-25 20:54:01',0,-1,NULL,NULL,8),(2,NULL,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL,'por ojo','2017-06-01 00:00:00',NULL,30,NULL,NULL,NULL,1,'2017-06-29 00:00:00',0,-1,NULL,NULL,8),(3,NULL,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,NULL,'por ojo','2017-07-25 21:27:13',NULL,30,NULL,NULL,NULL,1,'2017-03-01 00:00:00',1,-1,NULL,NULL,8);
/*!40000 ALTER TABLE `presupuesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `presupuesto_base`
--

DROP TABLE IF EXISTS `presupuesto_base`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `presupuesto_base` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_interno` varchar(255) DEFAULT NULL,
  `nombre_interno` varchar(255) DEFAULT NULL,
  `prevision_id` int(11) NOT NULL,
  `prestacion_id` int(11) NOT NULL,
  `pabellon_id` int(11) NOT NULL,
  `insumo_id` varchar(255) DEFAULT NULL,
  `medicamento_id` varchar(255) DEFAULT NULL,
  `protesis_id` varchar(255) DEFAULT NULL,
  `copago_fonasa` int(11) DEFAULT NULL,
  `copago_clinica` int(11) DEFAULT NULL,
  `vigencia` int(11) DEFAULT NULL,
  `configuracion` text,
  `estado` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `actualizado_por` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `presupuesto_base`
--

LOCK TABLES `presupuesto_base` WRITE;
/*!40000 ALTER TABLE `presupuesto_base` DISABLE KEYS */;
INSERT INTO `presupuesto_base` VALUES (1,'HOLA','HOLA',1,2,2,'1,2','2,3','1',200000,200000,30,NULL,1,'2017-08-10 20:18:56',-1,NULL,NULL);
/*!40000 ALTER TABLE `presupuesto_base` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prevision`
--

DROP TABLE IF EXISTS `prevision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prevision` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `nombre_interno` varchar(255) NOT NULL,
  `convenio` int(11) NOT NULL DEFAULT '0',
  `configuracion` text,
  `estado` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `actualizado_por` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prevision`
--

LOCK TABLES `prevision` WRITE;
/*!40000 ALTER TABLE `prevision` DISABLE KEYS */;
INSERT INTO `prevision` VALUES (1,'Fonasa','fonasa',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(2,'Fonsada PAD','fonasa_pad',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(3,'Banmédica','banmedica',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(4,'Chuquicamata','chuquicamata',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(5,'Colmena Golden Cross','colmena',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(6,'Consalud','consalud',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(7,'Cruz Blanca','cruz_blanca',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(8,'Cruz del Norte','cruz_del_norte',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(9,'Optima','optima',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(10,'Fundación','fundacion',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(11,'Fusat','fusat',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(12,'Mas Vida','masvida',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(13,'Río Blanco','rio_blanco',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(14,'San Lorenzo','san_lorenzo',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(15,'Vida Tres','vida_tres',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(16,'Dipreca','dipreca',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(17,'Capredena','capredena',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL),(18,'Todas','todas',0,NULL,1,'2017-07-10 23:52:17',-1,NULL,NULL);
/*!40000 ALTER TABLE `prevision` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `protesis`
--

DROP TABLE IF EXISTS `protesis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `protesis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `valor` int(11) NOT NULL,
  `valor_dipreca` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `protesis`
--

LOCK TABLES `protesis` WRITE;
/*!40000 ALTER TABLE `protesis` DISABLE KEYS */;
INSERT INTO `protesis` VALUES (1,'MTA','MTA',150000,0),(2,'SN60WFXXX','Acrysof',150000,0),(3,'MN60MA','MN60MA',150000,0),(4,'MA60ACXXX','Acrysof 3 piezas',150000,0),(5,'SN6AT2','Acrysof Tórico',310000,190000),(6,'SN6AD1','Acrysof Restor',500000,380000),(7,'SND1T2','Acrysoft Restor Tórico',800000,680000),(8,'L12500','Fáquico Acrysof Cachet',800000,680000),(9,'TNFT00','Acrysof Panoptix',680000,560000),(10,'NO_CODIGO','Acrysof IQ Panoptix Tórico',950000,830000);
/*!40000 ALTER TABLE `protesis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `nombre_interno` varchar(255) NOT NULL,
  `configuracion` text,
  `estado` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `actualizado_por` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Usuario','usuario',NULL,1,'2017-07-10 23:51:56',-1,NULL,NULL),(2,'Administrador','admin',NULL,1,'2017-07-10 23:51:56',-1,NULL,NULL),(3,'Sin Permiso','sinpermiso',NULL,1,'2017-07-20 22:38:30',-1,NULL,NULL);
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol_asignado`
--

DROP TABLE IF EXISTS `rol_asignado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol_asignado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aplicacion_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  `actualizado_por` int(11) DEFAULT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_table1_rol1_idx` (`rol_id`),
  KEY `fk_table1_usuario1_idx` (`usuario_id`),
  KEY `fk_table1_aplicacion1_idx` (`aplicacion_id`),
  CONSTRAINT `fk_table1_aplicacion1` FOREIGN KEY (`aplicacion_id`) REFERENCES `aplicacion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_table1_rol1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_table1_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol_asignado`
--

LOCK TABLES `rol_asignado` WRITE;
/*!40000 ALTER TABLE `rol_asignado` DISABLE KEYS */;
INSERT INTO `rol_asignado` VALUES (1,1,1,2,'0000-00-00 00:00:00',0,NULL,NULL),(4,1,2,2,'0000-00-00 00:00:00',0,NULL,NULL);
/*!40000 ALTER TABLE `rol_asignado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seguimiento_presupuesto`
--

DROP TABLE IF EXISTS `seguimiento_presupuesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seguimiento_presupuesto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `detalle` mediumtext COMMENT 'json formado por fecha, detelle y quién escribió el detalle.',
  `configuracion` text,
  `estado` int(11) DEFAULT '1',
  `fecha_creacion` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `actualizado_por` int(11) DEFAULT NULL,
  `presupuesto_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_seguimiento_presupuesto_presupuesto1_idx` (`presupuesto_id`),
  CONSTRAINT `fk_seguimiento_presupuesto_presupuesto1` FOREIGN KEY (`presupuesto_id`) REFERENCES `presupuesto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguimiento_presupuesto`
--

LOCK TABLES `seguimiento_presupuesto` WRITE;
/*!40000 ALTER TABLE `seguimiento_presupuesto` DISABLE KEYS */;
INSERT INTO `seguimiento_presupuesto` VALUES (1,'asdasdas',NULL,NULL,'2017-07-25 21:49:45',1,NULL,NULL,2),(2,'asdasdas',NULL,NULL,'2017-07-25 21:49:51',1,NULL,NULL,2),(3,'asdasdas',NULL,NULL,'2017-07-25 21:49:51',1,NULL,NULL,2),(4,'asdasdas',NULL,NULL,'2017-07-25 21:49:52',1,NULL,NULL,2),(5,'asdasdas',NULL,NULL,'2017-07-25 21:49:52',1,NULL,NULL,2),(6,'asdasdas',NULL,NULL,'2017-07-25 21:49:52',1,NULL,NULL,2);
/*!40000 ALTER TABLE `seguimiento_presupuesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(255) NOT NULL,
  `clave_encriptada` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `primer_apellido` varchar(255) NOT NULL,
  `segundo_apellido` varchar(255) DEFAULT NULL,
  `configuracion` text,
  `estado` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion` datetime NOT NULL,
  `creado_por` int(11) NOT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `actualizado_por` int(11) DEFAULT NULL,
  `superadmin` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'164848973','8cb2237d0679ca88db6464eac60da96345513964','jorge.garin.roman@gmail.com','Jorge Ignacio','Garin','Roman',NULL,1,'2017-07-10 23:51:56',-1,NULL,NULL,1),(2,'178064894','8cb2237d0679ca88db6464eac60da96345513964','correo@gmail.com','Victor Ignacio','Monsalve','Astudillo',NULL,0,'2017-07-10 23:51:56',-1,'2017-07-20 20:34:46',1,0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'ceola2017'
--

--
-- Dumping routines for database 'ceola2017'
--
/*!50003 DROP PROCEDURE IF EXISTS `sp_actualizar_estadoApp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_actualizar_estadoApp`(IN _estado INT,IN _id INT)
BEGIN
        DECLARE _cant INT DEFAULT 0;

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM aplicacion WHERE id = _id;
        IF _cant > 0 THEN
            UPDATE aplicacion SET estado = _estado WHERE id = _id;

            SELECT 'exito';
            COMMIT;
        ELSE
            SELECT 'Aplicación no registrada' ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_actualizar_estadoMenu` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_actualizar_estadoMenu`(IN _estado INT,IN _id INT,IN _aplicacion_id INT)
BEGIN
        DECLARE _cant INT DEFAULT 0;

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM menu WHERE id = _id;
        IF _cant > 0 THEN
            UPDATE menu SET estado = _estado WHERE id = _id AND aplicacion_id = _aplicacion_id;

            SELECT 'exito';

            COMMIT;
        ELSE
            SELECT 'Menu no registrado' ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_actualizar_paciente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_actualizar_paciente`(IN _rut VARCHAR(255), IN _nombre VARCHAR(255), IN _primer_apellido VARCHAR(255), IN _segundo_apellido VARCHAR(255), IN _prevision INT, IN _telefono VARCHAR(255), IN _movil VARCHAR(255), IN _email VARCHAR(255), IN _direccion VARCHAR(255), IN _fecha_nac DATETIME, IN _estado INT, IN _actualizado_por VARCHAR(255))
BEGIN
        DECLARE _cant INT DEFAULT 0;

        DECLARE _actualizado_por_id INT;
        DECLARE _paciente_id INT;
        
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM paciente WHERE rut= _rut;
        IF _cant > 0 THEN
            SELECT id INTO _actualizado_por_id FROM usuario WHERE rut = _actualizado_por;
            SELECT id INTO _paciente_id FROM paciente WHERE rut = _rut;

            UPDATE paciente SET
            nombre = CASE WHEN (_nombre IS NOT NULL) THEN _nombre ELSE nombre END,
            primer_apellido = CASE WHEN (_primer_apellido IS NOT NULL) THEN _primer_apellido ELSE primer_apellido END,
            segundo_apellido = CASE WHEN (_segundo_apellido IS NOT NULL) THEN _segundo_apellido ELSE segundo_apellido END,
            prevision_id = CASE WHEN (_prevision IS NOT NULL) THEN _prevision ELSE prevision_id END,
            telefono = CASE WHEN (_telefono IS NOT NULL) THEN _telefono ELSE telefono END,
            movil = CASE WHEN (_movil IS NOT NULL) THEN _movil ELSE movil END,
            email = CASE WHEN (_email IS NOT NULL) THEN _email ELSE email END,
            fecha_nacimiento = CASE WHEN (_fecha_nac IS NOT NULL) THEN _fecha_nac ELSE fecha_nacimiento END,
            direccion = CASE WHEN (_direccion IS NOT NULL) THEN _direccion ELSE direccion END,
            estado = CASE WHEN (_estado IS NOT NULL) THEN _estado ELSE estado END,
            fecha_actualizacion = NOW(),
            actualizado_por = _actualizado_por_id
            WHERE id = _paciente_id;

            INSERT INTO log_paciente(accion, fecha, creado_por, paciente_id) VALUES
            ("U", NOW(), _actualizado_por_id, _paciente_id);

			SELECT 'exito';
            COMMIT;
        ELSE
            SELECT concat('Paciente [',_rut,'] no registrado') ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_actualizar_usuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_actualizar_usuario`(IN _rut VARCHAR(255), IN _clave VARCHAR(255), IN _email VARCHAR(255), IN _nombre VARCHAR(255), IN _primer_apellido VARCHAR(255), IN _segundo_apellido VARCHAR(255), IN _superadmin INT, IN _estado INT, IN _actualizado_por VARCHAR(255))
BEGIN
        DECLARE _cant INT DEFAULT 0;

        DECLARE _actualizado_por_id INT;
        DECLARE _usuario_id INT;

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM usuario WHERE rut= _rut;
        IF _cant > 0 THEN
            SELECT id INTO _actualizado_por_id FROM usuario WHERE rut = _actualizado_por;
            SELECT id INTO _usuario_id FROM usuario WHERE rut = _rut;

            UPDATE usuario SET
            clave_encriptada = CASE WHEN (_clave IS NOT NULL) THEN _clave ELSE clave_encriptada END,
            email = CASE WHEN (_email IS NOT NULL) THEN _email ELSE email END,
            nombre = CASE WHEN (_nombre IS NOT NULL) THEN _nombre ELSE nombre END,
            primer_apellido = CASE WHEN (_primer_apellido IS NOT NULL) THEN _primer_apellido ELSE primer_apellido END,
            segundo_apellido = CASE WHEN (_segundo_apellido IS NOT NULL) THEN _segundo_apellido ELSE segundo_apellido END,
            superadmin = CASE WHEN (_superadmin IS NOT NULL) THEN _superadmin ELSE superadmin END,
            estado = CASE WHEN (_estado IS NOT NULL) THEN _estado ELSE estado END,
            fecha_actualizacion = NOW(),
            actualizado_por = _actualizado_por_id
            WHERE id = _usuario_id;

            INSERT INTO log_usuario(accion, fecha, creado_por) VALUES
            ("U", NOW(), _actualizado_por_id);

            SELECT 'exito';

            COMMIT;
        ELSE
            SELECT concat('Usuario [',_rut,'] no registrado') ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_asignar_roles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_asignar_roles`(IN _rut VARCHAR(255), IN _app_id INT, IN _rol_id INT, IN _creado_por VARCHAR(255))
BEGIN
        DECLARE _cant INT DEFAULT 0;
        DECLARE _usuario_id INT;
        DECLARE _creado_por_id INT;
        DECLARE _rol_asignado_id INT;

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM usuario WHERE rut= _rut;
        IF _cant > 0 THEN
            SELECT id INTO _usuario_id FROM usuario WHERE rut = _rut;
            SELECT id INTO _creado_por_id FROM usuario WHERE rut = _creado_por;

            SET _cant = 0;
            SELECT COUNT(*) INTO _cant FROM rol_asignado WHERE usuario_id= _usuario_id;
            IF _cant > 0 THEN
                SELECT id INTO _rol_asignado_id
                FROM rol_asignado
                WHERE
                usuario_id = _usuario_id AND
                aplicacion_id = _app_id;

                UPDATE rol_asignado SET
                rol_id = _rol_id,
                fecha_actualizacion = NOW(),
                actualizado_por = _creado_por_id
                WHERE id = _rol_asignado_id;
            ELSE
                INSERT INTO rol_asignado (
                aplicacion_id,
                rol_id,
                usuario_id,
                fecha_creacion,
                creado_por
                ) VALUES(
                _app_id,
                _rol_id,
                _usuario_id,
                NOW(),
                _creado_por_id
                );

            END IF;
            SELECT 'exito';
            COMMIT;
        ELSE
            SELECT concat('Usuario [',_rut,'] no registrado') ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_eliminar_paciente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_eliminar_paciente`(_rut VARCHAR(255))
BEGIN
        DECLARE _cant INT DEFAULT 0;
        
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM paciente WHERE rut= _rut;
        IF _cant > 0 THEN
            DELETE FROM paciente WHERE rut = _rut;
			SELECT 'exito';
            COMMIT;
        ELSE
            SELECT concat('Paciente [',_rut,'] no registrado') ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_eliminar_usuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_eliminar_usuario`(_rut VARCHAR(255))
BEGIN
        DECLARE _cant INT DEFAULT 0;
        DECLARE _usuario_id INT;
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM usuario WHERE rut= _rut;
        IF _cant > 0 THEN
            SELECT id INTO _usuario_id FROM usuario WHERE rut = _rut;
            DELETE FROM rol_asignado WHERE usuario_id = _usuario_id;
            DELETE FROM usuario WHERE rut = _rut;
            SELECT 'exito';
            COMMIT;
        ELSE
            SELECT concat('Usuario [',_rut,'] no registrado') ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_ingresar_paciente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_ingresar_paciente`(IN _rut VARCHAR(255), IN _nombre VARCHAR(255), IN _primer_apellido VARCHAR(255), IN _segundo_apellido VARCHAR(255), IN _prevision INT, IN _telefono VARCHAR(255), IN _movil VARCHAR(255), IN _email VARCHAR(255), IN _direccion VARCHAR(255), IN _fecha_nac DATETIME, IN _creado_por VARCHAR(255))
BEGIN
        DECLARE _cant INT DEFAULT 0;

        DECLARE _creado_por_id INT;
        
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM paciente WHERE rut= _rut;
        IF _cant = 0 THEN
            SELECT id INTO _creado_por_id FROM usuario WHERE rut = _creado_por;

            INSERT into paciente(
            rut,
            nombre,
            primer_apellido,
            segundo_apellido,
            prevision_id,
            telefono,
            movil,
            email,
            direccion,
            fecha_nacimiento,
            fecha_creacion,
            creado_por)
            VALUES(
            _rut,
            _nombre,
            _primer_apellido,
            _segundo_apellido,
            _prevision,
            _telefono,
            _movil,
            _email,
            _direccion,
            _fecha_nac,
            NOW(),
            _creado_por_id);

			SELECT 'exito';
            COMMIT;
        ELSE
            SELECT concat('Paciente [',_rut,'] ya registrado') ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_ingresar_usuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_ingresar_usuario`(IN _rut VARCHAR(255), IN _clave VARCHAR(255), IN _email VARCHAR(255), IN _nombre VARCHAR(255), IN _primer_apellido VARCHAR(255), IN _segundo_apellido VARCHAR(255), IN _superadmin INT, IN _creado_por VARCHAR(255))
BEGIN
        DECLARE _cant INT DEFAULT 0;

        DECLARE _creado_por_id INT;

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM usuario WHERE rut= _rut;
        IF _cant = 0 THEN
            SELECT id INTO _creado_por_id FROM usuario WHERE rut = _creado_por;

            INSERT INTO usuario(
            rut,
            clave_encriptada,
            email,
            nombre,
            primer_apellido,
            segundo_apellido,
            superadmin,
            fecha_creacion,
            creado_por)
            VALUES(
            _rut,
            _clave,
            _email,
            _nombre,
            _primer_apellido,
            _segundo_apellido,
            _superadmin,
            NOW(),
            _creado_por_id);

            SELECT 'exito';
            COMMIT;
        ELSE
            SELECT concat('Usuario [',_rut,'] ya registrado') ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_obtener_app` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_obtener_app`()
BEGIN
        DECLARE _cant INT DEFAULT 0;

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM aplicacion;
        IF _cant > 0 THEN
            SELECT
            id,
            nombre,
            
            url,
            estado
            FROM aplicacion;
            COMMIT;
        ELSE
            SELECT 'No hay aplicaciones registradas' ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_obtener_menus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_obtener_menus`(IN _app_id INT)
BEGIN
        DECLARE _cant INT DEFAULT 0;

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM menu;
        IF _cant > 0 THEN
            SELECT
            id,
            nombre,
            descripcion,
            icono,
            metodo,
            estado
            FROM
            menu
            WHERE
            aplicacion_id = _app_id
            ORDER BY orden asc;
            COMMIT;
        ELSE
            SELECT 'No hay menus registrados para la aplicación' ERR_MSSG;
			ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_obtener_paciente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_obtener_paciente`(_rut VARCHAR(255))
BEGIN
        DECLARE _cant INT DEFAULT 0;
        
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM paciente WHERE rut= _rut;
        IF _cant > 0 THEN
            SELECT pac.rut,
                    pac.nombre as nombres,
                    pac.primer_apellido as paterno,
                    pac.segundo_apellido as materno,
                    DATE_FORMAT(pac.fecha_nacimiento,'%Y-%m-%d') as fec_nac,
                    DATE_FORMAT(pac.fecha_nacimiento,'%d-%m-%Y') as fec_nac_glosa,
                    pac.telefono as fono,
                    pac.movil,
                    pac.email as correo,
                    pac.direccion,
                    pac.estado,
                    pac.prevision_id,
					pre.nombre as prevision_glosa
            FROM paciente pac, prevision pre
            WHERE pac.rut = _rut and pac.prevision_id = pre.id;
        ELSE
            SELECT CONCAT('Paciente [',  _rut, '] no registrado')  ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_obtener_pacientes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_obtener_pacientes`()
BEGIN
        DECLARE _cant INT DEFAULT 0;
        
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM paciente;
        IF _cant > 0 THEN
            SELECT pac.rut,
                    pac.nombre as nombres,
                    pac.primer_apellido as paterno,
                    pac.segundo_apellido as materno,
                    DATE_FORMAT(pac.fecha_nacimiento,'%Y-%m-%d') as fec_nac,
                    DATE_FORMAT(pac.fecha_nacimiento,'%d-%m-%Y') as fec_nac_glosa,
                    pac.telefono as fono,
                    pac.movil,
                    pac.email as correo,
                    pac.direccion,
                    pac.estado,
                    pac.prevision_id,
					pre.nombre as prevision_glosa
            FROM paciente pac, prevision pre
            where pac.prevision_id = pre.id
            ORDER BY pac.nombre ASC;
            COMMIT;
        ELSE
            SELECT 'No hay pacientes registrados' ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_obtener_presupuestos_seguimientos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_obtener_presupuestos_seguimientos`()
BEGIN
	
    DECLARE _cant INT DEFAULT 0;
        
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;
	
    SELECT COUNT(*) INTO _cant FROM presupuesto;
    IF _cant > 0 THEN
	SELECT pres.id, DATE_FORMAT(pres.fecha_creacion,'%d-%m-%Y') fec_creacion, 
	DATE_FORMAT(date_add(pres.fecha_creacion, INTERVAL +pres.validez DAY),'%d-%m-%Y') vencimiento, 
	pac.rut, pac.nombre nombres, pac.primer_apellido paterno,pac.segundo_apellido materno,
	pac.telefono fono, pac.movil, pac.email correo,presta.codigo_prestacion, presta.nombre AS prestacion
	FROM presupuesto AS pres
	INNER JOIN paciente AS pac ON pres.paciente_id = pac.id
	INNER JOIN prestacion AS presta ON pres.prestacion_id = presta.id
	WHERE pres.estado = 1 
	AND pres.fecha_creacion < date_add(NOW(), INTERVAL -3 DAY)
	AND pres.seguimiento = 0
	AND date_add(pres.fecha_creacion, INTERVAL +pres.validez DAY) > now()
	ORDER BY date_add(pres.fecha_creacion, INTERVAL +pres.validez DAY) desc;
    COMMIT;
    ELSE
        SELECT 'No hay presupuestos registrados' ERR_MSSG;
        ROLLBACK;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_obtener_previsiones` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_obtener_previsiones`()
BEGIN
        DECLARE _cant INT DEFAULT 0;

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM prevision;
        IF _cant > 0 THEN
            SELECT
            id,
            nombre,
            convenio,
            estado
            FROM prevision ORDER BY nombre ASC;
            COMMIT;
        ELSE
            SELECT 'No hay previsiones registradas' ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_obtener_roles_usuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_obtener_roles_usuario`(IN _rut VARCHAR(255))
BEGIN
        DECLARE _cant INT DEFAULT 0;
        DECLARE _usuario_id INT;

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM usuario WHERE rut= _rut;
        IF _cant > 0 THEN
            SELECT id INTO _usuario_id FROM usuario WHERE rut = _rut;
            SET _cant = 0;
            SELECT COUNT(*) INTO _cant FROM rol_asignado WHERE usuario_id= _usuario_id;
            IF _cant > 0 THEN
                SELECT
                aplicacion_id,
                aplicacion.nombre nombre_aplicacion,
                
                usuario_id,
                rol_id,
                rol.nombre nombre_rol
                FROM usuario
                INNER JOIN rol_asignado ON usuario.id = rol_asignado.usuario_id
                INNER JOIN rol ON rol_asignado.rol_id = rol.id
                INNER JOIN aplicacion ON rol_asignado.aplicacion_id = aplicacion.id
                WHERE rol_asignado.usuario_id = _usuario_id;
                COMMIT;
            ELSE
                SELECT concat('Usuario [', _rut,'] sin roles asignados') ERR_MSSG;
                ROLLBACK;
            END IF;
        ELSE
            SELECT concat('Usuario [', _rut,'] no registrado') ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_obtener_usuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_obtener_usuario`(_rut VARCHAR(255))
BEGIN
        DECLARE _cant INT DEFAULT 0;

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM usuario WHERE rut= _rut;
        IF _cant > 0 THEN
            SELECT rut,
                    nombre,
                    primer_apellido,
                    segundo_apellido,
                    email,
                    superadmin,
                    estado
            FROM usuario
            WHERE rut = _rut;
            COMMIT;
        ELSE
            SELECT CONCAT('Usuario [',  _rut, '] no registrado')  ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_obtener_usuarios` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`ceola`@`localhost` PROCEDURE `sp_obtener_usuarios`()
BEGIN
        DECLARE _cant INT DEFAULT 0;
        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
            ROLLBACK;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
            ROLLBACK;
        END;
        START TRANSACTION;

        SELECT COUNT(*) INTO _cant FROM usuario;
        IF _cant > 0 THEN
            SELECT rut,
                    nombre,
                    primer_apellido,
                    segundo_apellido,
                    superadmin,
                    email,
                    estado
            FROM usuario
            ORDER BY nombre ASC;
            COMMIT;
        ELSE
            SELECT 'No hay usuarios registrados' ERR_MSSG;
            ROLLBACK;
        END IF;
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_obtiene_presupuesto_base` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_obtiene_presupuesto_base`(_previd int)
BEGIN

		DECLARE _cant INT DEFAULT 0;

        DECLARE EXIT HANDLER FOR SQLEXCEPTION
        BEGIN
            SHOW ERRORS LIMIT 1;
        END;
        DECLARE EXIT HANDLER FOR SQLWARNING
        BEGIN
            SHOW WARNINGS LIMIT 1;
        END;
        START TRANSACTION;
        
        SELECT COUNT(*) INTO _cant FROM presupuesto_base;
        IF _cant > 0 THEN
			SELECT prev.nombre prevision,presta.nombre prestacion,pres_base.* 
			FROM presupuesto_base pres_base, prevision prev, prestacion presta
			WHERE prev.id = pres_base.prevision_id AND pres_base.prevision_id = _previd
            AND presta.id = pres_base.prestacion_id
			AND pres_base.estado = 1;
        ELSE
            SELECT 'No hay presupuestos base' ERR_MSSG;
            ROLLBACK;
        END IF;
        

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-16  0:02:26

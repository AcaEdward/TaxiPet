-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 07, 2017 at 04:41 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `taxi_pet`
--

-- --------------------------------------------------------

--
-- Table structure for table `animal`
--

DROP TABLE IF EXISTS `animal`;
CREATE TABLE IF NOT EXISTS `animal` (
  `id_animal` int(11) NOT NULL AUTO_INCREMENT,
  `nome_animal` varchar(32) NOT NULL,
  `especie` varchar(16) NOT NULL,
  `raca` varchar(16) NOT NULL,
  `porte` varchar(8) DEFAULT NULL,
  `vacinas` varchar(128) DEFAULT NULL,
  `observacoes` varchar(512) DEFAULT NULL,
  `FK_dono` int(11) NOT NULL,
  PRIMARY KEY (`id_animal`),
  KEY `FK_dono` (`FK_dono`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(256) NOT NULL,
  `email_usuario` varchar(32) NOT NULL,
  `senha_usuario` varchar(32) NOT NULL,
  `cpf_usuario` varchar(14) NOT NULL,
  `rg_usuario` varchar(9) NOT NULL,
  `telefoneUsuario` varchar(14) DEFAULT NULL,
  `enderecoUsuario` varchar(256) DEFAULT NULL,
  `cnh_motorista` varchar(11) DEFAULT NULL,
  `is_admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email_usuario` (`email_usuario`),
  UNIQUE KEY `cpf_usuario` (`cpf_usuario`),
  UNIQUE KEY `rg_usuario` (`rg_usuario`),
  UNIQUE KEY `cnh_motorista` (`cnh_motorista`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome_usuario`, `email_usuario`, `senha_usuario`, `cpf_usuario`, `rg_usuario`, `telefoneUsuario`, `enderecoUsuario`, `cnh_motorista`, `is_admin`) VALUES
(1, 'José Elias Fernandes', 'zeeliaf@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', '036.110.421-96', '5312913', NULL, NULL, NULL, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

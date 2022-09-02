-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-09-2022 a las 09:05:57
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `facturar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_factura`
--

CREATE TABLE IF NOT EXISTS `detalle_factura` (
  `id_detalle` int(11) NOT NULL AUTO_INCREMENT,
  `cod_producto` int(15) NOT NULL,
  `numero_fac` int(11) DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `peso` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `forma_pago` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `total` int(11) NOT NULL,
  `estado` int(100) NOT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `cod_producto` (`cod_producto`),
  KEY `numero_fac` (`numero_fac`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=14 ;

--
-- Volcado de datos para la tabla `detalle_factura`
--

INSERT INTO `detalle_factura` (`id_detalle`, `cod_producto`, `numero_fac`, `cantidad`, `peso`, `forma_pago`, `total`, `estado`) VALUES
(1, 1, NULL, 3, '50', 'EFECTIVO', 0, 0),
(2, 2, NULL, 3, '50', 'Tarjeta', 0, 0),
(3, 2, NULL, 5, '500', 'Efectivo', 0, 0),
(4, 1, NULL, 8, '600', 'Cheque', 0, 0),
(5, 2, NULL, 8, '500', 'sdsdsd', 0, 0),
(6, 1, NULL, 50, '5000', 'Efectivo', 0, 0),
(7, 1, NULL, 7, '300', 'Efectivo', 0, 0),
(8, 2, NULL, 2, '2', '2', 2, 0),
(9, 1, NULL, 2, '2', '2', 1000, 0),
(10, 2, NULL, 10, '2', '2', 8000, 0),
(11, 1, NULL, 80, '100', 'Efectivo', 40000, 0),
(12, 2, NULL, 2, '3', 'EF', 1600, 0),
(13, 2, NULL, 2, '500', 'CH', 1600, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE IF NOT EXISTS `factura` (
  `numero_fac` int(11) NOT NULL,
  `ruc_fac` int(11) NOT NULL,
  `serie` int(11) NOT NULL,
  `fecha_factura` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `igv` int(11) NOT NULL,
  PRIMARY KEY (`numero_fac`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE IF NOT EXISTS `producto` (
  `cod_producto` int(15) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `precio_unidad` int(15) NOT NULL,
  PRIMARY KEY (`cod_producto`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`cod_producto`, `descripcion`, `precio_unidad`) VALUES
(1, 'TORNILLO', 500),
(2, 'TUERCA', 800),
(3, 'ALICATE', 4500),
(4, 'ALAMBRE', 6000);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_factura`
--
ALTER TABLE `detalle_factura`
  ADD CONSTRAINT `fk_factura` FOREIGN KEY (`numero_fac`) REFERENCES `factura` (`numero_fac`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_producto` FOREIGN KEY (`cod_producto`) REFERENCES `producto` (`cod_producto`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

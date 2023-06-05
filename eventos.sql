-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-06-2023 a las 17:11:10
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `quintiyaku`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

DROP TABLE IF EXISTS `eventos`;
CREATE TABLE IF NOT EXISTS `eventos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb3_unicode_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Larreta oficializó el uso de las Taser en la Ciudad', 'El jefe de gobierno porteño presentó un cargamento de 60 pistolas que estarán en funcionamiento a partir de junio.', 'El jefe de gobierno porteño y precandidato a presidente por Juntos por el Cambio, Horacio Rodríguez Larreta, oficializó hoy el uso de pistolas Taser en la ciudad de Buenos Aires. En el marco de la presentación, Larreta apunto contra el Gobierno.\r\n\r\n«El Gobierno que encabeza Cristina Kirchner y Alberto Fernández fracasó. No pueden hablar de nada», planteó luego de anunciar que el cargamento de 60 armas se utilizará para controlar contextos masivos.\r\n\r\nDesde el Centro de Monitoreo Urbano situado en Chacarita, explicó: «La Ciudad por fin tiene las primeras 60 pistolas Taser que entre junio y julio van a entrar en acción, después de tanto tiempo donde hubo hechos lamentables que podríamos haber evitado, el Gobierno Nacional se dignó a habilitarnos las importaciones».'),
(2, 'Larreta oficializó el uso de las Taser en la Ciudad', 'El jefe de gobierno porteño presentó un cargamento de 60 pistolas que estarán en funcionamiento a partir de junio.', 'El jefe de gobierno porteño y precandidato a presidente por Juntos por el Cambio, Horacio Rodríguez Larreta, oficializó hoy el uso de pistolas Taser en la ciudad de Buenos Aires. En el marco de la presentación, Larreta apunto contra el Gobierno.\r\n\r\n«El Gobierno que encabeza Cristina Kirchner y Alberto Fernández fracasó. No pueden hablar de nada», planteó luego de anunciar que el cargamento de 60 armas se utilizará para controlar contextos masivos.\r\n\r\nDesde el Centro de Monitoreo Urbano situado en Chacarita, explicó: «La Ciudad por fin tiene las primeras 60 pistolas Taser que entre junio y julio van a entrar en acción, después de tanto tiempo donde hubo hechos lamentables que podríamos haber evitado, el Gobierno Nacional se dignó a habilitarnos las importaciones».'),
(5, 'prueba11', 'prueba1', 'prueba1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

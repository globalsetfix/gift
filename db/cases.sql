-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Ноя 04 2020 г., 12:06
-- Версия сервера: 5.5.42-cll
-- Версия PHP: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `idposter_new`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cases`
--

CREATE TABLE IF NOT EXISTS `cases` (
  `id` tinyint(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `value` varchar(50) NOT NULL,
  `act` tinyint(1) NOT NULL,
  `rat` float(4,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=47 ;

--
-- Дамп данных таблицы `cases`
--

INSERT INTO `cases` (`id`, `name`, `value`, `act`, `rat`) VALUES
(1, 'iPhone 4/4S', 'iphone-4-4s', 1, 1.60),
(2, 'iPhone 5/5S', 'iphone-5-5s', 1, 1.50),
(3, 'iPhone 5C', 'iphone-5c', 1, 1.40),
(4, 'iPhone 6/6S', 'iphone-6-6s', 1, 1.30),
(5, 'iPad 2/3/4', 'iPad-2-3-4', 1, 1.70),
(6, 'Samsung Ace 3', 'samsung-ace-3', 1, 2.79),
(7, 'Samsung Galaxy Note 2', 'samsung-note-2', 1, 2.78),
(9, 'Samsung Galaxy A3 (2015)', 'samsung-a3-2015', 1, 2.70),
(10, 'Samsung Galaxy A5', 'samsung-a5', 1, 2.67),
(11, 'Samsung Galaxy S3 Mini', 'samsung-s3-mini', 0, 2.65),
(12, 'Samsung Galaxy S3', 'samsung-s3', 1, 2.60),
(13, 'Samsung Galaxy S4 Mini', 'samsung-s4-mini', 1, 2.55),
(14, 'Samsung Galaxy S4', 'samsung-s4', 1, 2.50),
(15, 'Samsung Galaxy S5 Mini', 'samsung-s5-mini', 1, 2.40),
(16, 'Samsung Galaxy S5', 'samsung-s5', 1, 2.30),
(17, 'Samsung Galaxy S6', 'samsung-s6', 1, 2.20),
(18, 'Samsung Galaxy S7', 'samsung-s7', 1, 2.10),
(19, 'iPhone 6 Plus', 'iphone-6-plus', 1, 1.26),
(20, 'iPhone 7', 'iphone-7', 1, 1.24),
(21, 'iPhone 7 Plus', 'iphone-7-plus', 1, 1.22),
(22, 'iPad Mini', 'iPad-mini', 1, 1.74),
(23, 'iPad Air', 'iPad-air', 1, 1.72),
(24, 'iPhone 8', 'iphone-8', 1, 1.20),
(25, 'iPhone 8 Plus', 'iphone-8-plus', 1, 1.00),
(26, 'Samsung Galaxy S8', 'samsung-s8', 1, 2.00),
(27, 'iPhone X', 'iphone-x', 1, 0.99),
(28, 'Samsung Galaxy Note 9', 'samsung-note-9', 1, 1.95),
(29, 'Samsung Galaxy S9+', 'samsung-s9-plus', 1, 1.97),
(30, 'Samsung Galaxy S9', 'samsung-s9', 1, 1.98),
(31, 'Samsung Galaxy S8+', 'samsung-s8-plus', 1, 1.99),
(32, 'Samsung Galaxy A8+', 'a8-2018-plus', 1, 2.65),
(33, 'Samsung Galaxy A8', 'a8-2018', 1, 2.66),
(34, 'Samsung Galaxy Note 8', 'samsung-note-8', 1, 1.96),
(35, 'iPhone XS', 'iphone-xs', 1, 0.98),
(36, 'iPhone XS Max', 'iphone-xs-max', 1, 0.97),
(37, 'iPhone XR', 'iphone-xr', 1, 0.96),
(38, 'Samsung Galaxy S10e', 'samsung-s10-e', 1, 1.92),
(39, 'Samsung Galaxy S10 Plus', 'samsung-s10-plus', 1, 1.93),
(40, 'Samsung Galaxy S10', 'samsung-s10', 1, 1.94),
(45, 'Samsung Galaxy A3 (2016)', 'samsung-a3-2015', 1, 2.69),
(41, 'iPhone XI', 'iphone-xi', 1, 0.95),
(42, 'iPhone XI Pro', 'iphone-xi-pro', 1, 0.94),
(43, 'iPhone XI Pro Max', 'iphone-xi-pro-max', 1, 0.93),
(44, 'iPad Air 2', 'iPad-air', 1, 1.73),
(46, 'Samsung Galaxy A3 (2017)', 'samsung-a3-2015', 1, 2.68);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

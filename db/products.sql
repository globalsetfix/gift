-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Ноя 04 2020 г., 12:27
-- Версия сервера: 5.5.42-cll
-- Версия PHP: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `idposter_m`
--

-- --------------------------------------------------------

--
-- Структура таблицы `__products`
--

CREATE TABLE IF NOT EXISTS `__products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(24) CHARACTER SET latin1 NOT NULL,
  `hash` varchar(24) CHARACTER SET latin1 NOT NULL,
  `description` text CHARACTER SET latin1 NOT NULL,
  `custom_title` varchar(250) DEFAULT NULL,
  `custom_description` varchar(250) DEFAULT NULL,
  `custom_h1` varchar(120) DEFAULT NULL,
  `custom_text` text,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_desc` varchar(255) DEFAULT NULL,
  `shipping` float(4,2) NOT NULL,
  `visib` tinyint(1) NOT NULL,
  `rating` float(3,1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=26 ;

--
-- Дамп данных таблицы `__products`
--

INSERT INTO `__products` (`id`, `title`, `hash`, `description`, `custom_title`, `custom_description`, `custom_h1`, `custom_text`, `meta_title`, `meta_desc`, `shipping`, `visib`, `rating`) VALUES
(1, 'Poster', 'poster', '', NULL, NULL, NULL, NULL, '[name] poster #[id] title', '[name] poster #[id] description', 12.99, 1, 1.0),
(2, 'Calendar Poster', 'calendar-poster', '', NULL, NULL, NULL, NULL, '[name] calendar #[id] title', '[name] calendar #[id] description', 0.00, 1, 4.0),
(3, 'Canvas', 'canvas', '', NULL, NULL, NULL, NULL, '[name] canvas #[id] title', '[name] canvas #[id] description', 0.00, 1, 2.0),
(4, 'Men''s T-Shirt', 'mens-tshirt', '', NULL, NULL, NULL, NULL, '[name] t-shirt #[id] title', '[name] t-shirt #[id] description', 0.00, 1, 6.0),
(5, 'Tank Top', 'tank-top', '', NULL, NULL, NULL, NULL, '[name] tank-top #[id] title', '[name] tank-top #[id] description', 0.00, 1, 8.0),
(6, 'Puzzle', 'puzzle', '', NULL, NULL, NULL, NULL, '[name] puzzle #[id] title', '[name] puzzle #[id] description', 0.00, 1, 9.0),
(7, 'Mouse Pad', 'mousepad', '', NULL, NULL, NULL, NULL, '[name] mouse pad #[id] title', '[name] mouse pad #[id] description', 0.00, 1, 10.0),
(8, 'Pillow', 'pillow', '', NULL, NULL, NULL, NULL, '[name] pillow #[id] title', '[name] pillow #[id] description', 0.00, 1, 12.0),
(9, 'Mug', 'mug', '', NULL, NULL, NULL, NULL, '[name] mug #[id] title', '[name] mug #[id] description', 0.00, 1, 9.2),
(10, 'iPhone Case', 'iphone-case', '', NULL, NULL, NULL, NULL, '[name] iphone case #[id] title', '[name] iphone case #[id] description', 0.00, 1, 16.0),
(11, 'Fridge Magnet', 'magnet', '', NULL, NULL, NULL, NULL, '[name] magnet #[id] title', '[name] magnet #[id] description', 0.00, 1, 11.0),
(12, 'Image', 'image', '', NULL, NULL, NULL, NULL, '[name] image #[id] title', '[name] image #[id] description', 0.00, 1, 20.0),
(13, 'Photo', 'photo', '', NULL, NULL, NULL, NULL, '[name] photo #[id] title', '[name] photo #[id] description', 0.00, 1, 3.0),
(14, '12-Page Flip Calendar', '12-page-flip-calendar', '', NULL, NULL, NULL, NULL, '[name] 12-page flip calendar #[id] title', '[name] 12-page flip calendar #[id] description', 0.00, 1, 5.0),
(15, 'Long Sleeve', 'long-sleeve', '', NULL, NULL, NULL, NULL, '[name] long sleeve #[id] title', '[name] long sleeve #[id] description', 0.00, 1, 7.5),
(16, 'iPad Case', 'ipad-case', '', NULL, NULL, NULL, NULL, '[name] ipad #[id] title', '[name] ipad #[id] description', 0.00, 1, 16.1),
(17, 'Clock', 'clock', '', NULL, NULL, NULL, NULL, '[name] clock #[id] title', '[name] clock #[id] description', 2.99, 0, 0.0),
(18, 'Plate', 'plate', '', NULL, NULL, NULL, NULL, '[name] plate #[id] title', '[name] plate #[id] description', 0.00, 0, 0.0),
(19, 'Apron', 'apron', '', NULL, NULL, NULL, NULL, '[name] apron #[id] title', '[name] apron #[id] title', 0.00, 0, 0.0),
(20, 'Baseball Caps', 'baseball-caps', '', NULL, NULL, NULL, NULL, '[name] baseball caps #[id] title', '[name] baseball caps #[id] title', 0.00, 0, 0.0),
(21, 'Kid''s T-Shirt', 'kids-tshirt', '', NULL, NULL, NULL, NULL, '[name] kid''s t-shirt #[id] title', '[name] kid''s t-shirt #[id] title', 0.00, 1, 7.6),
(22, 'Women''s T-Shirt', 'womens-tshirt', '', NULL, NULL, NULL, NULL, '[name] t-shirt #[id] title', '[name] t-shirt #[id] title', 12.99, 1, 7.0),
(23, 'Samsung Case', 'samsung-case', '', NULL, NULL, NULL, '<p class="bc">Personalized photo phone cases for Samsung Galaxy S3, S4, S5, S6, S7, S8, S9, S10</p>\n<p class="pc">Nowadays it''s impossible to find someone who does not own a mobile phone. And if they own a Samsung Galaxy S3 or S$, they would like to stand out from the crowd. For gifting someone like this can you think of any other item, other than a personalized phone case that would have your image on it. It''s not only unique but also remind the person you are gifting that how special they are.</p>', '[name] baseball caps #[id] title', '[name] baseball caps #[id] title', 10.99, 1, 18.0),
(24, 'Notebook with sequins', 'notebook-with-sequins', '', NULL, NULL, NULL, NULL, '[name] case #[id] title', '[name] case #[id] title', 7.99, 0, 0.0),
(25, 'Face Mask', 'face-mask', 'Face Mask', NULL, NULL, NULL, NULL, 'Face Mask', 'Face Mask', 6.99, 1, 19.0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

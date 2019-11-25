-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2019 at 01:31 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `korisnici`
--

-- --------------------------------------------------------

--
-- Table structure for table `kupljeniproizvodi`
--

CREATE TABLE `kupljeniproizvodi` (
  `IDB` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `idpr` varchar(3000) NOT NULL,
  `nazivPr` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_nopad_ci NOT NULL,
  `opisPr` varchar(500) CHARACTER SET utf32 COLLATE utf32_croatian_ci NOT NULL,
  `kolicina` int(11) NOT NULL,
  `cena` longtext NOT NULL,
  `ukupnaCena` longtext NOT NULL,
  `datumKupovine` longtext NOT NULL,
  `img` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kupljeniproizvodi`
--

INSERT INTO `kupljeniproizvodi` (`IDB`, `id`, `idpr`, `nazivPr`, `opisPr`, `kolicina`, `cena`, `ukupnaCena`, `datumKupovine`, `img`) VALUES
(1, 8, 'mi4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 2, '4.999', '9.998', '27.10.2019. 16:37:54', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(2, 8, 'tab1', 'HUAWEI Mediapad T3', '10\" (Siva) 9.6\", Četiri jezgra, 2GB, WiFi', 1, '17.999', '17.999', '27.10.2019. 16:37:54', 'https://www.gigatron.rs/img/products/large/image597097bf7983e.png'),
(3, 8, 'm7', 'BENQ LED', 'Business Monitor BL2480T 23.8, IPS, 1920 x 1080 Full HD, 5ms', 2, '22.999', '45.998', '27.10.2019. 16:40:10', 'https://www.gigatron.rs/img/products/large/image5c827954ee514.png'),
(4, 8, 'm8', 'IIYAMA monitor', 'GOLD PHOENIX G-MASTER GB2888UHSU-B1 28\", TN, 3840 x 2160 4K UHD, 1ms', 1, '59.999', '59.999', '27.10.2019. 16:40:10', 'https://www.gigatron.rs/img/products/large/image5cf4d0f9c5676.png'),
(5, 8, 'mi3', 'HP bežični miš', 'Z3700 (Plavi) - V0L81AA Optički, 1200dpi, 2.4GHz', 4, '1.499', '5.996', '27.10.2019. 17:55:52', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png'),
(6, 8, 'mi4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 2, '4.999', '9.998', '27.10.2019. 17:55:52', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(7, 13, 'mi4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 1, '4.999', '4.999', '27.10.2019. 18:47:51', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(8, 13, 'k4', 'EKEN H9R', '- 2\", 320 x 240, 3840 x 2160 (4K)', 2, '9.999', '19.998', '27.10.2019. 18:47:51', 'https://www.gigatron.rs/img/products/large/image59a02e87b1763.png'),
(9, 13, 'tab2', 'SAMSUNG Galaxy Tab A (2019)', '(Crni) - SM-T510NZKDSEE 10.1\", Osam jezgara, 2GB, WiFi', 1, '25.999', '25.999', '27.10.2019. 18:47:51', 'https://www.gigatron.rs/img/products/large/image5cbd8bbe46f76.png'),
(10, 4, 'kl4', 'VIVAX Klima uređaj', 'ACP-24DTIFM70GEEI R410A', 1, '37.999', '37.999', '27.10.2019. 18:49:10', 'https://www.gigatron.rs/img/products/large/image5b0bf4f63c6f9.png'),
(11, 8, 'kl4', 'VIVAX Klima uređaj', 'ACP-24DTIFM70GEEI R410A', 1, '37.999', '37.999', '27.10.2019. 18:54:52', 'https://www.gigatron.rs/img/products/large/image5b0bf4f63c6f9.png'),
(12, 1, 'mi3', 'HP bežični miš', 'Z3700 (Plavi) - V0L81AA Optički, 1200dpi, 2.4GHz', 1, '1.499', '1.499', '27.10.2019. 19:53:28', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png'),
(13, 1, 'mi5', 'DELL MS116 žični optički miš', 'Optički, 1000dpi, Simetričan (pogodan za obe ruke), Crna', 1, '1.299', '1.299', '27.10.2019. 19:58:56', 'https://www.gigatron.rs/img/products/large/image5b98c3f4318c6.png'),
(14, 2, 'mi4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 1, '4.999', '4,999', '10/27/2019 10:10:30 PM', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(15, 2, 'm4', 'HP monitor', '22m 3WL44AA 21.5\", IPS, 1920 x 1080 Full HD, 5ms', 5, '13.999', '69,995', '10/27/2019 10:12:04 PM', 'https://www.gigatron.rs/img/products/large/image5d9330ba3e18c.png'),
(16, 2, 'm8', 'IIYAMA monitor', 'GOLD PHOENIX G-MASTER GB2888UHSU-B1 28\", TN, 3840 x 2160 4K UHD, 1ms', 2, '59.999', '119,998', '10/27/2019 10:12:04 PM', 'https://www.gigatron.rs/img/products/large/image5cf4d0f9c5676.png'),
(17, 2, 'm7', 'BENQ LED', 'Business Monitor BL2480T 23.8, IPS, 1920 x 1080 Full HD, 5ms', 3, '22.999', '68,997', '10/27/2019 10:12:04 PM', 'https://www.gigatron.rs/img/products/large/image5c827954ee514.png'),
(18, 2, 'm3', 'LG LED 29\"', 'UltraWide 29UM69G-B IPS FullHD 29\", IPS, 2560 x 1080 UWHD, 5ms', 9, '27.999', '251,991', '10/27/2019 10:12:04 PM', 'https://www.gigatron.rs/img/products/large/image595b99119545b.png'),
(19, 8, 'mi3', 'HP bežični miš', 'Z3700 (Plavi) - V0L81AA Optički, 1200dpi, 2.4GHz', 1, '1.499', '1.499', '27.10.2019. 22:51:14', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png'),
(20, 14, 'kl4', 'VIVAX Klima uređaj', 'ACP-24DTIFM70GEEI R410A', 1, '37.999', '37.999', '27.10.2019. 22:53:12', 'https://www.gigatron.rs/img/products/large/image5b0bf4f63c6f9.png'),
(21, 14, 'tab3', 'MLS Alu Plus 4G (Srebrna)', '33.ML.540.163 10.1\", Osam jezgara, 2GB, 4G/WiFi', 2, '15.999', '31.998', '27.10.2019. 22:53:12', 'https://www.gigatron.rs/img/products/large/image5adab3c7df5ff.png'),
(22, 14, 'mi4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 4, '4.999', '19.996', '27.10.2019. 22:53:12', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(23, 8, 'mi4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 2, '4.999', '9.998', '28.10.2019. 08:20:37', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(24, 8, 't6', 'NOKIA 2.1 DS', '(Plava/Zlatna) - 11E2MX01B03 5.5\", 1 GB, 8.0 Mpix, 8 GB', 1, '11.999', '11.999', '28.10.2019. 08:20:37', 'https://www.gigatron.rs/img/products/large/image5cb97b0125062.png'),
(25, 8, 'kl2', 'BOSCH Klima uređaj', 'Climate 5000 RAC Inverter 12000 BTU, R410A, A  /A  (hlađenje/grejanje)', 1, '49.999', '49,999', '10/28/2019 10:34:26 AM', 'https://www.gigatron.rs/img/products/large/image5aba15e9daa07.png'),
(57, 14, 'miš4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 1, '1.599', '1.599', '12.11.2019. 15:32:29', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(58, 14, 'miš4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 1, '1.599', '1.599', '12.11.2019. 15:34:09', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(59, 14, 'miš3', 'HP bežični miš', 'Z3700 (Plavi) - V0L81AA Optički, 1200dpi, 2.4GHz', 1, '3.999', '3.999', '12.11.2019. 15:39:22', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png'),
(60, 14, 'miš6', 'ESHARK gejmerski miš', 'ESL-M3 Aikuchi (Crni) Optički, 7200dpi, Dizajniran za desnu ruku, Crna', 1, '3.999', '3.999', '12.11.2019. 15:39:22', 'https://www.gigatron.rs/img/products/large/image5d6396c890aa9.png'),
(61, 14, 'tab2', 'SAMSUNG Galaxy Tab A (2019)', '(Crni) - SM-T510NZKDSEE 10.1\", Osam jezgara, 2GB, WiFi', 2, '25.999', '51.998', '12.11.2019. 15:39:22', 'https://www.gigatron.rs/img/products/large/image5cbd8bbe46f76.png'),
(62, 14, 'tab1', 'HUAWEI Mediapad T3', '10\" (Siva) 9.6\", Četiri jezgra, 2GB, WiFi', 2, '17.999', '35.998', '12.11.2019. 15:39:22', 'https://www.gigatron.rs/img/products/large/image597097bf7983e.png'),
(63, 14, 'miš5', 'DELL MS116 žični optički miš', 'Optički, 1000dpi, Simetričan (pogodan za obe ruke), Crna', 2, '7.999', '15.998', '12.11.2019. 22:09:29', 'https://www.gigatron.rs/img/products/large/image5b98c3f4318c6.png'),
(64, 14, 'miš4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 4, '1.599', '6.396', '12.11.2019. 22:09:29', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(65, 14, 'kl4', 'VIVAX Klima uređaj', 'ACP-24DTIFM70GEEI R410A', 1, '37.999', '37.999', '12.11.2019. 22:10:16', 'https://www.gigatron.rs/img/products/large/image5b0bf4f63c6f9.png'),
(66, 14, 'k3', 'DJI Osmo Pocket', 'CMOS, 3840 x 2160 (4K), 12 MP', 1, '32.999', '32.999', '12.11.2019. 22:11:41', 'https://www.gigatron.rs/img/products/large/image5c12794973af1.png'),
(67, 14, 'miš4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 1, '1.599', '1.599', '12.11.2019. 22:15:30', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(68, 14, 'k4', 'EKEN H9R', '- 2\", 320 x 240, 3840 x 2160 (4K)', 10, '9.999', '99.990', '12.11.2019. 22:17:39', 'https://www.gigatron.rs/img/products/large/image59a02e87b1763.png'),
(69, 14, 'kl7', 'LG Klima uređaj', 'Artcool Inverter A09RK 9000 BTU, R410A, A++/A+ (hlađenje/grejanje)', 3, '115.999', '347.997', '12.11.2019. 22:24:18', 'https://www.gigatron.rs/img/products/large/image5afc2645ce08b.png'),
(70, 14, 'kl2', 'BOSCH Klima uređaj', 'Climate 5000 RAC Inverter 12000 BTU, R410A, A++/A+ (hlađenje/grejanje)', 12, '49.999', '599.988', '12.11.2019. 22:25:18', 'https://www.gigatron.rs/img/products/large/image5aba15e9daa07.png'),
(71, 14, 'miš4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 16, '1.599', '25.584', '12.11.2019. 22:25:18', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(72, 14, 'm6', 'PHILIPS LED', '', 1, '36.999', '36.999', '12.11.2019. 22:27:57', 'https://www.gigatron.rs/img/products/large/image5b928c9a734f3.png'),
(73, 14, 'miš5', 'DELL MS116 žični optički miš', '', 1, '7.999', '7.999', '13.11.2019. 10:55:31', 'https://www.gigatron.rs/img/products/large/image5b98c3f4318c6.png'),
(74, 14, 'miš4', 'ASUS gejmerski miš', '', 1, '1.599', '1.599', '13.11.2019. 10:55:31', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(75, 14, 'tab2', 'SAMSUNG Galaxy Tab A (2019)', '', 1, '25.999', '25.999', '13.11.2019. 10:55:31', 'https://www.gigatron.rs/img/products/large/image5cbd8bbe46f76.png'),
(76, 14, 'tab5', 'SAMSUNG Galaxy Tab S5e (Zlatni)', '', 1, '55.999', '55.999', '13.11.2019. 10:55:31', 'https://www.gigatron.rs/img/products/large/image5d10aeca11b77.png'),
(77, 14, 'miš1', 'REDRAGON gejmerski miš', '', 1, '4.499', '4.499', '13.11.2019. 11:49:03', 'https://www.gigatron.rs/img/products/large/image5bffccd06e619.png'),
(78, 14, 'tab7', 'MEDIACOM SmartPad iyo 10', '', 1, '12.999', '12.999', '13.11.2019. 11:50:20', 'https://www.gigatron.rs/img/products/large/image5c7cf2ec98aa1.png'),
(79, 14, 'tab4', 'APPLE iPad 6', '', 1, '65.999', '65.999', '13.11.2019. 11:50:20', 'https://www.gigatron.rs/img/products/large/image5c5ae37571ffc.png'),
(80, 14, 't5', 'XIAOMI Redmi Go', '', 1, '8.999', '8.999', '13.11.2019. 11:50:20', 'https://www.gigatron.rs/img/products/large/image5c94ca0e3fc9f.png'),
(81, 14, 'tab7', 'MEDIACOM SmartPad iyo 10', '', 1, '12.999', '12.999', '13.11.2019. 11:51:42', 'https://www.gigatron.rs/img/products/large/image5c7cf2ec98aa1.png'),
(82, 14, 'miš5', 'DELL MS116 žični optički miš', '', 1, '7.999', '7.999', '13.11.2019. 11:51:58', 'https://www.gigatron.rs/img/products/large/image5b98c3f4318c6.png'),
(83, 14, 'miš4', 'ASUS gejmerski miš', '', 1, '1.599', '1.599', '13.11.2019. 11:51:58', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(84, 14, 'miš6', 'ESHARK gejmerski miš', '', 2, '3.999', '7.998', '13.11.2019. 11:51:58', 'https://www.gigatron.rs/img/products/large/image5d6396c890aa9.png'),
(85, 14, 'miš7', 'HAVIT gejmerski miš', '', 1, '1.699', '1.699', '13.11.2019. 11:51:58', 'https://www.gigatron.rs/img/products/large/image58eb72674fcb8.png'),
(86, 14, 'kl5', 'GREE Klima uređaj Viola', '', 1, '59.999', '59.999', '13.11.2019. 15:45:51', 'https://www.gigatron.rs/img/products/large/image5922d9917eed1.png'),
(87, 14, 'kl7', 'LG Klima uređaj', '', 1, '115.999', '115.999', '13.11.2019. 15:45:51', 'https://www.gigatron.rs/img/products/large/image5afc2645ce08b.png'),
(88, 14, 'kl3', 'GREE Klima uređaj Amber', '', 1, '99.999', '99.999', '13.11.2019. 15:45:51', 'https://www.gigatron.rs/img/products/large/image5aaa3de0e3841.png'),
(89, 14, 'tab7', 'MEDIACOM SmartPad iyo 10', '', 1, '12.999', '12.999', '13.11.2019. 15:45:51', 'https://www.gigatron.rs/img/products/large/image5c7cf2ec98aa1.png'),
(90, 14, 'tab7', 'MEDIACOM SmartPad iyo 10', '', 2, '12.999', '25.998', '13.11.2019. 15:47:48', 'https://www.gigatron.rs/img/products/large/image5c7cf2ec98aa1.png'),
(91, 14, 'tab4', 'APPLE iPad 6', '', 1, '65.999', '65.999', '13.11.2019. 15:47:48', 'https://www.gigatron.rs/img/products/large/image5c5ae37571ffc.png'),
(92, 14, 'kl7', 'LG Klima uređaj', '', 1, '115.999', '115.999', '13.11.2019. 15:47:48', 'https://www.gigatron.rs/img/products/large/image5afc2645ce08b.png'),
(93, 14, 'tab4', 'APPLE iPad 6', '', 1, '65.999', '65.999', '13.11.2019. 15:58:10', 'https://www.gigatron.rs/img/products/large/image5c5ae37571ffc.png'),
(94, 14, 'miš5', 'DELL MS116 žični optički miš', '', 1, '7.999', '7.999', '13.11.2019. 16:00:19', 'https://www.gigatron.rs/img/products/large/image5b98c3f4318c6.png'),
(95, 14, 'miš4', 'ASUS gejmerski miš', '', 10, '1.599', '15.990', '13.11.2019. 16:00:19', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(96, 14, 'miš3', 'HP bežični miš', '', 1, '3.999', '3.999', '13.11.2019. 16:00:19', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png'),
(97, 14, 'miš6', 'ESHARK gejmerski miš', '', 1, '3.999', '3.999', '13.11.2019. 16:00:19', 'https://www.gigatron.rs/img/products/large/image5d6396c890aa9.png'),
(98, 14, 'miš2', 'RAZER gejmerski miš', '', 1, '9.999', '9.999', '13.11.2019. 16:00:19', 'https://www.gigatron.rs/img/products/large/image584bfa63d44b1.png'),
(99, 14, 'tab7', 'MEDIACOM SmartPad iyo 10', '', 1, '12.999', '12.999', '13.11.2019. 17:27:18', 'https://www.gigatron.rs/img/products/large/image5c7cf2ec98aa1.png'),
(100, 14, 'miš2', 'RAZER gejmerski miš', '', 1, '9.999', '9.999', '14.11.2019. 18:00:51', 'https://www.gigatron.rs/img/products/large/image584bfa63d44b1.png'),
(101, 14, 'miš3', 'HP bežični miš', '', 1, '3.999', '3.999', '14.11.2019. 18:00:51', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png'),
(102, 14, 'miš4', 'ASUS gejmerski miš', '', 2, '1.599', '3.198', '14.11.2019. 18:00:51', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(103, 14, 'miš5', 'DELL MS116 žični optički miš', '', 1, '7.999', '7.999', '14.11.2019. 18:00:51', 'https://www.gigatron.rs/img/products/large/image5b98c3f4318c6.png'),
(104, 14, 'miš4', 'ASUS gejmerski miš', '', 1, '1.599', '1.599', '14.11.2019. 21:22:25', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(105, 14, 'miš3', 'HP bežični miš', '', 2, '3.999', '7.998', '14.11.2019. 21:22:25', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png'),
(106, 14, 'miš4', 'ASUS gejmerski miš', '', 1, '1.599', '1.599', '14.11.2019. 21:46:57', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(107, 14, 'miš3', 'HP bežični miš', '', 1, '3.999', '3.999', '14.11.2019. 21:46:57', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png'),
(108, 14, 'miš2', 'RAZER gejmerski miš', '', 1, '9.999', '9.999', '14.11.2019. 21:46:57', 'https://www.gigatron.rs/img/products/large/image584bfa63d44b1.png'),
(109, 14, 'miš2', 'RAZER gejmerski miš', '', 2, '9.999', '19.998', '14.11.2019. 22:16:50', 'https://www.gigatron.rs/img/products/large/image584bfa63d44b1.png'),
(110, 14, 'miš6', 'ESHARK gejmerski miš', '', 2, '3.999', '7.998', '14.11.2019. 22:16:50', 'https://www.gigatron.rs/img/products/large/image5d6396c890aa9.png'),
(111, 14, 'miš3', 'HP bežični miš', '', 1, '3.999', '3.999', '14.11.2019. 22:19:12', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png'),
(112, 14, 'miš2', 'RAZER gejmerski miš', '', 1, '9.999', '9.999', '14.11.2019. 22:19:12', 'https://www.gigatron.rs/img/products/large/image584bfa63d44b1.png'),
(113, 14, 'miš4', 'ASUS gejmerski miš', '', 1, '1.599', '1.599', '14.11.2019. 22:19:12', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(114, 14, 'miš3', 'HP bežični miš', '', 1, '3.999', '3.999', '14.11.2019. 22:19:40', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png'),
(115, 14, 'miš4', 'ASUS gejmerski miš', '', 4, '1.599', '6.396', '14.11.2019. 22:19:40', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(116, 14, 'tab7', 'MEDIACOM SmartPad iyo 10', '', 1, '12.999', '12.999', '15.11.2019. 10:54:55', 'https://www.gigatron.rs/img/products/large/image5c7cf2ec98aa1.png'),
(117, 14, 'tab4', 'APPLE iPad 6', '', 1, '65.999', '65.999', '15.11.2019. 10:54:55', 'https://www.gigatron.rs/img/products/large/image5c5ae37571ffc.png'),
(118, 14, 'm1', 'AOC LED', '', 1, '24.999', '24.999', '15.11.2019. 10:54:55', 'https://www.gigatron.rs/img/products/large/image5c248e45d9d14.png'),
(119, 14, 'tab7', 'MEDIACOM SmartPad iyo 10', '', 1, '12.999', '12.999', '15.11.2019. 11:11:16', 'https://www.gigatron.rs/img/products/large/image5c7cf2ec98aa1.png'),
(120, 14, 'tab4', 'APPLE iPad 6', '', 1, '65.999', '65.999', '15.11.2019. 11:11:16', 'https://www.gigatron.rs/img/products/large/image5c5ae37571ffc.png'),
(121, 14, 't5', 'XIAOMI Redmi Go', '', 1, '8.999', '8.999', '15.11.2019. 11:11:16', 'https://www.gigatron.rs/img/products/large/image5c94ca0e3fc9f.png'),
(122, 14, 'miš4', 'ASUS gejmerski miš', '', 1, '1.599', '1.599', '15.11.2019. 11:12:29', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(123, 14, 'miš3', 'HP bežični miš', '', 1, '3.999', '3.999', '15.11.2019. 11:12:29', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png'),
(124, 14, 'tab4', 'APPLE iPad 6', '', 1, '65.999', '65.999', '15.11.2019. 11:12:44', 'https://www.gigatron.rs/img/products/large/image5c5ae37571ffc.png'),
(125, 14, 'tab7', 'MEDIACOM SmartPad iyo 10', '', 1, '12.999', '12.999', '15.11.2019. 11:12:44', 'https://www.gigatron.rs/img/products/large/image5c7cf2ec98aa1.png'),
(126, 14, 'miš5', 'DELL MS116 žični optički miš', '', 3, '7.999', '23.997', '15.11.2019. 19:06:32', 'https://www.gigatron.rs/img/products/large/image5b98c3f4318c6.png'),
(127, 14, 'miš4', 'ASUS gejmerski miš', '', 5, '1.599', '7.995', '15.11.2019. 19:06:32', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png'),
(128, 14, 'tab2', 'SAMSUNG Galaxy Tab A (2019)', '', 1, '25.999', '25.999', '15.11.2019. 23:49:11', 'https://www.gigatron.rs/img/products/large/image5cbd8bbe46f76.png'),
(129, 14, 'kl7', 'LG Klima uređaj', '', 1, '115.999', '115.999', '19.11.2019. 11:28:04', 'https://www.gigatron.rs/img/products/large/image5afc2645ce08b.png');

-- --------------------------------------------------------

--
-- Table structure for table `proizvodi`
--

CREATE TABLE `proizvodi` (
  `idpr` varchar(3000) NOT NULL,
  `naziv` longtext CHARACTER SET utf16 COLLATE utf16_croatian_ci NOT NULL,
  `opis` longtext CHARACTER SET utf16 COLLATE utf16_croatian_ci NOT NULL,
  `tip` mediumtext CHARACTER SET utf16 COLLATE utf16_croatian_ci NOT NULL,
  `cena` mediumtext NOT NULL,
  `img` longtext NOT NULL,
  `preporuka` tinyint(1) NOT NULL,
  `zaproizvode` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proizvodi`
--

INSERT INTO `proizvodi` (`idpr`, `naziv`, `opis`, `tip`, `cena`, `img`, `preporuka`, `zaproizvode`) VALUES
('k1', 'GOPRO HERO7', 'Silver + GOPRO Travel Kit + SANDISK Extreme microSDHC 32GB 10 MP', 'kamera', '35.999', 'https://www.gigatron.rs/img/products/large/image5d4d37ff79ea2.png', 0, 1),
('k2', 'GOPRO HERO7', 'Black (+ MicroSD 128GB) - CHDHX-701-RW - CMOS, 12 MP', 'kamera', '49.999', 'https://www.gigatron.rs/img/products/large/image5c3c83991fe42.png', 0, 0),
('k3', 'DJI Osmo Pocket', 'CMOS, 3840 x 2160 (4K), 12 MP', 'kamera', '32.999', 'https://www.gigatron.rs/img/products/large/image5c12794973af1.png', 0, 0),
('k4', 'EKEN H9R', '- 2\", 320 x 240, 3840 x 2160 (4K)', 'kamera', '9.999', 'https://www.gigatron.rs/img/products/large/image59a02e87b1763.png', 0, 0),
('k5', 'GARMIN GPS VIRB', 'Ultra 30 1.75\", 3840 x 2160 (4K), 12 MP', 'kamera', '56.999', 'https://www.gigatron.rs/img/products/large/image59a0301f809c7.png', 0, 0),
('k6', 'YI Lite', 'vodootporno kućište, CMOS, 2\", 3840 x 2160 (4K), 16 MP', 'kamera', '17.999', 'https://www.gigatron.rs/img/products/large/image5c054de8819b0.png', 0, 1),
('k7', 'EKEN A8', '(Crna) 2\", 176 x 220, 1920 x 1080 (Full HD), 5 MP', 'kamera', '3.999', 'https://www.gigatron.rs/img/products/large/image580b3ddaec8c2.png', 1, 0),
('kl1', 'GREE Klima uređaj Lomo', 'Best Buy Wi Fi Inverter 12000 BTU, R410A, A++/A+/A+++(hlađenje/grejanje (srednja zona)/grejanje (srednja zona)/grejanje (topla zona)', 'klima', '52.999', 'https://www.gigatron.rs/img/products/large/image5aaa3671929e4.png', 0, 0),
('kl2', 'BOSCH Klima uređaj', 'Climate 5000 RAC Inverter 12000 BTU, R410A, A++/A+ (hlađenje/grejanje)', 'klima', '49.999', 'https://www.gigatron.rs/img/products/large/image5aba15e9daa07.png', 0, 0),
('kl3', 'GREE Klima uređaj Amber', 'Premium Inverter WiFi - GWH12YD-S6DBA2A 12000 BTU, Eko gas R32, A+++/A+++ (hlađenje/grejanje)', 'klima', '99.999', 'https://www.gigatron.rs/img/products/large/image5aaa3de0e3841.png', 0, 1),
('kl4', 'VIVAX Klima uređaj', 'ACP-24DTIFM70GEEI R410A', 'klima', '37.999', 'https://www.gigatron.rs/img/products/large/image5b0bf4f63c6f9.png', 0, 0),
('kl5', 'GREE Klima uređaj Viola', 'Profi Inverter WiFi GWH12RB-K3DNA3G 12000 BTU, R410A, A++/A+/A++ (hlađenje/grejanje (srednja zona)/grejanje (topla zona)', 'klima', '59.999', 'https://www.gigatron.rs/img/products/large/image5922d9917eed1.png', 0, 0),
('kl6', 'VOX klima uređaj', 'IVA1-12IR 12000 BTU, Eko gas R32, A++/A+ (hlađenje/grejanje)', 'klima', '34.999', 'https://www.gigatron.rs/img/products/large/image5ce5410c4de51.png', 0, 1),
('kl7', 'LG Klima uređaj', 'Artcool Inverter A09RK 9000 BTU, R410A, A++/A+ (hlađenje/grejanje)', 'klima', '115.999', 'https://www.gigatron.rs/img/products/large/image5afc2645ce08b.png', 0, 0),
('m1', 'AOC LED', 'C24G1 24 \", VA, 1920 x 1080 Full HD, 1ms', 'monitor', '24.999', 'https://www.gigatron.rs/img/products/large/image5c248e45d9d14.png', 1, 0),
('m2', 'SAMSUNG QLED', 'C49HG90 - LC49HG90DMU 48.9\", VA, 3840 x 1080 Dual HD, 1ms', 'monitor', '109.999', 'https://www.gigatron.rs/img/products/large/image59c23c177655c.png', 0, 0),
('m3', 'LG LED 29\"', 'UltraWide 29UM69G-B IPS FullHD 29\", IPS, 2560 x 1080 UWHD, 5ms', 'monitor', '27.999', 'https://www.gigatron.rs/img/products/large/image595b99119545b.png', 0, 1),
('m4', 'HP monitor', '22m 3WL44AA 21.5\", IPS, 1920 x 1080 Full HD, 5ms', 'monitor', '13.999', 'https://www.gigatron.rs/img/products/large/image5d9330ba3e18c.png', 0, 0),
('m5', 'AOC LED', 'C24G1 24 \", VA, 1920 x 1080 Full HD, 1ms', 'monitor', '49.999', 'https://www.gigatron.rs/img/products/large/image5ad5f58fc791e.png', 0, 0),
('m6', 'PHILIPS LED', '276E8FJAB/00 27\", IPS, 2560 x 1440 WQHD, 4ms', 'monitor', '36.999', 'https://www.gigatron.rs/img/products/large/image5b928c9a734f3.png', 0, 0),
('m7', 'BENQ LED', 'Business Monitor BL2480T 23.8, IPS, 1920 x 1080 Full HD,5ms', 'monitor', '22.999', 'https://www.gigatron.rs/img/products/large/image5c827954ee514.png', 0, 1),
('miš1', 'REDRAGON gejmerski miš', 'Emperor M909-RGB - B07F532TCN Optički, 12400dpi, Ergonomski dizajniran, Crna', 'miš', '4.499', 'https://www.gigatron.rs/img/products/large/image5bffccd06e619.png', 0, 0),
('miš2', 'RAZER gejmerski miš', 'DeathAdder Elite - RZ01-02010100-R3G1 Optički, 16000dpi, Dizajniran za desnu ruku, Crna', 'miš', '9.999', 'https://www.gigatron.rs/img/products/large/image584bfa63d44b1.png', 0, 0),
('miš3', 'HP bežični miš', 'Z3700 (Plavi) - V0L81AA Optički, 1200dpi, 2.4GHz', 'miš', '3.999', 'https://www.gigatron.rs/img/products/large/image583ecee3df609.png', 0, 1),
('miš4', 'ASUS gejmerski miš', 'TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva', 'miš', '1.599', 'https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png', 0, 0),
('miš5', 'DELL MS116 žični optički miš', 'Optički, 1000dpi, Simetričan (pogodan za obe ruke), Crna', 'miš', '7.999', 'https://www.gigatron.rs/img/products/large/image5b98c3f4318c6.png', 0, 0),
('miš6', 'ESHARK gejmerski miš', 'ESL-M3 Aikuchi (Crni) Optički, 7200dpi, Dizajniran za desnu ruku, Crna', 'miš', '3.999', 'https://www.gigatron.rs/img/products/large/image5d6396c890aa9.png', 0, 0),
('miš7', 'HAVIT gejmerski miš', 'HV-MS790 (Crna/crvena) Optički, 2400dpi, Crna/Crvena', 'miš', '1.699', 'https://www.gigatron.rs/img/products/large/image58eb72674fcb8.png', 0, 1),
('t1', 'XIAOMI Redmi Note 7', '64/4GB (Plava - Neptun Blue) - 6.3\", 4 GB, 48.0 Mpix + 5.0 Mpix, 64 GB', 'telefon', '25.999', 'https://www.gigatron.rs/img/products/large/image5ca5f6a2b346d.png', 0, 0),
('t2', 'HUAWEI Y5 (2019)', '16/2GB DS (Crni - Modern Black) - 51093SGT, 5.71\", 2 GB, 13.0 Mpix, 16 GB', 'telefon', '13.999', 'https://www.gigatron.rs/img/products/large/image5d10c39f8cad3.png', 0, 1),
('t3', 'SAMSUNG GALAXY A50', '128/4GB DS (Crna) - SM-A505FZKSSEE, 6.4\", 4 GB, 25.0 Mpix + 8.0 Mpix + 5.0 Mpix, 128 GB', 'telefon', '37.999', 'https://www.gigatron.rs/img/products/large/image5ca33e71676b9.png', 0, 0),
('t4', 'XIAOMI Mi 9 Lite', '6/64 GB Grey (sivi), 6.39\", 6 GB, 48 Mpix + 8 Mpix + 2 Mpix, 64 GB', 'telefon', '39.999', 'https://www.gigatron.rs/img/products/large/image5d8c8fe1c8067.png', 0, 0),
('t5', 'XIAOMI Redmi Go', '8/1GB (Crna), 5.0\", 1 GB, 8.0 Mpix, 8 GB + POKLON KnowRoaming SIM kartica', 'telefon', '8.999', 'https://www.gigatron.rs/img/products/large/image5c94ca0e3fc9f.png', 1, 0),
('t6', 'NOKIA 2.1 DS', '(Plava/Zlatna) - 11E2MX01B03 5.5\", 1 GB, 8.0 Mpix, 8 GB', 'telefon', '11.999', 'https://www.gigatron.rs/img/products/large/image5cb97b0125062.png', 0, 1),
('t7', 'XIAOMI Pocophone F1', '6/128GB DS (Plava) 6.18\", 6 GB, 12.0 Mpix + 5.0 Mpix, 128 GB', 'telefon', '45.999', 'https://www.gigatron.rs/img/products/large/image5cfa359e1d6f0.png', 0, 0),
('tab1', 'HUAWEI Mediapad T3', '10\" (Siva) 9.6\", Četiri jezgra, 2GB, WiFi', 'tablet', '17.999', 'https://www.gigatron.rs/img/products/large/image597097bf7983e.png', 0, 0),
('tab2', 'SAMSUNG Galaxy Tab A (2019)', '(Crni) - SM-T510NZKDSEE 10.1\", Osam jezgara, 2GB, WiFi', 'tablet', '25.999', 'https://www.gigatron.rs/img/products/large/image5cbd8bbe46f76.png', 0, 0),
('tab3', 'MLS Alu Plus 4G (Srebrna)', '33.ML.540.163 10.1\", Osam jezgara, 2GB, 4G/WiFi', 'tablet', '15.999', 'https://www.gigatron.rs/img/products/large/image5adab3c7df5ff.png', 0, 1),
('tab4', 'APPLE iPad 6', '9.7\" Wifi + Cellular 32GB (Srebrni) - MR6P2HC/A 9.7\", Četiri jezgra, 2GB, 4G/WiFi', 'tablet', '65.999', 'https://www.gigatron.rs/img/products/large/image5c5ae37571ffc.png', 1, 0),
('tab5', 'SAMSUNG Galaxy Tab S5e (Zlatni)', 'SM-T720NZDASEE 10.5\", Osam jezgara, 4GB, WiFi', 'tablet', '55.999', 'https://www.gigatron.rs/img/products/large/image5d10aeca11b77.png', 0, 0),
('tab6', 'APPLE iPad Air', '10.5\" WiFi 64GB (Srebrni - Silver) - MUUK2HC/A 10.5\", Šest jezgara, 3GB, WiFi', 'tablet', '75.999', 'https://www.gigatron.rs/img/products/large/image5d8e25a0f1d08.png', 0, 1),
('tab7', 'MEDIACOM SmartPad iyo 10', 'M-SP1BY 10.1\", Četiri jezgra, 2GB, 3G/WiFi', 'tablet', '12.999', 'https://www.gigatron.rs/img/products/large/image5c7cf2ec98aa1.png', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `table1`
--

CREATE TABLE `table1` (
  `id` int(11) NOT NULL,
  `ime` varchar(30) NOT NULL,
  `prezime` varchar(35) NOT NULL,
  `datumRodjenja` date NOT NULL,
  `email` varchar(50) NOT NULL,
  `sifra` varchar(16) NOT NULL,
  `telefon` varchar(15) NOT NULL,
  `novac` text DEFAULT NULL,
  `proizvodi` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `table1`
--

INSERT INTO `table1` (`id`, `ime`, `prezime`, `datumRodjenja`, `email`, `sifra`, `telefon`, `novac`, `proizvodi`) VALUES
(1, 'Marko', 'Vesic', '2019-10-06', 'markovesic@gmail.com', 'tastatur', '065-78-44-236', '699', ''),
(2, 'Borivoje', 'Stojiljkovic', '1997-09-01', 'stojiljkovicborivoje97@gmail.com', 'tastatura', '062-78-44-236', '7341', ''),
(3, 'Jeca', 'Jecic', '2019-10-06', 'jeca@gmail.com', 'jecajecajeca', '879-88-22-56', '', ''),
(4, 'Maca', 'Mau', '2019-10-05', 'maca@gmail.com', 'asd', '789-88-66-58', '781', ''),
(5, 'Kaca', 'Venci', '2019-10-18', 'vencikaca@gmail.com', 'venicjaca', '789-45-61-99', '', ''),
(6, 'Nada', 'Macura', '2019-10-10', 'macuranada@gmail.com', 'asdasdasd', '111-11-11-11', '', ''),
(7, 'Lejdi', 'Dragana', '2019-10-13', 'lejdidragana@gmail.com', 'lejdidragana', '870-95-99-853', '', ''),
(8, 'Zivana', 'Stojiljkovic', '2019-04-24', 'zivana@gmail.com', 'zivana1', '065-88-77-99', '438', ''),
(9, 'Ana', 'Kembel', '2019-10-06', 'kembel@gmail.com', 'kembel', '061-11-11-111', '2432', ''),
(10, 'Jelena', 'Stanisic', '2019-10-17', 'aleksavolijelenu@gmail.com', 'aleksajeca', '061-22-11-333', '500', ''),
(11, 'BORKO', 'asd', '2019-10-12', 's@gmail.com', '87', '555-99-88-77', '2120', ''),
(12, 'Pera', 'Peric', '2019-10-06', 'pera@gmail.com', 'pera', '000-00-00-00', '507', ''),
(13, 'mika', 'laza', '2019-10-06', 'mika@gmail.com', 'mika', '000-00-00-00', '1067', ''),
(14, 'Proba', 'Opet', '2019-10-05', 'proba@gmail.com', 'opet', '000-00-00-21', '9341722', ''),
(30, 'Marko', 'Marko', '2019-11-03', 'marko1vesic@gmail.com', 'a', '777-77-77-77', NULL, ''),
(31, 's', 's', '2019-11-03', 's2@gmail.com', 'asd', '777-77-77-77', NULL, ''),
(32, 's', 's', '2019-11-23', 'adsf@gmail.com', 'asd', '777-88-99-55', NULL, ''),
(33, 'Damir', 'Mozar', '2009-04-23', 'dmozar@gmail.com', '111111', '065-82-27-701', NULL, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kupljeniproizvodi`
--
ALTER TABLE `kupljeniproizvodi`
  ADD PRIMARY KEY (`IDB`);

--
-- Indexes for table `proizvodi`
--
ALTER TABLE `proizvodi`
  ADD PRIMARY KEY (`idpr`);

--
-- Indexes for table `table1`
--
ALTER TABLE `table1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kupljeniproizvodi`
--
ALTER TABLE `kupljeniproizvodi`
  MODIFY `IDB` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;

--
-- AUTO_INCREMENT for table `table1`
--
ALTER TABLE `table1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

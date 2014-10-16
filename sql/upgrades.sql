USE `itss_srv`;

CREATE TABLE IF NOT EXISTS `upgrades` (
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `monthly` decimal(10,2) DEFAULT NULL,
  `annually` decimal(10,2) DEFAULT NULL,
  `desc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `for_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idx` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `upgrades` (`type`, `name`, `monthly`, `annually`, `desc`, `for_type`, `idx`) VALUES('CPU', 'Additional CPUs', 12.94, 155.28, '', 'ST_VM', 1);
INSERT INTO `upgrades` (`type`, `name`, `monthly`, `annually`, `desc`, `for_type`, `idx`) VALUES('MEM', 'Additional Memory (GB)', 12.94, 155.28, '', 'ST_VM', 2);
INSERT INTO `upgrades` (`type`, `name`, `monthly`, `annually`, `desc`, `for_type`, `idx`) VALUES('STR', 'Additional Storage (TB)', 49.42, 593.00, '1 TB 7200 RPM storage', 'ST_VM', 3);
INSERT INTO `upgrades` (`type`, `name`, `monthly`, `annually`, `desc`, `for_type`, `idx`) VALUES('SAN', 'Additional SAN Storage (TB)', 125.00, 1500.00, '10k fiber channel disk', 'ST_VM', 4);
INSERT INTO `upgrades` (`type`, `name`, `monthly`, `annually`, `desc`, `for_type`, `idx`) VALUES('CPU', 'Additional CPUs', 15.61, 187.32, '', 'HS_VM', 1);
INSERT INTO `upgrades` (`type`, `name`, `monthly`, `annually`, `desc`, `for_type`, `idx`) VALUES('MEM', 'Additional Memory (GB)', 15.61, 187.32, '', 'HS_VM', 2);
INSERT INTO `upgrades` (`type`, `name`, `monthly`, `annually`, `desc`, `for_type`, `idx`) VALUES('SAN', 'Additional SAN Storage (TB)', 125.00, 1500.00, '10k fiber channel disk', 'ST_VM', 4);

CREATE TABLE `services_upgrades` (
    `service_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `upgrade_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `services_upgrades` (`service_type`, `upgrade_type`) VALUES('ST_VM', 'CPU');
INSERT INTO `services_upgrades` (`service_type`, `upgrade_type`) VALUES('ST_VM', 'MEM');
INSERT INTO `services_upgrades` (`service_type`, `upgrade_type`) VALUES('ST_VM', 'STR');
INSERT INTO `services_upgrades` (`service_type`, `upgrade_type`) VALUES('ST_VM', 'SAN');
INSERT INTO `services_upgrades` (`service_type`, `upgrade_type`) VALUES('HS_VM', 'CPU');
INSERT INTO `services_upgrades` (`service_type`, `upgrade_type`) VALUES('HS_VM', 'MEM');
INSERT INTO `services_upgrades` (`service_type`, `upgrade_type`) VALUES('HS_VM', 'SAN');


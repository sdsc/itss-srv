CREATE DATABASE `itss_srv` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE `itss_srv`;

CREATE TABLE IF NOT EXISTS `services` (
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `monthly` decimal(10,2) DEFAULT NULL,
  `annually` decimal(10,2) DEFAULT NULL,
  `desc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `services` (`type`, `name`, `monthly`, `annually`, `desc`) VALUES('ST_VM', 'Windows VM', 69.75, 837.00, '1 vCPU, 2GB memory, 100 GB OS storage');
INSERT INTO `services` (`type`, `name`, `monthly`, `annually`, `desc`) VALUES('ST_VM_ADD', 'Additional CPUs', 12.94, 155.28, '');
INSERT INTO `services` (`type`, `name`, `monthly`, `annually`, `desc`) VALUES('ST_VM_ADD', 'Additional Memory (GB)', 12.94, 155.28, '');
INSERT INTO `services` (`type`, `name`, `monthly`, `annually`, `desc`) VALUES('ST_VM_ADD', 'Additional Storage (TB)', 49.42, 593.00, '1 TB 7200 RPM storage');
INSERT INTO `services` (`type`, `name`, `monthly`, `annually`, `desc`) VALUES('ST_VM_ADD', 'Additional SAN storage (TB)', 125, 1500.00, '10k fiber channel disk');
INSERT INTO `services` (`type`, `name`, `monthly`, `annually`, `desc`) VALUES('HS_VM', 'High Security VM', 93.75, 1125.00, '1 vCPU, 2 GB memory, 100 GB OS storage, in High Security environment');
INSERT INTO `services` (`type`, `name`, `monthly`, `annually`, `desc`) VALUES('HS_VM_ADD', 'Additional CPUs', 15.61, 187.32, '');
INSERT INTO `services` (`type`, `name`, `monthly`, `annually`, `desc`) VALUES('HS_VM_ADD', 'Additional Memory (GB)', 15.61, 187.32, '');
INSERT INTO `services` (`type`, `name`, `monthly`, `annually`, `desc`) VALUES('HS_VM_ADD', 'Additional SAN Storage (TB)', 125.00, 1500.00, '10k fiber channel disk');
/*
Navicat MySQL Data Transfer

Source Server         : dl
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : picture

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2020-02-06 16:48:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `pic_table`
-- ----------------------------
DROP TABLE IF EXISTS `pic_table`;
CREATE TABLE `pic_table` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `pic_router` char(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pic_table
-- ----------------------------
INSERT INTO `pic_table` VALUES ('1', 'http://127.0.0.1:3002/public/image/1580978896394.jpg');

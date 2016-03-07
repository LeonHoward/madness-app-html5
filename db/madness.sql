 /*========================================================= madness数据库*/

/*================================= 建立表空间及对应dba*/
 -- create user
 GRANT USAGE ON *.* TO 'madness'@'localhost' IDENTIFIED BY 'madness' WITH GRANT OPTION;
 -- create database
 CREATE DATABASE madness CHARACTER SET  utf8  COLLATE utf8_general_ci;
 -- grant user 权限1,权限2,select,insert,update,delete,create,drop,index,alter,grant,references,reload,shutdown,process,file等14个权限
 GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,LOCK TABLES ON madness.*  TO 'madness'@'localhost' IDENTIFIED BY 'madness';

 /*================================= 建立表、表主外键、多表关联等T-SQL*/
 -- 改变当前数据库
 USE madness;

/*
用户表
*/
create table user (
id INT NOT NULL auto_increment COMMENT 'ID标识',
name VARCHAR(128) NOT NULL COMMENT '姓名',
email VARCHAR(128) NOT NULL COMMENT '邮件',
phone CHAR(11) NOT NULL COMMENT '电话号码',
who VARCHAR(128) NOT NULL COMMENT '人群',
mevent VARCHAR(128) NOT NULL COMMENT '缘由',
adate VARCHAR(19) NOT NULL COMMENT '提交信息时间',
primary key (id) -- 主键
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

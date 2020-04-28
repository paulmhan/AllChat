DROP DATABASE IF EXISTS chat_db;

CREATE DATABASE chat_db;

USE chat_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE rooms (
    id INT NOT NULL AUTO_INCREMENT,
    userId INT,
    PRIMARY KEY(id)
);

CREATE TABLE messages (
    id INT NOT NULL AUTO_INCREMENT,
    roomId INT,
    userId INT,
    title TEXT NOT NULL,
    timeStamp VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

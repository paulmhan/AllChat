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
    room_name VARCHAR(45) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE messages (
    id INT NOT NULL AUTO_INCREMENT,
    room_id INT NOT NULL,
    user_id INT NOT NULL,
    message TEXT NOT NULL,
    PRIMARY KEY(id)
);

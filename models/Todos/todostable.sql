CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    user_handle VARCHAR(45) NOT NULL,
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
    message TEXT NOT NULL
);

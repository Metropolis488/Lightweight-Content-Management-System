
CREATE DATABASE blog_db;
USE blog_db;

CREATE TABLE blogPost
(
    id int NOT NULL auto_increment,
    post TEXT NOT NULL,
    title VARCHAR(200) NOT NULL,
    abstract VARCHAR(250),
    author VARCHAR (75),
    PRIMARY KEY (id)
);
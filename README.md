# API COMPONENT
##  Prerequisite installations for use:
     -Node.js and npm
     -mySQL server configured as shown below
     -express, cors, and mySQL downloaded using npm
##  MySQL SERVER CONFIG:
###     TABLE CONFIG:
        CREATE TABLE users (
            id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
            name varchar(255) NOT NULL,
            password varchar(255)
        );


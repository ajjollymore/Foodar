# API COMPONENT
##  Prerequisite installations for use:
     -Node.js and npm(https://nodejs.org/en/)
     -mySQL server configured as shown below(https://dev.mysql.com/downloads/installer/)
     -express, cors, and mySQL downloaded using npm
##  NPM INSTALLATION COMMAND
<-------------------------------------------------------->
npm install express cors mysql
<-------------------------------------------------------->
##  MySQL SERVER CONFIG:
###     DATABASE CONFIG:
<-------------IN MYSQL COMMAND LINE PROMPT(CLI)----------->
            CREATE DATABASE <your db name here>;
            USE <your db name here>;
<--------------------------------------------------------->
###     TABLE CONFIG:
<-------------IN MYSQL COMMAND LINE PROMPT(CLI)----------->
            CREATE TABLE users (
                id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                name varchar(255) NOT NULL,
                password varchar(255)
            );
            
<--------------------------------------------------------->
### React Native Installation:
     - https://reactnative.dev/docs/environment-setup
     - watch this vid from 6:05 for a walkthrough: https://www.youtube.com/watch?v=oorfevovPWw&ab_channel=notJust%E2%80%A4dev 
          -if: 'choco' is not recognized as an internal or external command, operable program or batch file.
          - use most upvoted answer from: https://stackoverflow.com/questions/47861537/choco-command-not-recognized-when-run-as-administrator-on-windows

### git add (filename)
### git commit -m "message"
### git push

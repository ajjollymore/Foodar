const db = require("./db.js");

const Client = function(user) {
    this.name = user.name;
    this.data = user.data;
};
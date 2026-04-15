const bcrypt = require("bcryptjs");

const users = [
    {
        id: 1,
        username: "admin",
        password: bcrypt.hashSync("123456", 8)
    }
];

module.exports = users;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("../models/userModel");

exports.login = (req, res) => {

    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(404).send("User not found");
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
        return res.status(401).send("Invalid password");
    }

    const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login successful",
        token: token
    });
};

exports.protected = (req, res) => {
    res.json({
        message: "Protected route accessed successfully"
    });
};
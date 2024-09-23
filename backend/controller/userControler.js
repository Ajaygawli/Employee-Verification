const UserSchema = require("../schema/UserSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtkey= process.env.JWT_KEY

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserSchema.findOne({ username })

        if (!user) {
            return res.status(401).json({ error: "User not found " })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
            console.log(user)
            console.log(isPasswordValid)
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid  password' });
        }

        const token = jwt.sign({ userId: user._id }, jwtkey, {
            expiresIn: '24h',
        });

        res.status(200).json({ token, user });

    } catch (error) {

    }
}

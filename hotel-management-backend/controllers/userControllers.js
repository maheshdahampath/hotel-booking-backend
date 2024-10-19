import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

export function postUsers(req, res) {
    const user = req.body;

    const password = req.body.password;
    const passwordHash = bcrypt.hashSync(password, 10);
    console.log(passwordHash);
    user.password = passwordHash;

    const newUser = new User(user);
    newUser.save().then(() => {
        res.json({
            message: "User created successfully"
        });
    }).catch((error) => {
        console.error("User creation error:", error);
        res.status(400).json({
            message: "User creation failed",
            error: error.message // Add this line to get the specific error
        });
    });
}

export function loginUser(req, res) {
    const { email, password } = req.body;

    User.findOne({ email }).then((user) => {
        if (!user) {
            return res.status(403).json({
                message: 'User not found',
            });
        }

        const passwordMatch = bcrypt.compareSync(password, user.password);

        if (!passwordMatch) {
            return res.status(403).json({
                message: 'Invalid password',
            });
        }

        const payload = {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            type: user.type,
        };

        const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '48h' });

        res.json({
            message: 'User found',
            user: user,
            token: token,
        });
    }).catch((error) => {
        console.error('Login error:', error);
        res.status(500).json({
            message: 'Login failed',
            error: error.message,
        });
    });
}

export function isAdminValid(req) {
    if (req.user == null) {
        return false;
    }

    return req.user.type === "admin"; // Corrected logic to return true only for admin
}

export function isCustomerValid(req) {
    if (req.user == null) {
        return false;
    }

    return req.user.type === "customer"; // Simplified return statement
}

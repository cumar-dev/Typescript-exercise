"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggedIn = void 0;
const loggedIn = (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({
                status: "failed",
                message: "email and password are required"
            });
        }
        return res.status(201).json({
            status: "success",
            message: "login created successfully...",
            loginInfo: {
                email,
                password
            }
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return res.status(500).json({
            status: "failed",
            message: "Internal Server Error"
        });
    }
};
exports.loggedIn = loggedIn;
//# sourceMappingURL=Login.ctr.js.map
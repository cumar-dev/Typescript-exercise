"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayGoodBy = void 0;
const sayGoodBy = (req, res) => {
    const name = req.query.name;
    if (!name || typeof name !== "string" || name.length === 0) {
        return res.status(400).json({
            message: `name is required please fix it. ${name}`,
            status: "failed"
        });
    }
    return res.status(200).json({
        status: "success",
        farewall: "Good Bye",
        name: `passed name is: ${name}`
    });
};
exports.sayGoodBy = sayGoodBy;
//# sourceMappingURL=GoodBye.js.map
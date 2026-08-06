"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productBodyAndParams = void 0;
const productBodyAndParams = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
        if (!id || !name || price === undefined) {
            return res.status(400).json({
                status: "failed",
                message: "id, name and price are required",
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Product updated successfully",
            product: {
                id,
                name,
                price,
            },
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return res.status(500).json({
            status: "failed",
            message: "Internal Server Error",
        });
    }
};
exports.productBodyAndParams = productBodyAndParams;
//# sourceMappingURL=Params+Body.js.map
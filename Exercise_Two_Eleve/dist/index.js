"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Login_rtr_1 = __importDefault(require("./Router/Login.rtr"));
const Product_rtr_1 = __importDefault(require("./Router/Product.rtr"));
const Params_Body_1 = __importDefault(require("./Router/Params+Body"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/login", Login_rtr_1.default);
app.use("/product", Product_rtr_1.default);
app.use("/products", Params_Body_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map
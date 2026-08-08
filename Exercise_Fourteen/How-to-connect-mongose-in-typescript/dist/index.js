"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const Post_router_1 = __importDefault(require("./Router/Post.router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
//routes comming
app.use("/posts", Post_router_1.default);
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;
console.log("database url:", MONGODB_URL);
if (!MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined");
}
mongoose_1.default
    .connect(MONGODB_URL)
    .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error("DB connection error:", error);
});
//# sourceMappingURL=index.js.map
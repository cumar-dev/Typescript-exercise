import express from "express";
import logInRout from "./Router/Login.rtr";
import productRout from "./Router/Product.rtr";
import products from "./Router/Params+Body";
const app = express();
app.use(express.json());
app.use("/login", logInRout);
app.use("/product", productRout);
app.use("/products", products);
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})
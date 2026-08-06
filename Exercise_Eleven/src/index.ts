import express from "express";
import goodBy from "./Router/GoodBye";
const app = express();
app.use(express.json());
app.use("/name", goodBy);
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})
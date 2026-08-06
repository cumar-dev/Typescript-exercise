import { Request, Response } from "express";

export const sayGoodBy = (req: Request, res: Response)=> {
    const name = req.query.name;
    if(!name || typeof name !== "string" || name.length === 0) {
        return res.status(400).json({
            message: `name is required please fix it. ${name}`,
            status: "failed"
        })
    }

    return res.status(200).json({
        status: "success",
        farewall: "Good Bye",
        name: `passed name is: ${name}`
    })
}
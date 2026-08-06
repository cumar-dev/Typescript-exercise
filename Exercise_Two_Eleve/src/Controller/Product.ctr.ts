import { Request, Response } from "express";
import { ProductQuery } from "../Types/Product";
export const Product = (req: Request<ProductQuery>, res: Response) => {
  const { page, limit } = req.query;
  try {
    if(!page || !limit) {
        return res.status(400).json({
            status: "failed",
            message: "page and limit are required"
        })
    }
    return res.status(200).json({
        status: "success",
        message: "product query created successfully..",
        productsQuery: {
            page,
            limit
        }
    })
  } catch (error) {
    if(error instanceof Error) {
        console.error(error.message);
    }
    return res.status(500).json({
       status: "failed",
       message: "Internal Server Error"
    })
  }
};

import { Request, Response } from "express";
import { Params, Body } from "../Types/Params+Body";
export const productBodyAndParams = (req: Request<Params, {}, Body>, res: Response) => {
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
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

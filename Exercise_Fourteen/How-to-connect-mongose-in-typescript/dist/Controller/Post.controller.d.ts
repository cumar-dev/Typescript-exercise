import { Request, Response } from "express";
import { createPostInput } from "../Service/Post.service";
import { ICreatePostResponse, IGetAllPostsResponse } from "../Types/Post.types";
export declare const handleCreatePost: (req: Request<{}, {}, createPostInput>, res: Response<ICreatePostResponse>) => Promise<Response<ICreatePostResponse, Record<string, any>>>;
export declare const handleGetAll: (req: Request, res: Response<IGetAllPostsResponse>) => Promise<Response<IGetAllPostsResponse, Record<string, any>>>;
export declare const handleGetOnePost: (req: Request<{
    id: string;
}>, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateOnePost: (req: Request<{
    id: string;
}>, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteOnePost: (req: Request<{
    id: string;
}>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Post.controller.d.ts.map
import { IPost } from "../Model/Post.model";
export type createPostInput = Pick<IPost, "title" | "content" | "author">;
export type updatePostInput = Partial<createPostInput>;
export declare const createPost: (data: createPostInput) => Promise<import("mongoose").Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const getAllPosts: () => Promise<(import("mongoose").Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const getBostById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | null>;
export declare const updatePost: (id: string, data: updatePostInput) => Promise<(import("mongoose").Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | null>;
export declare const deletePost: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | null>;
//# sourceMappingURL=Post.service.d.ts.map
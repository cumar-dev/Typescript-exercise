import mongoose, { Document } from "mongoose";
export interface IPost extends Document {
    title: string;
    content: string;
    author: string;
}
declare const Post: mongoose.Model<IPost, {}, {}, {}, Document<unknown, {}, IPost, {}, mongoose.DefaultSchemaOptions> & IPost & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IPost>;
export default Post;
//# sourceMappingURL=Post.model.d.ts.map
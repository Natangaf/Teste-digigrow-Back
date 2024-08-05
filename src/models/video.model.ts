import mongoose, { Document, Schema } from "mongoose";

export interface IVideoDocument extends Document {
  title: string;
  description: string;
  category: mongoose.Types.ObjectId[];
  thumbnail: string;
  videoUrl: string;
  user: mongoose.Types.ObjectId;
}

const VideoSchema = new Schema<IVideoDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }], 
  thumbnail: { type: String, required: true },
  videoUrl: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, {
  timestamps: true,
});


const Video = mongoose.model<IVideoDocument>("Video", VideoSchema);
export default Video;

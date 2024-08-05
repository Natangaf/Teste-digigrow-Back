import mongoose, { Schema, Document } from 'mongoose';

export interface ICategoryDocument extends Document {
  name: string;
  videos: mongoose.Types.ObjectId[];
}

const CategorySchema = new Schema<ICategoryDocument>(
  {
    name: { type: String, required: true },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model<ICategoryDocument>('Category', CategorySchema);

export default Category;

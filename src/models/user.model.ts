import mongoose, { Schema, Document } from "mongoose";
import { getRounds, hashSync } from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  admin: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true, maxlength: 45 },
  email: { type: String, required: true, unique: true, maxlength: 45 },
  admin: { type: Boolean, default: false },
  password: { type: String, required: true, maxlength: 120, select: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
});

UserSchema.pre("save", function (next) {
  const user = this as IUser & mongoose.Document;

  if (user.isModified("password")) {
    const isEncrypted: number = getRounds(user.password);
    if (!isEncrypted) {
      user.password = hashSync(user.password, 10);
    }
  }
  next();
});

UserSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate() as Partial<IUser>;

  if (update.password) {
    const isEncrypted: number = getRounds(update.password);
    if (!isEncrypted) {
      update.password = hashSync(update.password, 10);
    }
  }
  next();
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;

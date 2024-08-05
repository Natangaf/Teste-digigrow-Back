import mongoose from "mongoose";
import { AppError } from "../../error/handleErros.errors";
import { Video } from "../../models";
import { IVideoDocument } from "../../models/video.model";

export const getVideoService = async (
  idVideo: string
): Promise<IVideoDocument> => {
  if (!mongoose.isValidObjectId(idVideo)) {
    throw new AppError("Invalid ID format", 400);
  }

  const video: IVideoDocument | null = await Video.findById(idVideo)
    .populate({
      path: "category",
      select: "name",
    })
    .populate({
      path: "user",
      select: "name",
    })
    .exec();

  if (!video) {
    throw new AppError("Video not found", 404);
  }

  return video;
};

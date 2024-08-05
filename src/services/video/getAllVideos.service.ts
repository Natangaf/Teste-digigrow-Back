import { AppError } from "../../error/handleErros.errors";
import Video, { IVideoDocument } from "../../models/video.model";

export const getAllVideosService = async (
  page: number,
  perPage: number
): Promise<IVideoDocument[]> => {
  if (page <= 0 || perPage <= 0) {
    throw new AppError(
      "Page number and items per page must be greater than zero",
      400
    );
  }

  const skip = (page - 1) * perPage;
  const limit = perPage;

  const videos: IVideoDocument[] = await Video.find()
    .skip(skip)
    .limit(limit)
    .populate({ path: "category", select: "name" })
    .exec();

  return videos;
};

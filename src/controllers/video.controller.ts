import { Request, Response } from "express";
import { createVideoService } from "../services/video/createVideo.service";
import { getVideoService } from "../services/video/getVideo.service";
import { IVideoDocument } from "../models/video.model";
import { getAllVideosService } from "../services/video/getAllVideos.service";

export const createdVideoControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newVideo = await createVideoService(req.body, res.locals.user.idUser);

  return res.status(201).json(newVideo);
};

export const getVideoControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Video: IVideoDocument | null = await getVideoService(req.params.id);

  return res.status(200).json(Video);
};
export const getAllVideoControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const page = Number(req.params.page || 1);
  const perPage = Number(req.params.perPage || 5);
  const Video: IVideoDocument[] | null = await getAllVideosService(page, perPage);

  return res.status(200).json(Video);
};

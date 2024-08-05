import { z } from "zod";
import { videoReq } from "../schemas/video.schemas";

export type tVideoReq = z.infer<typeof videoReq>;

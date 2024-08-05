import { z } from "zod";

export const videoReq = z.object({
  title: z.string().nonempty("Title is required"),
  description: z.string().nonempty("Description is required"),
  category: z.array(z.string()).nonempty("Category is required"),
  thumbnail: z.string().nonempty("Thumbnail is required"),
  videoUrl: z.string().url("Invalid URL").nonempty("Video URL is required"),
});



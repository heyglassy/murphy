import { type FileRouter, createFilething } from "uploadthing/server";
const f = createFilething();

// const auth = (req: Request) => ({ id: "test" });

export const ourFileRouter = {
  imageUploader: f
    .fileTypes(["image"])
    .maxSize("1GB")
    .middleware((req) => {
      return { userId: "test" };
    })
    .onUploadComplete(async ({ metadata }) => {
      console.log(metadata);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

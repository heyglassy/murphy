import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "./api/core";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

export function MultiUploader() {
  const { getRootProps, getInputProps, isDragActive, files, startUpload } =
    useUploadThing("imageUploader");

  return (
    <div {...getRootProps()} className="h-24 w-24 bg-blue-500">
      <input {...getInputProps()} />
      <div className="h-24 w-24 bg-black">
        {files.length > 0 && (
          <button
            onClick={() => {
              console.log("test");
              startUpload();
            }}
            className="bg-white"
          >
            Upload {files.length} files
          </button>
        )}
      </div>
      Drop files here!
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <MultiUploader />
      </main>
    </>
  );
};

export default Home;

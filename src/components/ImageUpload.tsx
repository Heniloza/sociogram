"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "imageUploader";
}

export default function ImageUpload({
  endpoint,
  onChange,
  value,
}: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative size-20">
        <img
          src={value}
          alt="uploaded image"
          className="rounded-md object-cover size-20"
        />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="text-white size-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) =>
        console.log("Error in unpoading image", error)
      }
    />
  );
}

"use client";
import { Api } from "@/utils/api";
import { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const HandleClick = async () => {
    if (
      !inputRef.current ||
      !inputRef.current.files ||
      !inputRef.current.files.length
    ) {
      alert("Please select a file first!");
      return;
    }
    const formData = new FormData();
    formData.append("file", inputRef.current.files[0]);

    try {
      const response = await fetch(Api.upload, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert("File uploaded successfully!");
    } catch (error) {
      alert("An error occurred while uploading the file.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <h1 className="text-white text-2xl font-bold">Upload Keyword File</h1>
      <input
        ref={inputRef}
        className="w-[20rem] md:w-[30rem] text-sm rounded-lg cursor-pointer text-gray-400  bg-gray-700 placeholder-gray-400"
        type="file"
        name="file"
        accept=".xlsx"
      />
      <button
        onClick={HandleClick}
        className="w-24 h-10 bg-white rounded-md font-bold text-black transition-all duration-300"
        disabled={isLoading}
      >
        {isLoading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}

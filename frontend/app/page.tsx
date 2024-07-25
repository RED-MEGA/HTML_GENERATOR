"use client";
import { Api } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
	const inputRef = useRef<HTMLInputElement>(null);
	const router = useRouter();

	const HandleClick = async () => {
		if (
			!inputRef.current ||
			!inputRef.current.files ||
			!inputRef.current.files.length
		) {
			toast.info("Please select a file first!");
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
			toast.success("File uploaded successfully!");
		} catch (error) {
			toast.error("An error occurred while uploading the file.");
		}
	};

	return (
		<div className="h-screen flex flex-col justify-center items-center space-y-4">
			<h1 className="text-white text-2xl font-bold">
				Upload Keyword File
			</h1>
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
			>
				Upload
			</button>
			<button
				onClick={() => router.push("/discover")}
				className="w-40 h-10 bg-white rounded-md font-bold text-black transition-all duration-300"
			>
				Go to Discover
			</button>
			<ToastContainer theme="dark" />
		</div>
	);
}

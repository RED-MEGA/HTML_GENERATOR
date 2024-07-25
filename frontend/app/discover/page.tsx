import { Api } from "@/utils/api";
import Link from "next/link";

interface Keyword {
	_id: string;
	keyword: string;
}

export default async function discover() {
	const response = await fetch(Api.keywords);
	const keywords: Keyword[] = await response.json();

	return (
		<div className="flex justify-center items-center flex-col">
			{keywords.length == 0 ? (
				<h1 className="text-white text-4xl">No Available Keywords</h1>
			) : (
				keywords.map((keyword, idx) => (
					<div
						key={idx}
						className="w-[90vw] py-4 flex justify-start items-center space-x-7 border-y-[1px] border-white bg-black"
					>
						<div className="flex flex-col justify-center items-center space-y-3 font-medium text-white">
							<Link
								href={Api.viewHtml + `/${keyword._id}`}
								target="_blank"
								className="bg-black border text-sm hover:bg-gray-600 rounded-sm transition-all duration-300 w-[6rem] text-center"
							>
								See
							</Link>
							<Link
								href={Api.downloadHtml + `/${keyword._id}`}
								target="_blank"
								className="bg-black border text-sm hover:bg-gray-600 rounded-sm transition-all duration-300 w-[6rem] text-center"
							>
								Download
							</Link>
						</div>
						<p className="text-2xl text-white font-extralight">
							{keyword.keyword}
						</p>
					</div>
				))
			)}
		</div>
	);
}

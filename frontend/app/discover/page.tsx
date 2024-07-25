export default function discover() {
	const keywords: string[] = [
		"1234567894412",
		"Diversity",
		"Innovation",
		"Serendipity",
		"Harmony",
		"Resilience",
		"Spectrum",
		"Nexus",
		"Velocity",
		"Jubilation",
		"Luminary",
		"Paradox",
		"Cascade",
		"Quest",
		"Tranquility",
		"Whimsical",
		"Enigma",
		"Jubilant",
		"Reverie",
		"Vivid",
	];

	return (
		<div className="flex justify-center items-center flex-col">
			{keywords.map((full_keyword) => {
				const keyword = full_keyword.slice(0, 10);

				return (
					<div className="w-[90vw] p-4 flex justify-start items-center space-x-7 border-y-[1px] border-white bg-black">
						<div className="flex flex-col justify-center items-center space-y-3 font-medium text-white">
							<button className="bg-black border text-sm hover:bg-gray-600 rounded-sm transition-all duration-300 w-[6rem]">
								See
							</button>
							<button className="bg-black border text-sm hover:bg-gray-600 rounded-sm transition-all duration-300 w-[6rem]">
								Download
							</button>
						</div>
						<p className="text-2xl text-white font-medium">
							{keyword}
						</p>
					</div>
				);
			})}
		</div>
	);
}

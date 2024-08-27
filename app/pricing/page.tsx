import Image from "next/image";

const PricingPage = () => {
	return (
		<>
			<div className="m-auto px-6 py-20 xl:container md:px-12 lg:px-20 xl:px-0 bg-white">
				<div className="m-auto text-center">
					<h2 className="text-2xl font-bold text-gray-800 md:text-4xl dark:text-white">A plan for everyone</h2>
				</div>
				<div className="m-auto mt-12">
					<div className="relative z-10">
						<div className="relative overflow-auto p-6">
							<table className="w-full border-t border-gray-100 dark:border-gray-700">
								<thead>
									<tr>
										<td className="p-4 sm:sticky"></td>
										<td className="space-y-8 p-8">
											<Image
												src={`https://tailus.io/sources/blocks/comparator/preview/images/pro.webp`}
												alt="organization icon"
												height={512}
												width={512}
												priority
												className="h-12 w-auto"
												draggable={false}
											/>
											<div className="space-y-4">
												<h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Starter</h4>
												<p className="text-sm text-gray-600 dark:text-gray-400">Delectus natus illum in, iste ut facilis ex sit culpa fuga dolor atque? Quis.</p>
											</div>
											<h3 className="flex text-4xl font-bold text-gray-900 dark:text-white"><span className="text-lg text-gray-500">$</span>15 <span className="ml-4 mt-auto h-max text-lg font-light text-gray-500">/ Month</span></h3>
											<button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-sky-500 before:bg-sky-50 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
												<span className="relative text-base font-semibold text-sky-600 dark:text-white">Get Started</span>
											</button>
										</td>
										<td className="space-y-8 p-8">
											<Image
												src={`https://tailus.io/sources/blocks/comparator/preview/images/team.webp`}
												alt="organization icon"
												height={512}
												width={512}
												priority
												className="h-12 w-auto"
												draggable={false}
											/>
											<div className="space-y-4">
												<h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Team</h4>
												<p className="text-sm text-gray-600 dark:text-gray-400">Delectus natus illum vel veritatis in, iste ut facilis ex sit culpa fuga dolor atque? Quis.</p>
											</div>
											<h3 className="flex text-4xl font-bold text-gray-900 dark:text-white"><span className="text-lg text-gray-500">$</span>189 <span className="ml-4 mt-auto h-max text-lg font-light text-gray-500">/ Month</span></h3>
											<button className="before:bg-primary relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:bg-white">
												<span className="dark:text-dark relative text-base font-semibold text-white">Buy Now</span>
											</button>
										</td>
										<td className="space-y-8 p-8">
											<Image
												src={`https://tailus.io/sources/blocks/comparator/preview/images/organization.webp`}
												alt="organization icon"
												height={512}
												width={512}
												priority
												className="h-12 w-auto"
												draggable={false}
											/>
											<div className="space-y-4">
												<h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Organization</h4>
												<p className="text-sm text-gray-600 dark:text-gray-400">Delectus natus illum vel veritatis in, iste ut facilis ex sit culpa fuga dolor atque? Quis.</p>
											</div>
											<h3 className="flex text-4xl font-bold text-gray-900 dark:text-white"><span className="text-lg text-gray-500">$</span>379 <span className="ml-4 mt-auto h-max text-lg font-light text-gray-500">/ Month</span></h3>
											<button className="before:bg-primary relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:bg-white">
												<span className="dark:text-dark relative text-base font-semibold text-white">Buy Now</span>
											</button>
										</td>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td className="left-0 border border-sky-100 bg-sky-50 p-4 font-medium text-sky-900 sm:sticky dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
											<span className="block w-max"> Favorite profile </span>
										</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
									</tr>
									<tr>
										<td className="left-0 border border-sky-100 bg-sky-50 p-4 font-medium text-sky-900 sm:sticky dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
											<span className="block w-max"> All courses and videos </span>
										</td>
										<td className="border border-gray-100 text-center text-2xl text-red-500 dark:border-gray-700">&times;</td>
										<td className="border border-gray-100 text-center text-2xl text-red-500 dark:border-gray-700">&times;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
									</tr>
									<tr>
										<td className="left-0 border border-gray-100 bg-sky-50 p-4 font-medium text-sky-900 sm:sticky dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
											<span className="block w-max"> Questions & Answers (soon) </span>
										</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
									</tr>
									<tr>
										<td className="left-0 border border-gray-100 bg-sky-50 p-4 font-medium text-sky-900 sm:sticky dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
											<span className="block w-max"> Source files, ePub </span>
										</td>
										<td className="border border-gray-100 text-center text-2xl text-red-500 dark:border-gray-700">&times;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
									</tr>
									<tr>
										<td className="left-0 border border-gray-100 bg-sky-50 p-4 font-medium text-sky-900 sm:sticky dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
											<span className="block w-max"> UI templates, icons, illustrations </span>
										</td>
										<td className="border border-gray-100 p-4 text-center text-gray-600 dark:border-gray-700 dark:text-gray-300">
											<span className="m-auto block w-max"> Limited to 5 </span>
										</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
									</tr>
									<tr>
										<td className="left-0 border border-gray-100 bg-sky-50 p-4 font-medium text-sky-900 sm:sticky dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
											<span className="block w-max"> Premium tutorials </span>
										</td>
										<td className="border border-gray-100 text-center text-2xl text-red-500 dark:border-gray-700">&times;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
									</tr>
									<tr>
										<td className="left-0 border border-gray-100 bg-sky-50 p-4 font-medium text-sky-900 sm:sticky dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
											<span className="block w-max"> Commercial use </span>
										</td>
										<td className="border border-gray-100 text-center text-2xl text-red-500 dark:border-gray-700">&times;</td>
										<td className="border border-gray-100 text-center text-2xl text-red-500 dark:border-gray-700">&times;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
									</tr>
									<tr>
										<td className="left-0 border border-gray-100 bg-sky-50 p-4 font-medium text-sky-900 sm:sticky dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
											<span className="block w-max"> Manage team and see progress </span>
										</td>
										<td className="border border-gray-100 text-center text-2xl text-red-500 dark:border-gray-700">&times;</td>
										<td className="border border-gray-100 text-center text-2xl text-red-500 dark:border-gray-700">&times;</td>
										<td className="border border-gray-100 p-4 text-center text-green-500 dark:border-gray-700">&check;</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default PricingPage;
import Image from "next/image"

export const PortfolioSection = () => {
	return (
		<>
			<section className="py-12">
				<div className="container mx-auto px-8">
					<div className="mb-12 max-w-3xl md:mb-28">
						<h1 className="font-heading relative max-w-xl text-6xl font-semibold text-zinc-300 sm:text-8xl xl:max-w-3xl">
							<span className="mr-3">Join the community, and change</span>
							<span className="relative inline-block">
								<span className="relative z-10">the future.</span>
								<span className="absolute -bottom-2 left-0 h-2.5 w-full rounded-full bg-green-800"></span>
							</span>
						</h1>
					</div>
					<div className="-m-3 mb-16 flex flex-wrap">
						<div className="w-full p-3 md:w-1/2 cursor-view-pointer">
							<div className="relative overflow-hidden hover:-rotate-2">
							<Image
									src="https://images.unsplash.com/photo-1723118854912-7b472b532508?q=80&w=1964&auto=format&fit=crop"
									alt="hero"
									height={650}
									width={1000}
									priority
									className="h-[650px] w-full rounded-3xl object-cover opacity-80"
									draggable={false}
								/>
								<p className="absolute bottom-0 left-0 px-14 pb-16 text-xl font-semibold tracking-tight text-gray-200">We want to support your endeavors. Get helpful hints.</p>
							</div>
						</div>
						<div className="w-full p-3 md:w-1/2 cursor-pointer hover:cursor-view-pointer">
							<div className="relative overflow-hidden hover:rotate-3">
							<Image
									src="https://images.unsplash.com/photo-1723049235305-65395182241f?w=500&auto=format&fit=crop"
									alt="hero"
									height={650}
									width={1000}
									priority
									className="h-[650px] w-full rounded-3xl object-cover opacity-80"
									draggable={false}
								/>
								<div className="absolute left-0 top-0 flex h-full flex-col justify-between px-14 py-16">
									<h3 className="font-heading mb-8 max-w-xs text-5xl font-semibold tracking-tight text-white">Augmented Reality Experiences.</h3>
									<p className="text-xl font-semibold tracking-tight text-gray-200">We want to support your endeavors. Get helpful hints.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-center">
						<div className="w-auto"><a className="inline-flex h-20 items-center justify-center rounded-lg bg-zinc-900 p-5 text-center text-2xl font-semibold tracking-tight text-[white] transition duration-200 hover:bg-zinc-700 focus:bg-neutral-800 focus:ring-4 focus:ring-neutral-400" href="#">Get consultation</a></div>
					</div>
				</div>
			</section>

		</>
	)
}
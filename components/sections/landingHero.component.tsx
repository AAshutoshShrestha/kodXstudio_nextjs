import Image from "next/image"

export const LandingHero = () => {
	return (
		<>
			<section className="pt-8 md:pt-28">
				<div className="max-w-9xl mx-auto px-4 text-center sm:px-6 lg:px-8">
					<div className="py-16">
						<div className="mx-auto mb-4 flex w-60 items-center justify-between rounded-full border border-green-600 p-1">
							<span className="font-inter ml-3 text-xs font-medium text-zinc-200">Explore how to use for brands.</span>
							<a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
								<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</a>
						</div>
						<h1 className="mx-auto mb-5 max-w-2xl text-center text-5xl font-bold leading-[50px] text-zinc-200 md:text-5xl">
							Control your Finances with our
							<span className="text-green-600 ms-1">Smart Tool </span>
						</h1>
						<p className="mx-auto mb-9 max-w-sm text-center text-base font-normal leading-7 text-zinc-200">Invest intelligently and discover a better way to manage your entire wealth easily.</p>
						<a href="#" className="shadow-xs mb-14 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-7 py-3 text-center text-base font-semibold text-white transition-all duration-500 hover:bg-green-700 md:w-auto">
							Create an account
							<svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</a>
					</div>
					<div className="flex justify-center ">
						<Image
							src='/images/HomeImage.jpg'
							alt="hero"
							height={720}
							width={1400}
							priority
							className="rounded-t-3xl broder-2 border-white "
							draggable={false}
						/>
					</div>
				</div>
			</section>
		</>
	)
}
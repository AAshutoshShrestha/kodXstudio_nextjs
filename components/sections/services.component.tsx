"use client";
import Image from "next/image";
import React from "react";

const ServiceStickySection = () => {
	return (
		<section className="py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-40">
				<div className="mb-14 text-center">
					<h2 className="mb-6 max-w-max text-center text-4xl font-bold leading-[3.25rem] text-zinc-200 lg:mx-auto lg:max-w-3xl">Developed from scratch for seamless online functionality</h2>
					<p className="mb-8 text-base font-normal text-zinc-200 lg:mx-auto lg:max-w-2xl">Using technology to make finance simpler, smarter and more rewarding.</p>
				</div>
				<div className="mx-auto grid max-w-lg grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-full lg:grid-cols-4">
					<div className="relative h-auto w-full md:col-span-2">
						<div className="flex flex-row flex-wrap justify-between rounded-2xl bg-zinc-800">
							
							<div className="h-64 relative block">
								<Image
									src="/images/card_img_1.jpg"
									alt="hero"
									height={150}
									width={1000}
									priority
									className="h-full hover:scale-105"
									draggable={false}
								/>
							</div>
							<div className="w-full p-5 xl:p-8">
								<div className="block">
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</div>
								<h3 className="w-full py-5 text-lg font-bold text-white xl:w-64 xl:text-xl">Accomplish tasks swiftly with online tools.</h3>
								<p className="mb-8 w-full text-xs font-normal text-zinc-300 xl:w-64">Get quoted and covered in under 10 minutes online. no paperwork or waiting any more</p>
								<button className="flex items-center justify-between gap-2 rounded-full border border-solid border-zinc-300 px-5 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white/5">
									View More
									<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>

					<div className="relative h-auto w-full md:col-span-2">
						<div className="flex flex-row flex-wrap justify-between rounded-2xl bg-zinc-800">
							
							<div className="h-64 relative block">
								<Image
									src="/images/card_img_1.jpg"
									alt="hero"
									height={150}
									width={1000}
									priority
									className="h-full hover:scale-105"
									draggable={false}
								/>
							</div>
							<div className="w-full p-5 xl:p-8">
								<div className="block">
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</div>
								<h3 className="w-full py-5 text-lg font-bold text-white xl:w-64 xl:text-xl">Accomplish tasks swiftly with online tools.</h3>
								<p className="mb-8 w-full text-xs font-normal text-zinc-300 xl:w-64">Get quoted and covered in under 10 minutes online. no paperwork or waiting any more</p>
								<button className="flex items-center justify-between gap-2 rounded-full border border-solid border-zinc-300 px-5 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white/5">
									View More
									<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>

					

				</div>
			</div>
		</section>

	);
}

export default ServiceStickySection;

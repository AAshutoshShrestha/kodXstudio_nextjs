import Logo from "../logo.component"
import Head from "next/head";

import footerMenu from "@/api/MenuFooter.json"
import Social from "@/api/SocialMedia.json"

const Footer = () => {
	return (
		<>
			<Head>
				<link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
			</Head>
			<footer className="w-full  py-16 text-zinc-200 z-50 bg-transparent">
				<div className="relative ">
					<p className="inset-x-0 bg-gradient-to-b from-zinc-600 to-zinc-300 bg-clip-text text-center font-bold text-transparent text-[16rem]">KodXstudio</p>
					<div className="relative border-t border-zinc-800 px-8 pb-16 pt-20">
						<div className="mx-auto flex max-w-5xl flex-col items-start justify-between text-sm  sm:flex-row">
							<div className="mb-4 mr-4 md:flex">
								<Logo />
							</div>
							<div className="mt-10 grid grid-cols-3 items-start gap-10 md:mt-0">
								<div className="mt-4 flex flex-col justify-center space-y-4">
									{
										footerMenu && footerMenu.map((item:any, index:number) => (

									<a className="text-zinc-200 hover:text-zinc-400 hover:transition-all" href={item.url} key={index}>
										<p className="text-sm group relative w-max">
											<span className="px-1 relative z-10 group-hover:text-white">{item.title}</span>
											<span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-green-600 z-0 group-hover:h-full "></span>
										</p>
									</a>
										))
									}
								</div>

								<div className="mt-4 flex flex-col justify-center space-y-4">
								{
										Social && Social.map((item:any, index:number) => (

									<a className="text-zinc-200 hover:text-zinc-400 hover:transition-all" href={item.url} key={index}>
										<p className="text-sm group relative w-max">
											<span className="px-1 relative z-10 group-hover:text-white">{item.title}</span>
											<span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-green-600 z-0 group-hover:h-full "></span>
										</p>
									</a>
										))
									}
								</div>
							</div>
						</div>
					</div>
					<div className="relative flex flex-row gap-4 items-center justify-center px-8">
						<div>Copyright © 2024 Aashutosh Shrestha</div>
						<div className="ms-2">All rights reserved</div>
					</div>
				</div>

			</footer>
		</>
	)
}

export default Footer;
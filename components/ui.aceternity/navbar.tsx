"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MenuitemProps, ProductProps, transition } from "../common/navbar/const";


export const Menu = ({ setActive, children }: {setActive: (item: string | null) => void;children: React.ReactNode;}) => {
	return (
		<nav
			onMouseLeave={() => setActive(null)} // resets the state
			className="relative rounded-full border bg-zinc-900 border-white/[0.2] shadow-input space-x-4 px-8 py-2 flex flex-row items-start gap-4 justify-between"
		>
			{children}
		</nav>
	);
};

export const ProductItem = ({ title, description, href, src }: ProductProps) => {
	return (
		<Link href={href} className="flex space-x-2">
			<Image
				src={src}
				width={140}
				height={70}
				alt={title}
				className="flex-shrink-0 rounded-md shadow-2xl"
			/>
			<div>
				<h4 className="text-xl font-bold mb-1 text-zinc-100">
					{title}
				</h4>
				<p className="text-xs max-w-[10rem] text-neutral-300">
					{description}
				</p>
			</div>
		</Link>
	);
};

export const HoveredLink = ({ children, ...rest }: any) => {
	return (
		<Link
			{...rest}
			className="text-zinc-100 hover:text-green-500 "
		>
			{children}
		</Link>
	);
};

export const MenuItem = ({ setActive, active, item, children, }: MenuitemProps) => {
	return (
		<div onMouseEnter={() => setActive(item)} className="relative ">
			<motion.p transition={{ duration: 0.3 }} className="cursor-pointer hover:opacity-[0.9] text-zinc-100">
				{item}
			</motion.p>

			{active !== null && (
				<motion.div
					initial={{ opacity: 0, scale: 0.85, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={transition}
				>
					{active === item && (
						<div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
							<motion.div
								transition={transition}
								layoutId="active" // layoutId ensures smooth animation
								className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
							>
								<motion.div
									layout // layout ensures smooth animation
									className="w-max h-full p-4"
								>
									{children}
								</motion.div>
							</motion.div>
						</div>
					)}
				</motion.div>
			)}
		</div>
	);
};
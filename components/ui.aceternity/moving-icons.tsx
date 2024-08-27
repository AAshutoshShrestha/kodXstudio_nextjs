"use client";

import { cn } from "@/utils/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CardProps {
	items: { src: string }[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}

const LogoCarousel = ({ items, direction = "left", speed = "fast", pauseOnHover = true, className }: CardProps) => {

	const containerRef = useRef<HTMLDivElement>(null);
	const scrollerRef = useRef<HTMLUListElement>(null);

	const addAnimation = () => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};

	useEffect(() => {
		addAnimation();
	});

	const [start, setStart] = useState(false);

	return (
		<div className={cn(" scroller relative z-40 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]")} ref={containerRef}>
			<ul className={cn("flex min-w-full shrink-0 gap-14 py-4 w-max flex-nowrap",
				start && "animate-scroll ",
				pauseOnHover && "hover:[animation-play-state:paused]")} ref={scrollerRef}>
				{
					items && items.map((item, index) => (
						<li key={index}>
							<Image
								src={item.src}
								alt="hero"
								width={125}
								height={100}
								className="mx-auto rounded-2xl object-fill h-full object-left-top"
								draggable={false}
							/>
						</li>

					))
				}
			</ul>
		</div>

	);
};

export default LogoCarousel;

"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui.aceternity/navbar";
import { cn } from "@/utils/utils";
import Logo from "../logo.component";

const TopNavbar = ({ className }: { className?: string }) => {
	const [active, setActive] = useState<string | null>(null);
	return (

		<div className={cn("fixed inset-x-0 max-w-xl mx-auto z-50", className)}>
			<Menu setActive={setActive}>
				<Logo className="text-sm"/>

				<div className="flex flex-row items-start gap-4 justify-between">
					{/* <MenuItem setActive={setActive} active={active} item="Services">
						<div className="flex flex-col space-y-4 text-sm">
							<HoveredLink href="/web-dev">Web Development</HoveredLink>
							<HoveredLink href="/interface-design">Interface Design</HoveredLink>
							<HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
							<HoveredLink href="/branding">Branding</HoveredLink>
						</div>
					</MenuItem> */}

					<HoveredLink href="/">Home</HoveredLink>
					<HoveredLink href="#">Services</HoveredLink>
					<HoveredLink href="Pricing">Pricings</HoveredLink>
					<HoveredLink href="/blog">Blogs</HoveredLink>
				</div>

			</Menu>
		</div>
	);
}

export default TopNavbar
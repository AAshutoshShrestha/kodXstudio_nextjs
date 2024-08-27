import LogoCarousel from "@/components/ui.aceternity/moving-icons";
import TestimonialCarousel from "../ui.aceternity/testimonial";

import testimonialData from "@/api/testimonials.json"
import logos from "@/api/logos.json"
 
const BrandLogoImage = () => {
	return (
		<>
			<section className="py-12">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
						<div className="w-full">
							<LogoCarousel items={logos} direction="right" speed="slow" />
						</div>
				</div>
			</section>
		</>
	);
}


const Testimonials = () => {
	return (
		<>
			<section className="py-12 z-30">
				<div className="mb-14 text-center">
					<h2 className="mb-6 max-w-max text-center text-4xl font-bold leading-[3.25rem] text-zinc-200 lg:mx-auto lg:max-w-3xl">What clients say about me</h2>
				</div>
				<div className="mx-auto max-w-7xl px-8">
					<TestimonialCarousel items={testimonialData} direction="right" speed="slow" />
				</div>
			</section>
		</>
	)
}

export { BrandLogoImage, Testimonials };

import { BrandLogoImage, Testimonials } from "@/components/carousel/carousel.component";
import CTA from "@/components/common/CTA/CTA.component";
import CursorFollower from "@/components/common/cursor-follower.component";
// import HeroSection from "@/components/sections/hero.component";
import { LandingHero } from "@/components/sections/landingHero.component";
import ServiceStickySection from "@/components/sections/services.component";

export default function Home() {
	return (
		<>
			<div className="fixed -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_30%_10%,#000_40%,#16a34a_100%)]"></div>
			<CursorFollower />
			<LandingHero />
			<BrandLogoImage />
			<ServiceStickySection />
			<Testimonials />
			<CTA />
		</>
	);
}

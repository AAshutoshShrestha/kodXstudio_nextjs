import { PrimaryBtn } from "../Button/button.component";

const CTA = () => {
	return (
		<>
			<section className="bg-transparent py-16 z-30">
				<div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-between rounded-2xl bg-gradient-to-r from-zinc-600 to-slate-950 p-10 lg:flex-row lg:px-20 lg:py-14">
						<div className="mb-5 block text-center lg:mb-0 lg:text-left">
							<h2 className="font-manrope mb-5 text-4xl font-semibold text-white lg:mb-2">Connect with us</h2>
							<p className="text-xl text-indigo-100">Book a meet now</p>
						</div>
						<PrimaryBtn href="/contact" content="Book a meet" className="py-5 px-12"/>
					</div>
				</div>
			</section>

		</>
	)
}
export default CTA;
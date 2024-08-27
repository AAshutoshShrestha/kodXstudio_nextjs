import data from "@/api/blog.json"
import Image from "next/image"

const BlogPost = () => {
	return (
		<>
			<div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
				<div className="grid gap-8 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3">
					{
						data && data.map((post: any, index: number) => (

							<div className="overflow-hidden rounded bg-transparent shadow-sm transition-shadow duration-300 border border-white cursor-default z-30 bg-zinc-900" key={index}>
								<Image
									src={post.image}
									alt=""
									width={300}
									height={300}
									priority
									draggable={false}
									className="h-64 w-full object-cover hover:scale-110" />

								<div className="p-5 text-zinc-50">
									<p className="mb-3 text-xs font-semibold uppercase tracking-wide">

										<a href="#" className="transition-colors duration-200 hover:text-[#c8ac0f]" key={index} > {post.categories[0]} </a>
										<span>— {post.publishedAt}</span>
									</p>

									<a href={`/blog/${post.slug}`} className="mb-3 inline-block text-2xl font-bold duration-200">
										{post.title}
									</a>

									<p className="mb-2 text-sm">
										{post.short_desc}
									</p>

									<div className="hover:text-[#c8ac0f] flex flex-row gap-2">
										<a href={`/blog/${post.slug}`} aria-label="" className="inline-flex items-center font-semibold transition-colors duration-200"> Learn more </a>
										<span aria-hidden="true" className=""> &rarr; </span>
									</div>

								</div>
							</div>
						))
					}
				</div>

			</div>
		</>
	)
}

export default BlogPost;
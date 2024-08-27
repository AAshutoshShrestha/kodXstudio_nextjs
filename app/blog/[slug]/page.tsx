"use client"

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import data from "@/api/blog.json";
import Head from "next/head";

import parse from 'html-react-parser';

export interface PostProps {
	title: string;
	slug: string;
	publishedAt: string;
	categories: string[];
	image: string;
	content: any;
	short_desc: string;
}

const BlogDetailPost = () => {
	const { slug } = useParams<{ slug: string }>();
	const [loading, setLoading] = useState(true);
	const [postDetail, setPostDetail] = useState<PostProps | null>(null);

	const fetchData = async (slug: string) => {
		try {
			const post = (data as PostProps[]).find((item) => item.slug === slug);
			if (post) {
				setPostDetail(post);
			} else {
				setPostDetail(null);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false);
		}
	};
	

	useEffect(() => {
		if (slug) {
			fetchData(slug);
		}
	}, [slug]);

	return (
		<>
			<Head>
				{
					loading ? (
						<title>Loading...</title>
					) : (
						postDetail ? (
							<>
								<title>{postDetail.title}</title>
								<meta name="description" content={postDetail.short_desc} />
								<meta name="keywords" content={postDetail.categories.join(", ")} />
							</>
						) : (
							<>
								<title>Blog Post Not Found</title>
								<meta name="description" content="The blog post you are looking for does not exist." />
							</>
						)
					)
				}
			</Head>
			{
				loading ? (
					<p className="text-4xl text-zinc-100">Loading...</p>
				) : (
					postDetail ? (
						<article>
							{/* Post header with left image */}
							<div className="grid grid-cols-1 items-center md:grid-cols-2 bg-zinc-300 text-zinc-800">
								<div className="order-2 h-96 md:order-1 md:h-full">
									<Image
										src={postDetail.image}
										alt={postDetail.title}
										width={1000}
										height={1000}
										priority
										draggable={false}
										className="w-full bg-center object-cover"
									/>
								</div>

								<div className="order-1 mx-auto w-full px-4 py-12 text-left md:order-2 md:w-3/4 md:px-0 md:py-48">
									{/* {
										postDetail.categories.map((category, index) => (
											<p className="mb-3 text-xs font-semibold tracking-wider text-red-700 uppercase" key={index}>
												{category}
											</p>
										))
									} */}
									<p className="mb-3 text-xs font-semibold tracking-wider text-red-700 uppercase">
										{postDetail.categories.join(", ")}
									</p>

									<p className="mb-3 text-gray-500">
										<time>{new Date(postDetail.publishedAt).toLocaleDateString()}</time>
									</p>
									<h1 className="mb-5 text-3xl font-bold md:text-4xl md:leading-tight">{postDetail.title}</h1>
									<Image
										src={postDetail.image}
										alt={postDetail.title}
										width={80}
										height={80}
										priority
										draggable={false}
										className="w-16 h-16 rounded-full"
									/>
								</div>
							</div>

							{/* Post content */}
							<div className="px-4 pt-24 xl:container text-zinc-300">
								<div className="pb-20 lg:pb-[130px] ">
									<div className="mx-auto max-w-[920px]">
										<div className="prose dark:prose-invert w-full max-w-full">
											{parse(postDetail.content)}

										</div>
									</div>
								</div>
							</div>
						</article>
					) : (
						<p className="text-4xl text-zinc-100">Post not found...</p>
					)
				)
			}
		</>
	);
};

export default BlogDetailPost;

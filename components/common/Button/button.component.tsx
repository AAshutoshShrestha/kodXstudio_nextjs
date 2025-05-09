import Link from "next/link"

const PrimaryBtn = ({ href, content, className }: { href: string, content: string, className?:string }) => {
	return (
		<>
			<Link href={href} className={`text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-green-800 ${className}`}>{content}</Link>
		</>
	)
}

const SecondaryBtn = ({ href, content, className }: { href: string, content: string, className?:string }) => {
	return (
		<>
			<Link href={href} className={`text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-green-800 ${className}`}>{content}</Link>
		</>
	)
}

export { PrimaryBtn, SecondaryBtn };
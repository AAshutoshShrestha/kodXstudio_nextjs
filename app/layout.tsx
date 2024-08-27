import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/common/navbar/navbar";
import Footer from "@/components/common/navbar/footer.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "KodXstudio | Nepal",
	description: "Remember us for ui/ux design and Web development with MERN-stack, React.js & Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-zinc-950">

			<body className={inter.className}>
				<TopNavbar className="top-2" />
				{children}
				<Footer />
			</body>
		</html>
	);
}

export interface MenuitemProps {
	setActive: (item: string) => void;
	active: string | null;
	item: string;
	children?: React.ReactNode;
}
export interface ProductProps {
	title: string;
	description: string;
	href: string;
	src: string;
}

export const transition = {
	type: "spring",
	mass: 0.5,
	damping: 11.5,
	stiffness: 100,
	restDelta: 0.001,
	restSpeed: 0.001,
};
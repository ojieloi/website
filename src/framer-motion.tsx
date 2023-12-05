import { Variants } from "framer-motion";

export const SimpleAppearVariants: Variants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1,
		},
	},
};

export const ListItemVariants: Variants = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export const staggerChildrenVariant = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
		},
	},
};
export const slideUp = {
	hidden: {
		y: '50px',
		opacity: 0,
		scale: 0.95,
	},
	visible: {
		y: '0px',
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.7,
		},
	},
};
export const slideDown = {
	hidden: {
		y: '-50px',
		opacity: 0,
	},
	visible: {
		y: '0px',
		opacity: 1,
		transition: {
			duration: 0.7,
		},
	},
};
export const slideRight = {
	hidden: {
		x: '-100px',
		opacity: 0,
	},
	visible: {
		x: '0px',
		opacity: 1,
		transition: {
			duration: 0.7,
		},
	},
};
export const slideLeft = {
	hidden: {
		x: '100px',
		opacity: 0,
	},
	visible: {
		x: '0px',
		opacity: 1,
		transition: {
			duration: 0.7,
		},
	},
};
export const fadeIn = {
	hidden: {
		opacity: 0,
		scale: 0.8,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.7,
		},
	},
};
export const zoomInDelayed = {
	hidden: {
		scale: 0,
	},
	visible: {
		scale: 1,
		transition: {
			duration: 0.7,
			delay: 1,
		},
	},
};

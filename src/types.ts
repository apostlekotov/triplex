export type PreviewType = {
	title: string;
	slug: string;
	img: any;
	description_en?: string;
	description_sv?: string;
	tags: Array<TagType>;
};

export type BlogType = {
	title: string;
	slug: string;
	img: any;
	banner: any;
	description: string;
	text: string;
	tags: Array<TagType>;
};

export type TagType = {
	tag: string;
};

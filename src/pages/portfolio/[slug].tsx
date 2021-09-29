import { useRouter } from 'next/router';
import { getBlogBySlug, getSlugs } from '@/utils/api';
import { BlogType } from 'types';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { Contacts } from '@/components/Contacts';

interface PortfolioBlogProps {
	post: BlogType;
}

const PortfolioBlog = ({ post }: PortfolioBlogProps) => {
	const router = useRouter();

	return (
		<>
			{router.isFallback ? (
				<span>Loading…</span>
			) : (
				<>
					<Head>
						<title>Triplex - {post.title}</title>
						<meta name='description' content={post.description} />
					</Head>

					<article>
						<div className='container'>
							<div className='tags'>
								{post.tags.map(({ tag }, i) => (
									<small key={i} className='text-primary text-uppercase'>
										{i == 0 ? '' : `| `}
										{tag}{' '}
									</small>
								))}
							</div>

							<h1 className='h1 display-3 mb-2'>{post.title}</h1>
							<p className='lead'>{post.description}</p>
						</div>

						<div className='banner my-5 mx-auto'>
							<img
								className='img-fluid img-banner'
								src={post.banner?.url}
								alt={post.title}
							/>
							<img
								className='img-fluid img-sq'
								src={post.img?.formats.medium.url}
								alt={post.title}
							/>
						</div>

						<div className='container'>
							<ReactMarkdown allowDangerousHtml children={post.text} />
						</div>
					</article>

					<Contacts />
				</>
			)}
		</>
	);
};

export const getStaticProps = async ({ params }: any) => {
	const post = await getBlogBySlug('en', params.slug);

	post.description = post.description_en || post.description_sv || '';
	post.text = post.text_en || post.text_sv || '';

	return {
		props: { post },
		revalidate: 10,
	};
};

export async function getStaticPaths() {
	const slugs = await getSlugs();
	return {
		paths: slugs?.map(({ slug }: any) => `/portfolio/${slug}`) || [],
		fallback: false,
	};
}

export default PortfolioBlog;

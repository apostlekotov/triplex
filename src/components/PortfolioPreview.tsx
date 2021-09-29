import React from 'react';
import Link from 'next/link';
import { PreviewType } from 'types';
import { motion } from 'framer-motion';

interface PortfolioPreviewProps {
	preview: Array<PreviewType>;
}

export const PortfolioPreview = ({ preview }: PortfolioPreviewProps) => {
	return (
		<>
			{preview.map(
				(
					{
						title,
						slug,
						img,
						tags,
						description_en,
						description_sv,
					}: PreviewType,
					i
				) => (
					<motion.div
						key={i}
						custom={i}
						initial='hidden'
						animate='visible'
						variants={{
							visible: (i: number) => ({
								opacity: 1,
								transition: {
									delay: 1 + i * 0.2,
								},
							}),
							hidden: { opacity: 0 },
						}}
						className='card-it'
					>
						<Link href={`/portfolio/${slug}`}>
							<a className='card'>
								<div className='card-im'>
									{/* <Image
										src={img?.formats.medium.url || ''}
										alt={title}
										unsized
										quality={95}
									/> */}
									<img src={img?.formats.medium.url || ''} alt={title} />
								</div>
								<div className='card-bdy p-4'>
									<span className='card-text'>
										<b>{title}</b> - {description_en || description_sv}
									</span>
									<p className='m-0'>
										{tags.map(({ tag }, i) => (
											<small key={i} className='text-muted text-uppercase'>
												{i == 0 ? '' : `| `}
												{tag}{' '}
											</small>
										))}
									</p>
								</div>
							</a>
						</Link>
					</motion.div>
				)
			)}
		</>
	);
};

import Head from 'next/head';
import Link from 'next/link';
import { Services } from '@/components/Services';
import { PortfolioPreview } from '@/components/PortfolioPreview';
import { Contacts } from '@/components/Contacts';

import { getPreview } from '@/utils/api';
import { PreviewType } from 'types';

interface PortfolioProps {
	preview: PreviewType[];
}

const Index = ({ preview }: PortfolioProps) => {
	return (
		<>
			<Head>
				<title>Triplex - IT laboratory of the future</title>
			</Head>

			<main className='hero container'>
				<div className='d-flex flex-column'>
					<h1 className='h1 display-1'>Triplex</h1>
					<span className='display-4'>
						IT laboratory <br />
						of the <strong>future</strong>
					</span>
					<Link href='/about'>
						<a className='btn btn-primary mt-4 mr-auto me-auto'>About us</a>
					</Link>
				</div>

				<div className='card-hero'>
					<PortfolioPreview preview={preview} />
				</div>
			</main>

			<section className='services container d-flex flex-column'>
				<h2 className='h2 display-3 mb-5'>Services</h2>

				<Services />
			</section>

			<section className='portfolio-preview container d-flex flex-column my-5'>
				<h2 className='h2 display-3 mb-5'>Our Portfolio</h2>

				<div className='card-grid crutch container'>
					<PortfolioPreview preview={preview} />
				</div>

				<Link href='/portfolio'>
					<a className='btn btn-secondary mb-5 mx-auto'>More</a>
				</Link>
			</section>

			<Contacts />
		</>
	);
};

export const getStaticProps = async () => {
	const preview = await getPreview('en');

	return {
		props: { preview },
		revalidate: 10,
	};
};

export default Index;

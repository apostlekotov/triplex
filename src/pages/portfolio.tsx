import Head from 'next/head';
import { PortfolioPreview } from '@/components/PortfolioPreview';
import { Contacts } from '@/components/Contacts';

import { getPreview } from '@/utils/api';
import { PreviewType } from 'types';

interface PortfolioProps {
	preview: PreviewType[];
}

const Portfolio = ({ preview }: PortfolioProps) => (
	<>
		<Head>
			<title>Triplex - Portfolio</title>
		</Head>

		<main className='container'>
			<h2 className='h1 display-1 mb-5'>Portfolio</h2>

			<div className='card-grid container'>
				<PortfolioPreview preview={preview} />
			</div>
		</main>

		<Contacts />
	</>
);

export const getStaticProps = async () => {
	const preview = await getPreview('en', 100);

	return {
		props: { preview },
		revalidate: 10,
	};
};

export default Portfolio;

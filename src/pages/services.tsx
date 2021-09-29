import Head from 'next/head';
import { Contacts } from '@/components/Contacts';
import { Services } from '@/components/Services';

const About = () => {
	return (
		<>
			<Head>
				<title>Triplex - Our Services</title>
			</Head>

			<main className='services container d-flex flex-column'>
				<h2 className='h1 display-1 mb-5'>Our Services</h2>

				<Services />
			</main>

			<Contacts />
		</>
	);
};

export default About;

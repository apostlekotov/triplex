import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';
import { Contacts } from '@/components/Contacts';

const About = () => {
	return (
		<>
			<Head>
				<title>Triplex - About</title>
			</Head>

			<main className='container row align-middle m-auto'>
				<div className='d-flex flex-column justify-content-center col-12 col-lg-6 text-center text-md-start mb-5 mb-md-0'>
					<h1 className='h2 display-1'>About Us</h1>
					<span className='lead'>
						We are a team of professionalists with great passion, energy, and
						high knowledge for what we do! We love finding solutions to
						complicated problems by solving the unsolvable We always{' '}
						<strong>think big, design smart, and develop fast</strong>. We're
						ready to turn any of your idea into a reality.
					</span>
					<Link href='/portfolio'>
						<a className='btn btn-secondary mt-4 mx-auto ml-md-0 ms-md-0'>
							Portfolio
						</a>
					</Link>
				</div>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={{
						hidden: { opacity: 0, y: '2rem' },
						visible: { opacity: 1, y: 0 },
					}}
					transition={{
						ease: 'easeInOut',
						delay: 1.25,
					}}
					className='col-10 col-lg-5 pt-5 pl-lg-5 ps-lg-5 pt-lg-0 m-auto'
				>
					<img
						src='/img/glass.svg'
						className='w-100'
						// unsized
						alt='triplex logo'
					/>
				</motion.div>
			</main>

			<Contacts />
		</>
	);
};

export default About;

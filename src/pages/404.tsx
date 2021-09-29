import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Custom404 = () => {
	const [fired, setFired] = useState('');

	return (
		<>
			<Head>
				<title>Triplex | Not Found </title>
				<meta name='robots' content='noindex, nofollow' />
			</Head>

			<main className='err-page text-center'>
				<div className='container'>
					<h1 className='h2 display-1 text-center mb-4'>
						404 - page not found
					</h1>
					<p className='lead'>
						One of the developer must be punished for this unacceptable failure
					</p>
					<span className='display-6 text-uppercase'>Pick who fire!</span>

					<div className='contatier w-100 d-flex flex-column flex-sm-row justify-content-center mt-5'>
						<div
							className='dev-img d-flex flex-column mb-5 mx-auto mx-sm-5'
							onClick={() => setFired('Paul')}
						>
							<img
								src={`/img/${fired == 'Paul' ? 'fired-' : ''}kotov.png`}
								height='250px'
								alt='developer'
							/>
							<span
								className={`mt-4 text-muted ${
									fired == 'Paul' ? 'text-decoration-line-through' : ''
								}`}
							>
								Paul Kotov
							</span>
						</div>
						<div className='dev-img d-flex flex-column mb-5 mx-auto mx-sm-5'>
							<img
								src={`/img/${fired == 'Daniel' ? 'fired-' : ''}daniel.png`}
								height='250px'
								alt='developer'
								onClick={() => setFired('Daniel')}
							/>
							<span
								className={`mt-4 text-muted ${
									fired == 'Daniel' ? 'text-decoration-line-through' : ''
								}`}
							>
								Daniel Cherman
							</span>
						</div>
					</div>

					<div className='d-none d-sm-block'>
						<Link href='/'>
							<a className='btn btn-primary'>Back</a>
						</Link>
					</div>

					<div className='d-block d-sm-none position-fixed bottom-0 left-0 w-100 mb-4 px-5'>
						<Link href='/'>
							<a className='btn btn-primary w-100'>Back</a>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
};

export default Custom404;

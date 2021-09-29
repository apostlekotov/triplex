import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { NavLink } from '@/components/NavLink';
import { Links } from '@/components/Links';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.header
			className={isOpen ? 'open' : ''}
			initial='hidden'
			animate='visible'
			variants={{
				hidden: { opacity: 0 },
				visible: { opacity: 1 },
				transition: {
					transition: { ease: 'easeInOut' },
				},
			}}
		>
			<div className='navbar navbar-expand-lg fixed-top drop-shadow'>
				<div className='navbar-toggler d-block d-lg-none '>
					<i
						className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}
						onClick={() => setIsOpen(!isOpen)}
					></i>
				</div>

				<Link href='/'>
					<a className='navbar-brand d-flex align-items-center mr-0 me-0'>
						<img src='/img/glass.svg' height='42px' alt='triplex logo' />
						<img
							src='/img/triplex.svg'
							height='30px'
							alt='Triplex'
							className='ml-3 ms-3'
						/>
					</a>
				</Link>

				<nav className={isOpen ? 'open' : ''} onClick={() => setIsOpen(false)}>
					<ul className='navbar-nav font-weight-bold fw-bold fw-bold'>
						<li className='nav-item'>
							<NavLink href='/about'> About </NavLink>
						</li>
						<li className='nav-item'>
							<NavLink href='/services'> Our Services </NavLink>
						</li>
						<li className='nav-item'>
							<NavLink href='/portfolio'> Portfolio </NavLink>
						</li>
						<li className='nav-item'>
							<a href='#contacts'>Contacts</a>
						</li>
					</ul>
				</nav>

				<div className='d-none d-sm-flex fs-2'>
					<Links />
				</div>
			</div>
		</motion.header>
	);
};

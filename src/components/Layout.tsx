import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<motion.div
				initial='hidden'
				animate='visible'
				exit={{ opacity: 0 }}
				variants={{
					hidden: { opacity: 0 },
					visible: { opacity: 1 },
				}}
				transition={{
					ease: 'easeInOut',
					delay: 0.5,
				}}
			>
				{children}
			</motion.div>
			<Footer />
		</>
	);
};

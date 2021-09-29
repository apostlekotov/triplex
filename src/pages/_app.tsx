import type { AppProps } from 'next/app';
import useRouterScroll from '../utils/useRouterScroll';
import { AnimatePresence } from 'framer-motion';

import { Meta } from '@/components/Meta';
import { Layout } from '@/components/Layout';

import '@/styles/style.scss';

export default function App({ Component, pageProps, router }: AppProps) {
	useRouterScroll();

	return (
		<AnimatePresence exitBeforeEnter>
			<Layout key={router.route}>
				<Meta />
				<Component {...pageProps} />
			</Layout>
		</AnimatePresence>
	);
}

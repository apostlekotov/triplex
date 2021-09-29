import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useRouterScroll = ({ left = 0, top = 0 } = {}) => {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChangeComplete = () => {
			document.body.scrollTo({ top, left });
		};

		router.events.on('routeChangeComplete', handleRouteChangeComplete);

		// If the component is unmounted, unsubscribe from the event
		return () => {
			router.events.off('routeChangeComplete', handleRouteChangeComplete);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [left, top]);
};

export default useRouterScroll;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import localFont from 'next/font/local';

import type { AppProps } from 'next/app';

const pretendard = localFont({
	src: '../fonts/PretendardVariable.woff2',
	variable: '--font-family',
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<style jsx global>{`
					:root {
						--font-family: ${pretendard.style.fontFamily};
					}
				`}</style>
				<Component {...pageProps} />
			</QueryClientProvider>
		</>
	);
}

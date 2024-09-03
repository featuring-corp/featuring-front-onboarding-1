import localFont from 'next/font/local';

import type { AppProps } from 'next/app';

const pretendard = localFont({
	src: '../fonts/PretendardVariable.woff2',
	variable: '--font-family',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				:root {
					--font-family: ${pretendard.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</>
	);
}

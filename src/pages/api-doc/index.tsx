import { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { createSwaggerSpec } from 'next-swagger-doc';

import 'swagger-ui-react/swagger-ui.css';
import { apiDocSpec } from '@/lib/swagger';

const SwaggerUI = dynamic<{
	spec?: any;
}>(import('swagger-ui-react'), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
	return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
	const spec: Record<string, any> = createSwaggerSpec({
		...apiDocSpec,
	});

	return {
		props: {
			spec,
		},
	};
};

export default ApiDoc;

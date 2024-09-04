import { withSwagger } from 'next-swagger-doc';

import { apiDocSpec } from '@/lib/swagger';

const swaggerHandler = withSwagger({
	...apiDocSpec,
});
export default swaggerHandler();

import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';
import { typoVariant } from '@/styles/typography.css';

export const influenceCard = style([
	sprinkles({ bgColor: 'background-1' }),
	{
		width: '240px',
		height: '120px',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		wordBreak: 'break-all',
		borderRadius: '4px',
	},
]);

export const influenceCardWrapper = style([
	{
		display: 'flex',
		gap: '12px',
	},
]);

export const title = style([
	typoVariant.heading[4],
	{
		marginTop: '82px',
		marginBottom: '24px',
	},
]);

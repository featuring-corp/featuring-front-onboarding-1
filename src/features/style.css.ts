import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';
import { typoVariant } from '@/styles/typography.css';

export const wapper = style([
	{
		display: 'flex',
	},
]);

export const navContainer = style([
	sprinkles({ bgColor: 'background-1' }),
	{
		display: 'flex',
		flexDirection: 'column',
		width: '240px',
		padding: '12px',
		wordBreak: 'keep-all',
		gap: '12px',
		overflow: 'hidden',
		'@media': {
			'screen and (max-width: 767px)': {
				padding: '80px 16px',
				gap: '48px',
			},
		},
	},
]);

export const mainContainer = style([
	sprinkles({ bgColor: 'background-2' }),
	{
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		wordBreak: 'keep-all',
		gap: '80px',
		overflow: 'hidden',
		'@media': {
			'screen and (max-width: 767px)': {
				padding: '80px 16px',
				gap: '48px',
			},
		},
	},
]);

export const header = style([
	sprinkles({ bgColor: 'background-1' }),
	{
		position: 'absolute',
		display: 'flex',
		top: '0px',
		width: '100%',
		height: '50px',
	},
]);

export const title = style([
	typoVariant.heading[4],
	{
		marginBottom: '24px',
	},
]);

export const membershipContainer = style([
	sprinkles({ bgColor: 'background-1' }),
	{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '1136px',
		height: '188px',
	},
]);

export const membershipInfoBox = style([
	sprinkles({ bgColor: 'background-2' }),
	{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '300px',
		height: '144px',
		borderRadius: '4px',
		justifyContent: 'center',
	},
]);

export const membershipDetailBox = style([
	sprinkles({ bgColor: 'background-2' }),

	{
		width: '372px',
		height: '66px',
	},
]);
export const membershipDetailBoxWrapper = style([
	{
		display: 'flex',
		flexWrap: 'wrap',
	},
]);

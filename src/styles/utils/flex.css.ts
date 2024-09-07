import { recipe } from '@vanilla-extract/recipes';

import { spacing } from '../sprinkles.css';

type SpacingToken = keyof typeof spacing;
type SpacingVariantDefinition = Record<SpacingToken, Record<string, string>>;

const spacingTokens: SpacingToken[] = Object.keys(spacing) as SpacingToken[];

const getGapVariant = () =>
	spacingTokens.reduce<SpacingVariantDefinition>((acc, token) => {
		acc[token] = { gap: spacing[token] };
		return acc;
	}, {} as SpacingVariantDefinition);

export const flex = recipe({
	base: {
		display: 'flex',
	},
	variants: {
		display: {
			flex: { display: 'flex' },
			inlineFlex: { display: 'inline-flex' },
		},
		justify: {
			start: { justifyContent: 'flex-start' },
			center: { justifyContent: 'center' },
			end: { justifyContent: 'flex-end' },
			between: { justifyContent: 'space-between' },
		},
		align: {
			center: { alignItems: 'center' },
			start: { alignItems: 'flex-start' },
			end: { alignItems: 'flex-end' },
			stretch: { alignItems: 'stretch' },
		},
		direction: {
			row: { flexDirection: 'row' },
			column: { flexDirection: 'column' },
			rowReverse: { flexDirection: 'row-reverse' },
			columnReverse: { flexDirection: 'column-reverse' },
		},
		gap: getGapVariant(),
	},
	defaultVariants: {
		display: 'flex',
		justify: 'start',
		align: 'center',
		direction: 'row',
	},
});

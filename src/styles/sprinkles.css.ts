import { transformObject } from '@featuring-corp/design-tokens';
import { type Colors, type Elevation, type Radius, type Space } from '@featuring-corp/design-tokens/tokens/global';
import { type SemanticColor } from '@featuring-corp/design-tokens/tokens/semantic';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from './theme.css';

export const colors = {
	...transformObject<SemanticColor>(vars.semantic.color),
	...transformObject<Colors>(vars.global.colors),
};
export const shadows = {
	...transformObject<Elevation>({ elevation: vars.global.elevation }),
};
export const spacing = transformObject<Space>({ spacing: vars.global.spacing });
export const radius = transformObject<Radius>({ radius: vars.global.radius });

export const baseProperties = defineProperties({
	conditions: {
		default: {},
		hover: { selector: '&:hover' },
		active: { selector: '&:active' },
		focus: { selector: '&:focus' },
		disabled: { selector: '&:disabled' },
	},
	defaultCondition: 'default',
	properties: {
		color: colors,
		backgroundColor: colors,
		borderColor: colors,
		borderRadius: radius,
		paddingTop: spacing,
		paddingBottom: spacing,
		paddingLeft: spacing,
		paddingRight: spacing,
		marginTop: spacing,
		marginBottom: spacing,
		marginLeft: { ...spacing, auto: 'auto' },
		marginRight: { ...spacing, auto: 'auto' },
		gap: { ...spacing, none: 'none' },
		margin: spacing,
		whiteSpace: { 'pre-wrap': 'pre-wrap' },
		textAlign: { center: 'center' },
		boxShadow: shadows,
	},
	shorthands: {
		elevation: ['boxShadow'],
		rounded: ['borderRadius'],
		padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
		margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
		marginX: ['marginLeft', 'marginRight'],
		marginY: ['marginTop', 'marginBottom'],
		bgColor: ['backgroundColor'],
	},
});

export const sprinkles = createSprinkles(baseProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];

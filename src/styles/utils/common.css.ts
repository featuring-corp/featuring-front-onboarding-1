import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../sprinkles.css';
import { typoVariant } from '../typography.css';

export const cursor = recipe({
	base: {},
	variants: {
		value: {
			auto: { cursor: 'auto' },
			pointer: { cursor: 'pointer' },
			unset: { cursor: 'unset' },
		},
	},
	defaultVariants: {
		value: 'pointer',
	},
});

export const ellipsisLine = createVar();

/** ellipsis 유틸
 * ellipsisLine을 import 하여 라인 수를 조정 가능.
 */
export const ellipsis = style([
	{
		vars: {
			[ellipsisLine]: '1',
		},
		display: '-webkit-box',
		WebkitBoxOrient: 'vertical',
		wordWrap: 'break-word',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		whiteSpace: 'pre-wrap',
		wordBreak: 'break-all',
		WebkitLineClamp: [ellipsisLine],
	},
]);

/** width가 100%인 컨테이너 */
export const commonContainer = style({ width: '100%' });

/** a태그의 aria-disabled가 true인 경우 작동하지 않도록하는 style */
export const disabledAnchor = style({
	selectors: {
		'&[aria-disabled=true]': { pointerEvents: 'none' },
	},
});

/** tooltip중 ul을 사용하는 class */
export const tooltipUlClass = style([
	sprinkles({ paddingLeft: 'spacing-500', paddingRight: 'spacing-200', paddingY: 'spacing-100' }),
	typoVariant.body[1],
	{ listStyle: 'disc outside' },
]);

/** Flexbox의 flex: none */
export const flexNone = style({ flex: 'none' });

/** hover시 underline을 사용하는 class */
export const hoverUnderline = style({
	selectors: {
		'&:hover': { textDecoration: 'underline' },
	},
});

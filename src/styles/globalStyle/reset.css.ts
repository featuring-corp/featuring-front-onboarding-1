import { type GlobalStyleRule, globalStyle } from '@vanilla-extract/css';

import * as layers from './layers.css';
import { vars } from '../theme.css';

const setBoilerplate = (obj: GlobalStyleRule): GlobalStyleRule => ({
	'@layer': {
		[layers.reset]: {
			...obj,
		},
	},
});

globalStyle(
	'html',
	setBoilerplate({
		// lineHeight: 1.15,
		MozTextSizeAdjust: 'none',
		WebkitTextSizeAdjust: 'none',
		textSizeAdjust: 'none',
	}),
);

globalStyle('body', setBoilerplate({ margin: 0, color: vars.semantic.color.text[1] }));

globalStyle('main', setBoilerplate({ display: 'block' }));

globalStyle('h1', setBoilerplate({ fontSize: '2em', margin: '0.67em 0' }));

globalStyle('hr', setBoilerplate({ boxSizing: 'content-box', height: 0, overflow: 'visible' }));

globalStyle('pre', setBoilerplate({ fontFamily: 'monospace, monospace', fontSize: '1em' }));

globalStyle('a', setBoilerplate({ backgroundColor: 'transparent' }));

globalStyle('abbr[title]', setBoilerplate({ borderBottom: 'none', textDecoration: 'underline' }));

globalStyle('b, strong', setBoilerplate({ fontWeight: 'bolder' }));

globalStyle('code, kbd, samp', setBoilerplate({ fontFamily: 'monospace, monospace', fontSize: '1em' }));

globalStyle('small', setBoilerplate({ fontSize: '80%' }));

globalStyle(
	'sub, sup',
	setBoilerplate({
		fontSize: '75%',
		lineHeight: 0,
		position: 'relative',
		verticalAlign: 'baseline',
	}),
);

globalStyle('sub', setBoilerplate({ bottom: '-0.25em' }));

globalStyle('sup', setBoilerplate({ top: '-0.5em' }));

globalStyle('img', setBoilerplate({ borderStyle: 'none', maxInlineSize: '100%', maxBlockSize: '100%' }));

// Reapply the pointer cursor for anchor tags
globalStyle(
	'a, button, label, input, select',
	setBoilerplate({
		cursor: 'pointer',
	}),
);

globalStyle(
	'button, input, optgroup, select, textarea',
	setBoilerplate({
		fontFamily: 'inherit',
		fontSize: '100%',
		lineHeight: 1.15,
		margin: 0,
	}),
);

globalStyle('button, input', setBoilerplate({ overflow: 'visible' }));

globalStyle('button, select', setBoilerplate({ textTransform: 'none' }));

globalStyle(
	"button, [type='button'], [type='reset'], [type='submit']",
	setBoilerplate({ WebkitAppearance: 'button', appearance: 'button' }),
);

globalStyle(
	"button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner",
	setBoilerplate({ borderStyle: 'none', padding: 0 }),
);

globalStyle(
	"button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring",
	setBoilerplate({ outline: '1px dotted ButtonText' }),
);

globalStyle('fieldset', { padding: '0' });

globalStyle(
	'legend',
	setBoilerplate({
		boxSizing: 'border-box',
		color: 'inherit',
		display: 'table',
		maxWidth: '100%',
		padding: 0,
		whiteSpace: 'normal',
	}),
);

globalStyle('progress', setBoilerplate({ verticalAlign: 'baseline' }));

globalStyle('textarea', setBoilerplate({ overflow: 'auto', whiteSpace: 'revert' }));

/**
 * Safari - solving issue when using user-select:none on the <body> text input
 * doesn't working
 */
globalStyle(
	'input, textarea',
	setBoilerplate({
		WebkitUserSelect: 'auto',
	}),
);

globalStyle(
	"[type='checkbox'],[type='radio']",
	setBoilerplate({
		boxSizing: 'border-box',
		padding: 0,
	}),
);

globalStyle(
	"[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button",
	setBoilerplate({ height: 'auto' }),
);

globalStyle(
	"[type='search']",
	setBoilerplate({
		WebkitAppearance: 'textfield',
		appearance: 'textfield',
		outlineOffset: '-2px',
	}),
);
globalStyle("[type='search']::-webkit-search-decoration", setBoilerplate({ WebkitAppearance: 'none' }));

globalStyle('::-webkit-file-upload-button', setBoilerplate({ WebkitAppearance: 'button', font: 'inherit' }));

globalStyle('details', setBoilerplate({ display: 'block' }));

globalStyle('summary', setBoilerplate({ display: 'list-item' }));

globalStyle('template', setBoilerplate({ display: 'none' }));

globalStyle('[hidden]', setBoilerplate({ display: 'none' }));

globalStyle('[disabled]', setBoilerplate({ pointerEvents: 'none', cursor: 'not-allowed' }));

// Preferred box-sizing value
globalStyle('*, *::before, *::after, span', { boxSizing: 'border-box' });

globalStyle('*:focus:not(:focus-visible)', setBoilerplate({ outline: 'none' }));

// Remove list styles (bullets/numbers)
globalStyle(
	'ol, ul, menu, summary',
	setBoilerplate({
		listStyle: 'none',
	}),
);

// Removes spacing between cells in tables
globalStyle(
	'table',
	setBoilerplate({
		borderCollapse: 'collapse',
	}),
);

/**
 * Minimum style to allow to style meter element
 */
globalStyle(
	'meter',
	setBoilerplate({
		WebkitAppearance: 'revert',
		appearance: 'revert',
	}),
);

// Reset default text opacity of input placeholder
globalStyle(
	'::placeholder',
	setBoilerplate({
		color: 'unset',
	}),
);

/**
 * Remove all the styles of the "User-Agent-Stylesheet", except for the
 * 'display' property
 *
 * - The "symbol *" part is to solve Firefox SVG sprite bug
 * - The "html" element is excluded, otherwise a bug in Chrome breaks the CSS
 *   hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)
 */
globalStyle(
	'*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))',
	setBoilerplate({ all: 'unset', display: 'revert' }),
);

/**
 * Revert for bug in Chromium browsers
 *
 * - Fix for the content editable attribute will work properly.
 * - Webkit-user-select: auto; added for Safari in case of using user-select:none
 *   on wrapper element
 */
globalStyle(
	':where([contenteditable]:not([contenteditable="false"]))',
	setBoilerplate({
		MozUserModify: 'read-write',
		WebkitUserModify: 'read-write',
		overflowWrap: 'break-word',
		// @ts-expect-error: -webkit-line-break is a non-standard property
		WebkitLineBreak: 'after-white-space',
		WebkitUserSelect: 'auto',
	}),
);

// Apply back the draggable feature - exist only in Chromium and Safari
globalStyle(
	':where([draggable="true"])',
	setBoilerplate({
		// @ts-expect-error: -webkit-user-drag is a non-standard property
		WebkitUserDrag: 'element',
	}),
);

// Revert Modal native behavior
globalStyle(
	':where(dialog:modal)',
	setBoilerplate({
		all: 'revert',
		boxSizing: 'border-box',
	}),
);

/**
 * Preformatted text - use only for this feature
 */
globalStyle(
	':where(pre)',
	setBoilerplate({
		all: 'revert',
		boxSizing: 'border-box',
	}),
);

/**
 * Fix the feature of 'hidden' attribute. display:revert; revert to element
 * instead of attribute
 */
globalStyle(
	':where([hidden])',
	setBoilerplate({
		display: 'none',
	}),
);

/** overlay-scrollbars style */
globalStyle(
	'.os-scrollbar',
	setBoilerplate({
		vars: {
			'--os-size': '14px !important',
			'--os-handle-bg': 'rgb(66 66 66 / 25%) !important',
			'--os-handle-bg-hover': `${vars.global.colors.gray[60]} !important`,
			'--os-padding-perpendicular': '3px !important',
		},
	}),
);

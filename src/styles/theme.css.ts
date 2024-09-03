import { getGlobalColors, getVarName, global, semantic } from '@featuring-corp/design-tokens';
import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';

export const vars = createGlobalThemeContract(
	{ global: { ...global, colors: getGlobalColors('dataEffect') }, semantic },
	getVarName,
);

createGlobalTheme(':root', vars, {
	global: {
		...global,
		typography: { ...global.typography, font: { sans: 'var(--font-family), Pretendard, sans-serif' } },
		colors: getGlobalColors('dataEffect'),
	},
	semantic,
});

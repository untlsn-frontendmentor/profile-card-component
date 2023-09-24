import {
	defineConfig, presetTypography, presetUno, presetWind, presetWebFonts, transformerDirectives,
	transformerCompileClass, transformerVariantGroup,
} from 'unocss';
import { presetAio } from 'untcss/preset';


export default defineConfig({
	presets: [
		presetTypography(),
		presetUno(),
		presetWind(),
		presetWebFonts({
			fonts: {
				sans: 'Roboto',
			},
			provider: 'bunny',
		}),
		presetAio(),
	],
	transformers: [
		transformerDirectives(),
		transformerCompileClass(),
		transformerVariantGroup(),
	],
});

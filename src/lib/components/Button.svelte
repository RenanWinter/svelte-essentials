<!-- Button.svelte -->
<script lang="ts">
	//TODO: Adicionar LoaderSpinner e Icones após implementados estes componentes

	import type {
		ButtonColor,
		ButtonProps,
		ButtonShape,
		ButtonSize,
		ButtonStyle
	} from './Button.types.js';

	let {
		color = 'primary',
		block = false,
		wide = false,
		shape = 'rect',
		style = 'regular',
		size = 'sm',
		disabled = false,
		loading = false,
		context,
		disableOnClick = false,
		loadingOnClick = false,
		classed = '',
		styled = '',
		onclick = async () => {},
		label = 'Botão',
		labelLoading = '',
		labelDisabled = '',
		children
	}: ButtonProps = $props();

	let waitingClickResponse = $state(false);
	let isLoading = $derived(loading || (loadingOnClick && waitingClickResponse));
	let isDisabled = $derived(disabled || (disableOnClick && waitingClickResponse));
	let labelToShow = $derived(() => {
		if (isLoading) {
			return labelLoading || label;
		}
		if (isDisabled) {
			return labelDisabled || label;
		}
		return label;
	});

	let btnClasses = $derived(() => {
		let classes = ['btn'];
		classes.push(getColorClass(color));
		classes.push(getStyleClass(style));
		classes.push(getSizeClass(size));
		classes.push(getShapeClass(shape));
		block && classes.push('btn-block');
		wide && classes.push('btn-wide');
		classes.push(classed);
		return classes.filter(Boolean).join(' ');
	});

	function getColorClass(color: ButtonColor) {
		let colorClasses: Record<ButtonColor, string> = {
			brand: 'btn-brand',
			neutral: 'btn-neutral',
			primary: 'btn-primary',
			secondary: 'btn-secondary',
			accent: 'btn-accent',
			info: 'btn-info',
			success: 'btn-success',
			warning: 'btn-warning',
			error: 'btn-error'
		};
		return colorClasses[color] || 'btn-neutral';
	}

	function getStyleClass(style: ButtonStyle) {
		let styleClasses: Record<ButtonStyle, string> = {
			regular: '',
			outline: 'btn-outline',
			dash: 'btn-dash',
			soft: 'btn-soft',
			ghost: 'btn-ghost',
			link: 'btn-link'
		};
		return styleClasses[style] || '';
	}

	function getSizeClass(size: ButtonSize) {
		let sizeClasses: Record<ButtonSize, string> = {
			xs: 'btn-xs',
			sm: 'btn-sm',
			md: 'btn-md',
			lg: 'btn-lg',
			xl: 'btn-xl'
		};
		return sizeClasses[size] || 'btn-sm';
	}

	function getShapeClass(shape: ButtonShape) {
		let shapeClasses: Record<ButtonShape, string> = {
			rect: '',
			square: 'btn-square',
			circle: 'btn-circle'
		};
		return shapeClasses[shape] || '';
	}

	async function handleClick() {
		waitingClickResponse = true;
		await onclick(context);
		waitingClickResponse = false;
	}
</script>

<button class={btnClasses()} style={styled} onclick={handleClick} disabled={isDisabled}>
	{#if children}
		{@render children?.()}
	{:else}
		{@html labelToShow()}
	{/if}
</button>

<style>
	.btn-brand {
		background-color: var(--brand-color, #000);
		color: var(--brand-color-contrast, #fff);
	}
</style>

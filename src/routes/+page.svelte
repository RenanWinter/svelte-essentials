<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	const handleClick = async (context?: unknown) => {
		console.log('Button clicked!', context);
		// Simulate async operation
		await new Promise((resolve) => setTimeout(resolve, 2000));
	};
</script>

<div class="container mx-auto p-8">
	<h1 class="mb-8 text-3xl font-bold">Button Component Showcase</h1>

	<!-- Colors Section -->
	<section class="mb-8">
		<h2 class="mb-4 text-2xl font-semibold">Colors</h2>
		<div class="flex flex-wrap gap-4">
			<Button color="brand" label="Brand" onclick={handleClick} labelDisabled="Wait..." disableOnClick/>
			<Button color="neutral" label="Neutral" onclick={handleClick} labelLoading="Loading..." loadingOnClick />
			<Button color="primary" label="Primary" onclick={handleClick} />
			<Button color="secondary" label="Secondary" onclick={handleClick} />
			<Button color="accent" label="Accent" onclick={handleClick} />
			<Button color="info" label="Info" onclick={handleClick} />
			<Button color="success" label="Success" onclick={handleClick} />
			<Button color="warning" label="Warning" onclick={handleClick} />
			<Button color="error" label="Error" onclick={handleClick} />
		</div>
	</section>

	<!-- Styles Section -->
	<section class="mb-8">
		<h2 class="mb-4 text-2xl font-semibold">Styles</h2>
		<div class="flex flex-wrap gap-4">
			<Button style="regular" label="Regular" onclick={handleClick} />
			<Button style="outline" label="Outline" onclick={handleClick} />
			<Button style="dash" label="Dash" onclick={handleClick} />
			<Button style="soft" label="Soft" onclick={handleClick} />
			<Button style="ghost" label="Ghost" onclick={handleClick} />
			<Button style="link" label="Link" onclick={handleClick} />
		</div>
	</section>

	<!-- Sizes Section -->
	<section class="mb-8">
		<h2 class="mb-4 text-2xl font-semibold">Sizes</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Button size="xs" label="Extra Small" onclick={handleClick} />
			<Button size="sm" label="Small" onclick={handleClick} />
			<Button size="md" label="Medium" onclick={handleClick} />
			<Button size="lg" label="Large" onclick={handleClick} />
			<Button size="xl" label="Extra Large" onclick={handleClick} />
		</div>
	</section>

	<!-- Shapes Section -->
	<section class="mb-8">
		<h2 class="mb-4 text-2xl font-semibold">Shapes</h2>
		<div class="flex flex-wrap gap-4">
			<Button shape="rect" label="Rectangle" onclick={handleClick} />
			<Button shape="square" label="□" onclick={handleClick} />
			<Button shape="circle" label="○" onclick={handleClick} />
		</div>
	</section>

	<!-- States Section -->
	<section class="mb-8">
		<h2 class="mb-4 text-2xl font-semibold">States</h2>
		<div class="flex flex-wrap gap-4">
			<Button label="Normal" onclick={handleClick} />
			<Button disabled label="Disabled" onclick={handleClick} />
			<Button loading label="Loading" onclick={handleClick} />
			<Button loadingOnClick label="Loading on Click" onclick={handleClick} />
			<Button disableOnClick label="Disable on Click" onclick={handleClick} />
		</div>
	</section>

	<!-- Width Variants Section -->
	<section class="mb-8">
		<h2 class="mb-4 text-2xl font-semibold">Width Variants</h2>
		<div class="flex flex-col gap-4">
			<Button label="Normal Button" onclick={handleClick} />
			<Button wide label="Wide Button" onclick={handleClick} />
			<Button block label="Block Button" onclick={handleClick} />
		</div>
	</section>

	<!-- Custom Styling Section -->
	<section class="mb-8">
		<h2 class="mb-4 text-2xl font-semibold">Custom Styling</h2>
		<div class="flex flex-wrap gap-4">
			<Button
				label="Custom Classes"
				classed="shadow-lg hover:shadow-xl transition-shadow"
				onclick={handleClick}
			/>
			<Button
				styled="background: linear-gradient(90deg, #ff6b6b, #ff8e53); border: none;"
				onclick={handleClick}
			>
				Custom Styles snippet
			</Button>
		</div>
	</section>
</div>

<style>
	.container {
		max-width: 1200px;
	}
</style>

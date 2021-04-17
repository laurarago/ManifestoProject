<script>
	import Scatter from './ScatterCanvas.svelte';
	import Scroller from '@sveltejs/svelte-scroller'
	export let groupedData;

	let index = 0;


</script>

<main>
	<h1>Hello Project!</h1>
	<Scroller top={0} bottom={1} bind:index>
		<div slot="background">
			<div class="chartContainer">
			<Scatter 
				data={groupedData}
				layout='fs'
				step={index}/>
			</div>
		</div>

		<div slot="foreground">
			<section>This is the first section.</section>
			<section>This is the second section.</section>
			<section>This is the third section.</section>
			<section>This is the fourth section.</section>
			<section>This is the fifth section.</section>
			<section>This is the sixth section.</section>
			<section>This is the seventh section.</section>
		</div>
	</Scroller>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	section { height: 80vh; }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
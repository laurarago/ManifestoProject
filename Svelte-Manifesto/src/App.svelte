<script>
	import Scatter from './ScatterCanvas.svelte';
	import Scroller from '@sveltejs/svelte-scroller'
	export let groupedData;

	let index = 0;


</script>

<main>
	<div class="intro">
		<h1>The <b>green</b> shift</h1>
		<p>How Europe has turned green in the last 30 years</p>
	</div>
	<div class="text-container">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. </p>
	<div class="no-events">
	<Scroller top={0} bottom={1} bind:index>
		<div slot="background">
			<Scatter 
				data={groupedData}
				layout='fs'
				step={index}/>
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
</div>

	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	section {
		height: 80vh;
		
	}

	.no-events {
		pointer-events:none;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<script>
	import Scatter from './ScatterCanvas.svelte';
	export let groupedData;


</script>

<main>
	<h1>Hello Project!</h1>
	<div class="chartContainer">
	<Scatter 
		data={groupedData}
		layout='wide'
		step=0/>
		</div>
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


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<script>
	export let groupedData;
	console.log(groupedData);
	import Scatter from './ScatterCanvas.svelte';

</script>

<main>
	<div class="intro">
	<h1>The <b>green</b> shift</h1>
	<p>How Europe has turned green in the last 30 years</p>
	</div>
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
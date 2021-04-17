<script>
	import Scatter from './ScatterCanvas.svelte';
	import Scroller from '@sveltejs/svelte-scroller'
	export let groupedData;

	console.log(groupedData)

	let index = 0;
	$:console.log(index);

	let steps = [30, 1, 5, 10, 15, 20, 25];


</script>

<main>
	<div class="intro">
		<h1>The <b>green</b> shift</h1>
		<p class='deck'>See how the support for the environment has grown, and waivered, in political manifestos over the last 30 years.</p>
	</div>
	<div class="text-container">
		<!-- <p>In the charts below, you will see how support for environmental protections have grown, and waivered, over the years. The data is taken from the political manifestos of countries in the European Union.</p> -->
	<div class="no-events">
	<Scroller top={0} bottom={1} bind:index>
		<div slot="background">
			<Scatter 
				data={groupedData}
				layout='fs'
				step={steps[index]}/>
		</div>

		<div slot="foreground" style="padding: 0% 20% 10% 20%;">
            <section>
				<h3>By 2020, most political parties have mentioned environment protections.</h3>
                <p><span class="ECO">Ecological parties</span>, and those that lean left, tend towards a higher number of mentions in their manifestos. However, right-leaning parties are also not far behind.
				</p>
			</section>
            <section>
				<h3>2015</h3>
                <p>The majority of the parties have embrace the green agenda, except the far-right ones.
				</p>
			</section>
            <section>
				<h3>2010</h3>
                <p>The majority of the parties have embrace the green agenda, except the far-right ones.
				</p>
			</section>
            <section>
				<h3>2005</h3>
                <p>The majority of the parties have embrace the green agenda, except the far-right ones.
				</p>
			</section>
            <section>
				<h3>2000</h3>
                <p>The majority of the parties have embrace the green agenda, except the far-right ones.
				</p>
			</section>
            <section><h3>1995</h3>
                <p>The majority of the parties have embrace the green agenda, except the far-right ones.
				</p>
			</section>
            <section>
				<h3>1990</h3>
                <p>The majority of the parties have embrace the green agenda, except the far-right ones.
				</p>
			</section>
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
		background-color: rgba(255, 255, 255, 0);
		color: #191919;
		text-align: center;
		padding: 1em;
		margin: 0 0 2em 0;
	}

	.deck {
		opacity: 0.6;
		width: 600px;
		margin: 0 auto;
		line-height: 34px;
		text-align: center;
		font-size: 30px;
	}

	.ECO {
		border: 1px #3A828E;
	}

	p {
		width: 400px;
		margin: 0 auto;
		opacity: 1;
		line-height: 20px;
		padding-bottom: 30px;
		text-align: left;
		font-size: 16px;
	}

	intro
	.no-events {
		pointer-events:none;
	}

	h3 {
		font-size: 1.17em;
		width: 400px;
		margin: 0 auto;
		padding-bottom: 15px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
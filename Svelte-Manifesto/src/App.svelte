<script>
	import Scatter from './ScatterCanvas.svelte';
	import Scroller from '@sveltejs/svelte-scroller'
	export let groupedData;

	let index = 0;
	$:console.log(index);


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

		<div slot="foreground" style="padding: 0% 20% 10% 20%;">
            <section>
				<h3>2020</h3>
                <p>The majority of the parties have embrace the green agenda, except the far-right ones.
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

	.no-events {
		pointer-events:none;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
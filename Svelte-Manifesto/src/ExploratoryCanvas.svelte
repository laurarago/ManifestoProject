<script>
	import { Canvas } from 'svelte-canvas'
	import { extent } from 'd3-array'
	import { scaleLinear } from 'd3-scale'
    import { Delaunay } from 'd3-delaunay'
	import Circle from './CircleExploratory.svelte'

	export let data;
	export let layout;
	export let step2 = 0;

	const margin = { top: 10, right: 10, bottom: 25, left: 25 }
	let width, height;
	let picked = null, click = false
	$: x = scaleLinear()
				 	.domain([-45,40])
					.range([margin.left, width - margin.right])
					.nice()
	$: y = scaleLinear()
					.domain([0,80])
					.range([height - margin.bottom, margin.top])
					.nice()
	
    $: delaunay = Delaunay.from(data, d => x(d.data[step2].rile), d => y(d.data[step2].environ))
	$: console.log(data[picked?picked:0].partyname)


</script>
<div class="graphic {layout}" bind:clientWidth={width} bind:clientHeight={height}>
	<Canvas 
		{width} {height} 
		style='cursor: pointer'
		on:mousemove={({ offsetX: x, offsetY: y }) => picked = delaunay.find(x, y)}
		on:mouseout={() => picked = null}
		on:mousedown={() => click = true}
		on:mouseup={() => click = false}
	>

		{#each data as d}
			<Circle
				x ={x(d.data[step2].rile)}
				y={y(d.data[step2].environ)} 
				fill="#00336633"			/>
		{/each}
	</Canvas>
</div>

<style>
    .canvas {
        position:relative;
    }
</style>
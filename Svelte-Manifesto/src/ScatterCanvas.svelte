
<script>
	import { Canvas } from 'svelte-canvas'
	import { extent } from 'd3-array'
	import { scaleLinear } from 'd3-scale'
    import { scaleSqrt } from 'd3-scale'
    import { Delaunay } from 'd3-delaunay'
	import Square from './Square.svelte'
	
	export let data;
	export let layout;
    export let step = 0;
	const margin = { top: 10, right: 10, bottom: 25, left: 25 }
	let width, height = 400;
	let picked = null, click = false
	$: x = scaleLinear()
				 	.domain(extent(data, d => d.data[step].rile))
					.range([margin.left, width - margin.right])
					.nice()
	$: y = scaleLinear()
					.domain(extent(data, d => d.data[step].environ))
					.range([height - margin.bottom, margin.top])
					.nice()
    $: r = scaleSqrt()
					.domain(extent(data, d => d.data[step].avgVote))
					.range([5, 20])
					.nice()
	
	
    $: delaunay = Delaunay.from(data, d => x(d.data[step].rile), d => y(d.data[step].environ))
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

		{#each data as d, i}
			<Square 
				x={x(d.data[step].rile)}
				y={y(d.data[step].environ)} 
				fill="tomato"
				radius={r(d.data[step].avgVote)}
                stroke={i === picked && "#000"} 
			/>
		{/each}
	</Canvas>
</div>

<style>
    .canvas {
        position:relative;
    }
</style>
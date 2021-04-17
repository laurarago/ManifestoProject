
<script>
	import { Canvas } from 'svelte-canvas'
	import { extent } from 'd3-array'
	import { scaleLinear } from 'd3-scale'
    import { scaleSqrt } from 'd3-scale'
    import { Delaunay } from 'd3-delaunay'
	import Square from './Square.svelte'
    import Axis from './Axis.svelte'


	
	export let data;
	export let layout;
    export let step = 0;
	$: console.log(data);

	const margin = { top: 10, right: 10, bottom: 25, left: 25 }
	let width, height = 400;
	let picked = null, click = false
	$: x = scaleLinear()
				 	.domain([-25,25])
					.range([margin.left, width - margin.right])
					.nice()
	$: y = scaleLinear()
					.domain([0,550])
					.range([height - margin.bottom, margin.top + 40])
					.nice()
    $: r = scaleSqrt()
					.domain(extent(data, d => d.data[step].avgVote))
					.range([5, 50])
					.nice()

    $: color = scaleLinear()
					.domain(extent(data, d => d.data[step].environ))
					.range(["#efef20b9", "#007f5fa1"])
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
    <Axis type="x" scale={x} tickNumber={8} {margin} />
	<Axis type="y" scale={y} tickNumber={8} {margin} />

		{#each data as d, i}
			<Square 
				x={x(d.data[step].rile)}
				y={y(d.data[step].environ)} 
				fill={color(d.data[step].environ)}
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
	.graphic {
		pointer-events: all;
	}
</style>
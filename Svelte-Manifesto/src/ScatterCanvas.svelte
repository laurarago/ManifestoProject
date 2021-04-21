
<script>
	import { Canvas } from 'svelte-canvas'
	import { extent } from 'd3-array'
	import { scaleLinear, scaleLog, scaleSqrt, scaleOrdinal} from 'd3-scale'
    import { Delaunay } from 'd3-delaunay'
	import Square from './Square.svelte'
	import Line from './Line.svelte'
    import Axis from './Axis.svelte'
	import { line, curveNatural } from 'd3-shape';
	
	export let data;
	export let layout;
    export let step = 0;

	const margin = { top: 10, right: 10, bottom: 25, left: 25 }
	let width, height = 400;
	let picked = null, click = false;
	let colors = ["#33a02c", "#e31a1c", "#fb9a99", "#fdbf6f", "#a6cee3", "#1f78b4", "#1f78b4", "#b15928", "#999999", "#999999"];

	const names = {
		"ECO": "Ecological parties",
		"LEF": "Socialist or other left",
		"SOC": "Social democratic",
		"LIB": "Liberal",
		"CHR": "Christian democratic",
		"CON": "Conservative",
		"NAT": "Nationalist",
		"AGR": "Agrarian",
		"ETH": "Ethnic and regional",
		"SIP": "Special issue",
	};

	$: x = scaleLinear()
				 	.domain([-35,25])
					.range([margin.left, width - margin.right])
					.nice();

	$: y = scaleLinear()
					.domain([10,550])
					.range([height - margin.bottom, margin.top + 25])
					.nice();

    $: r = scaleSqrt()
					.domain(extent(data, d => d.data[step].avgVote))
					.range([5, 30])
					.nice();

	$: path = line()
		.x(d => x(d.rile))
		.y(d => y(d.environ));

    $: color = scaleOrdinal()
					.domain(Object.keys(names))
					.range(colors)
	
    $: delaunay = Delaunay.from(data, d => x(d.data[step].rile), d => y(d.data[step].environ))

	$: console.log(data[picked?picked:0].parfamName)

</script>
<div class="graphic {layout}" bind:clientWidth={width} bind:clientHeight={height}>
	<h3>{data[0].data[step].yearIndex}</h3>
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
			<Line 
				d={path(d.data)}
				strokeWidth={3}
				color={i === picked ? "#CCCCCC99" : "#CCCCCC33"}
			/>
			<Square 
				x={x(d.data[step].rile)}
				y={y(d.data[step].environ)} 
				fill={color(d.data[step].parfamName)}
				radius={r(d.data[step].avgVote)}
                stroke={i === picked && "#000"}
				popup={i === picked && names[d.data[step].parfamName]}

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
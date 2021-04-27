<script>
	import { Canvas } from 'svelte-canvas'
	import { extent } from 'd3-array'
	import { scaleLinear, scaleSqrt, scaleOrdinal} from 'd3-scale'
    import { Delaunay } from 'd3-delaunay'
	import Circle from './CircleExploratory.svelte'
	import Slider from './Slider.svelte'
	import Axis from './AxisExploratory.svelte'

	export let raw;
	export let layout;
	export let stepYear = 1993;
	
	let data = raw.map((d) => { return {...d, data: d.data.filter((d) => d.yearIndex === stepYear)}
				}).filter(d => d.data.length > 0)
  

	console.log(data)

	const margin = { top: 25, right: 10, bottom: 25, left: 25 }
	let width, height;
	let picked = null, click = false
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
				 	.domain([-45,40])
					.range([margin.left, width - margin.right])
					.nice()
	$: y = scaleLinear()
					.domain([0,80])
					.range([height - margin.bottom, margin.top])
					.nice()
	$: r = scaleSqrt()
					.domain([0,60])
					.range([5, 30])
					.nice();

	$: color = scaleOrdinal()
					.domain(Object.keys(names))
					.range(colors)

	
    $: delaunay = Delaunay.from(data, d => x(d.data[0].rile), d => y(d.data[0].environ))
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
	<Axis type="x" scale={x} tickNumber={8} {margin} />
	<Axis type="y" scale={y} tickNumber={8} {margin} />

		{#each data as d, i}
				<Circle
					x={x(d.rile)}
					y={y(d.environ)}
					radius={r(d.avgVote)}
					fill={color(d.parfamName)}
					stroke={i === picked && "#000"}
					popup={i === picked && names[d.partyName]}/>
		{/each}
	<div class="slider">
			<Slider/>
			</div>
	</Canvas>
	
	
</div>

<style>
    .canvas {
        position:relative;
    }
	.slider {
		width: 60%;
	  	font-family: Barlow Condensed, sans-serif;
		font-size: 1em;
		margin: 1vh auto;

	}

	.graphic {
		pointer-events: all;
	}
</style>
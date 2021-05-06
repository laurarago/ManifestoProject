<script>
	import { Canvas } from 'svelte-canvas'
	import { scaleLinear, scaleSqrt, scaleOrdinal} from 'd3-scale'
	import { Delaunay } from 'd3-delaunay'
	import { extent } from 'd3-array'
	import { max } from 'd3'
	import Circle from './CircleExploratory.svelte'
	import Axis from './AxisExploratory.svelte'
	import { missing_component } from 'svelte/internal';

	export let raw;
	export let layout;
	export let country;

	$: dataPoints = raw[country].parties
		.map(d => d.data)
		.flat()
		.filter(d => d.yearIndex === stepYear)

	function getUniqueYears(countryData) {
		const allYears = countryData.parties
			.map(d => d.data)
			.flat()
			.map(d => d.yearIndex)
		return [...new Set(allYears)].sort(); // return unique sorted list
	}

	function getRile(countryData) {
		const allRile = countryData.parties
			.map(d => d.data)
			.flat()
			.map(d => d.rile)
		return [...new Set(allRile)].sort(); // return unique sorted list
	}

	function getEnvMentions(countryData) {
		const allEnvMentions = countryData.parties
			.map(d => d.data)
			.flat()
			.map(d => d.environ)
		return [...new Set(allEnvMentions)].sort(); // return unique sorted list
	}

	$:years = getUniqueYears(raw[country]);
	$:rileAll = getRile(raw[country]); //get all rile data for selected country, list
	$:envMentionsAll = getEnvMentions(raw[country]); // get all envMentions for selected country, list

	$:stepYear = years[0];

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
				 	// .domain([-45,40])
					.domain(extent(rileAll))
					.range([margin.left, width - margin.right])
					.nice()
	$: y = scaleLinear()
					.domain(extent(envMentionsAll))
					.range([height - margin.bottom, margin.top])
					.nice()
	$: r = scaleSqrt()
					.domain([0,60])
					.range([5, 30])
					.nice();

	$: color = scaleOrdinal()
					.domain(Object.keys(names))
					.range(colors)

	$: delaunay = Delaunay.from(dataPoints, d => x(d.rile), d => y(d.environ))

</script>
{#each years as year}
<button on:click={() => stepYear = year} class:selected='{stepYear === year}'>{year}</button>
{/each}
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

		{#each dataPoints as d, i (d.partyname)}
		<Circle
			x={x(d.rile)}
			y={y(d.environ)}
			radius={r(d.avgVote)}
			fill={color(d.parfamName)}
			stroke={i === picked && "#000"}
			popup={i === picked && d.partyname}/>
		{/each}
	</Canvas>

</div>

<style>
	.canvas {
		position:relative;
	}
	.slider {
		width: 45%;
	  	font-family: Barlow Condensed, sans-serif;
		font-size: 1em;
		margin: 1vh auto;

	}

	.selected {
		background-color:#FFF;
	}

	.graphic {
		pointer-events: all;
		padding-top: 30px;
	}

	button {
		font-family: Barlow Condensed, sans-serif;
	}
</style>
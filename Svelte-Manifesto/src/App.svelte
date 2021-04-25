<script>
	import Scatter from './ScatterCanvas.svelte';
	import Scroller from '@sveltejs/svelte-scroller'
	import Exploratory from './ExploratoryCanvas.svelte'
	export let groupedData;
	export let groupedData2;

	console.log(groupedData)
	console.log(groupedData2)
	

	let index = 0;
	$:console.log(index);

	let steps = [35, 0, 5, 10, 20, 30, 35];
	let steps2 = [1, 1, 3, 4, 5];
	let scatterStep;



</script>

<main>
	<div class="intro">
		<h1>The <b>green</b> shift</h1>
		<p class='deck'>See how support for the environment has grown, and waivered, in political manifestos over the last 30 years.</p>
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 198.2 99" style="enable-background:new 0 0 198.2 99;" xml:space="preserve">
			<style type="text/css">
				.st0{fill:none;stroke:#000000;}
				.st1{fill-opacity:0.75;}
			</style>
			<path class="st0" d="M136.7,63.7c0,4.4-3.4,8-7.6,8c-4.2,0-7.6-3.6-7.6-8s3.4-8,7.6-8C133.3,55.8,136.7,59.3,136.7,63.7z"/>
			<path class="st0" d="M178.4,63.4c0,9.3-7.4,16.9-16.5,16.9c-9.1,0-16.5-7.5-16.5-16.9s7.4-16.9,16.5-16.9
				C171,46.5,178.4,54,178.4,63.4z"/>
			<path d="M16.7,88.4c0.2,0.2,0.5,0.2,0.7,0l3.2-3.2c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0L17,87.3l-2.8-2.8
				c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7L16.7,88.4z M16.5,38v50h1V38H16.5z"/>
			<path d="M17.4,33.4c-0.2-0.2-0.5-0.2-0.7,0l-3.2,3.2c-0.2,0.2-0.2,0.5,0,0.7c0.2,0.2,0.5,0.2,0.7,0l2.8-2.8l2.8,2.8
				c0.2,0.2,0.5,0.2,0.7,0c0.2-0.2,0.2-0.5,0-0.7L17.4,33.4z M17.5,87.8v-54h-1v54H17.5z"/>
			<path class="st1" d="M30.8,35.7c0-0.1,0.1-0.1,0.1-0.1h0.6c0.1,0,0.1,0,0.1,0.1v8.2c0,0.1,0,0.1-0.1,0.1h-0.6c-0.1,0-0.1,0-0.1-0.1
				v-6.4c0,0,0,0,0,0c0,0,0,0,0,0L29.5,40c0,0.1-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.1-0.1L28,37.4c0,0,0,0,0,0c0,0,0,0,0,0v6.4
				c0,0.1,0,0.1-0.1,0.1h-0.6c-0.1,0-0.1,0-0.1-0.1v-8.2c0-0.1,0-0.1,0.1-0.1h0.6c0.1,0,0.1,0,0.1,0.1l1.4,2.8c0,0,0,0,0,0c0,0,0,0,0,0
				L30.8,35.7z M35,44.1c-0.6,0-1-0.2-1.4-0.5c-0.3-0.3-0.5-0.8-0.5-1.3v-2.6c0-0.5,0.2-1,0.5-1.3c0.3-0.3,0.8-0.5,1.4-0.5
				c0.6,0,1,0.2,1.4,0.5c0.3,0.3,0.5,0.8,0.5,1.3v2.6c0,0.6-0.2,1-0.5,1.3C36,43.9,35.6,44.1,35,44.1z M35,43.3c0.3,0,0.6-0.1,0.7-0.3
				c0.2-0.2,0.3-0.5,0.3-0.8v-2.5c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.4-0.3-0.7-0.3s-0.6,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.8v2.5
				c0,0.3,0.1,0.6,0.3,0.8S34.7,43.3,35,43.3z M40.3,37.9c0.2,0,0.4,0,0.5,0.1c0.1,0,0.1,0.1,0.1,0.2l-0.1,0.6c0,0.1-0.1,0.1-0.1,0.1
				c-0.1,0-0.2-0.1-0.4-0.1c-0.1,0-0.1,0-0.1,0c-0.3,0-0.5,0.2-0.7,0.5c-0.2,0.3-0.3,0.6-0.3,1v3.6c0,0.1,0,0.1-0.1,0.1h-0.6
				c-0.1,0-0.1,0-0.1-0.1V38c0-0.1,0-0.1,0.1-0.1H39c0.1,0,0.1,0,0.1,0.1v0.7c0,0,0,0,0,0c0,0,0,0,0,0C39.4,38.2,39.7,37.9,40.3,37.9z
				M45.3,41.2c0,0.1,0,0.1-0.1,0.1h-2.7c0,0,0,0,0,0v0.9c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.6-0.2
				c0.2-0.2,0.3-0.4,0.4-0.6c0-0.1,0.1-0.1,0.1-0.1l0.6,0c0,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1c-0.1,0.5-0.3,0.8-0.6,1.1
				c-0.3,0.3-0.7,0.4-1.3,0.4c-0.6,0-1-0.2-1.4-0.5c-0.3-0.3-0.5-0.8-0.5-1.3v-2.6c0-0.5,0.2-1,0.5-1.3c0.3-0.3,0.8-0.5,1.4-0.5
				c0.6,0,1,0.2,1.4,0.5c0.3,0.3,0.5,0.8,0.5,1.3V41.2z M43.4,38.6c-0.3,0-0.6,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.8v0.8c0,0,0,0,0,0h2
				c0,0,0,0,0,0v-0.8c0-0.3-0.1-0.6-0.3-0.8C44,38.7,43.7,38.6,43.4,38.6z"/>
			<path class="st1" d="M27.4,89c-0.1,0-0.1,0-0.1-0.1v-8.2c0-0.1,0-0.1,0.1-0.1H28c0.1,0,0.1,0,0.1,0.1v7.5c0,0,0,0,0,0h2.7
				c0.1,0,0.1,0,0.1,0.1v0.5c0,0.1,0,0.1-0.1,0.1H27.4z M35.5,86.2c0,0.1,0,0.1-0.1,0.1h-2.7c0,0,0,0,0,0v0.9c0,0.3,0.1,0.6,0.3,0.8
				c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.6-0.2c0.2-0.2,0.3-0.4,0.4-0.6c0-0.1,0.1-0.1,0.1-0.1l0.6,0c0,0,0.1,0,0.1,0
				c0,0,0,0.1,0,0.1c-0.1,0.5-0.3,0.8-0.6,1.1c-0.3,0.3-0.7,0.4-1.3,0.4c-0.6,0-1-0.2-1.4-0.5c-0.3-0.3-0.5-0.8-0.5-1.3v-2.6
				c0-0.5,0.2-1,0.5-1.3c0.3-0.3,0.8-0.5,1.4-0.5c0.6,0,1,0.2,1.4,0.5c0.3,0.3,0.5,0.8,0.5,1.3V86.2z M33.6,83.6
				c-0.3,0-0.6,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.8v0.8c0,0,0,0,0,0h2c0,0,0,0,0,0v-0.8c0-0.3-0.1-0.6-0.3-0.8
				C34.2,83.7,33.9,83.6,33.6,83.6z M38.3,89.1c-0.6,0-1-0.1-1.3-0.4c-0.3-0.3-0.5-0.7-0.5-1.1v-0.1c0-0.1,0-0.1,0.1-0.1h0.6
				c0.1,0,0.1,0,0.1,0.1v0.1c0,0.3,0.1,0.5,0.3,0.6c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7
				c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.2-0.3-0.4-0.3c-0.1-0.1-0.4-0.2-0.7-0.3c-0.3-0.1-0.6-0.3-0.8-0.4c-0.2-0.1-0.4-0.3-0.5-0.5
				c-0.1-0.2-0.2-0.5-0.2-0.9c0-0.5,0.2-0.9,0.5-1.2c0.3-0.3,0.7-0.4,1.3-0.4c0.5,0,1,0.2,1.3,0.5s0.5,0.7,0.5,1.2v0
				c0,0.1,0,0.1-0.1,0.1h-0.6c-0.1,0-0.1,0-0.1-0.1v-0.1c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3
				c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.3c0.2,0.1,0.4,0.2,0.6,0.3c0.3,0.1,0.6,0.3,0.8,0.4
				c0.2,0.1,0.4,0.3,0.6,0.5c0.2,0.2,0.2,0.5,0.2,0.9c0,0.5-0.2,0.9-0.5,1.2C39.3,88.9,38.9,89.1,38.3,89.1z M42.5,89.1
				c-0.6,0-1-0.1-1.3-0.4c-0.3-0.3-0.5-0.7-0.5-1.1v-0.1c0-0.1,0-0.1,0.1-0.1h0.6c0.1,0,0.1,0,0.1,0.1v0.1c0,0.3,0.1,0.5,0.3,0.6
				c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.2-0.3-0.4-0.3
				c-0.1-0.1-0.4-0.2-0.7-0.3c-0.3-0.1-0.6-0.3-0.8-0.4c-0.2-0.1-0.4-0.3-0.5-0.5c-0.1-0.2-0.2-0.5-0.2-0.9c0-0.5,0.2-0.9,0.5-1.2
				c0.3-0.3,0.7-0.4,1.3-0.4c0.5,0,1,0.2,1.3,0.5s0.5,0.7,0.5,1.2v0c0,0.1,0,0.1-0.1,0.1h-0.6c-0.1,0-0.1,0-0.1-0.1v-0.1
				c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.2,0.1,0.4,0.2,0.5
				c0.1,0.1,0.2,0.2,0.4,0.3c0.2,0.1,0.4,0.2,0.6,0.3c0.3,0.1,0.6,0.3,0.8,0.4c0.2,0.1,0.4,0.3,0.6,0.5c0.2,0.2,0.2,0.5,0.2,0.9
				c0,0.5-0.2,0.9-0.5,1.2C43.5,88.9,43.1,89.1,42.5,89.1z"/>
			<path class="st1" d="M16.8,9.5c0-0.1,0.1-0.1,0.2-0.1H18c0.1,0,0.2,0.1,0.2,0.2v12.2c0,0.1-0.1,0.2-0.2,0.2h-0.9
				c-0.1,0-0.2-0.1-0.2-0.2v-9.6c0,0,0-0.1,0-0.1c0,0,0,0-0.1,0L14.9,16c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2,0-0.2-0.1l-1.9-3.9
				c0,0,0,0-0.1,0c0,0,0,0,0,0.1v9.6c0,0.1-0.1,0.2-0.2,0.2h-0.9c-0.1,0-0.2-0.1-0.2-0.2V9.6c0-0.1,0.1-0.2,0.2-0.2h0.9
				c0.1,0,0.2,0,0.2,0.1l2.1,4.2c0,0,0,0,0.1,0c0,0,0,0,0.1,0L16.8,9.5z M26.4,10.3c0,0.1-0.1,0.2-0.2,0.2h-4.2c0,0-0.1,0-0.1,0.1v4.5
				c0,0,0,0.1,0.1,0.1h2.6c0.1,0,0.2,0.1,0.2,0.2v0.8c0,0.1-0.1,0.2-0.2,0.2h-2.6c0,0-0.1,0-0.1,0.1v4.5c0,0,0,0.1,0.1,0.1h4.2
				c0.1,0,0.2,0.1,0.2,0.2v0.8c0,0.1-0.1,0.2-0.2,0.2h-5.3c-0.1,0-0.2-0.1-0.2-0.2V9.6c0-0.1,0.1-0.2,0.2-0.2h5.3
				c0.1,0,0.2,0.1,0.2,0.2V10.3z M33.5,9.6c0-0.1,0.1-0.2,0.2-0.2h0.9c0.1,0,0.2,0.1,0.2,0.2v12.2c0,0.1-0.1,0.2-0.2,0.2h-1.1
				c-0.1,0-0.2,0-0.2-0.1l-3.5-9.3c0,0,0,0-0.1,0c0,0,0,0,0,0.1l0,9.3c0,0.1-0.1,0.2-0.2,0.2h-0.9c-0.1,0-0.2-0.1-0.2-0.2V9.6
				c0-0.1,0.1-0.2,0.2-0.2h1c0.1,0,0.2,0,0.2,0.1l3.5,9.3c0,0,0,0.1,0.1,0.1c0,0,0,0,0-0.1V9.6z M42.8,9.4C43,9.4,43,9.5,43,9.6v0.8
				c0,0.1-0.1,0.2-0.2,0.2h-2.4c0,0-0.1,0-0.1,0.1v11.2c0,0.1-0.1,0.2-0.2,0.2h-0.9c-0.1,0-0.2-0.1-0.2-0.2V10.6c0,0,0-0.1-0.1-0.1
				h-2.2c-0.1,0-0.2-0.1-0.2-0.2V9.6c0-0.1,0.1-0.2,0.2-0.2H42.8z M45.1,22c-0.1,0-0.2-0.1-0.2-0.2V9.6c0-0.1,0.1-0.2,0.2-0.2H46
				c0.1,0,0.2,0.1,0.2,0.2v12.2c0,0.1-0.1,0.2-0.2,0.2H45.1z M51.6,22.1c-0.9,0-1.7-0.3-2.2-0.9c-0.6-0.6-0.8-1.3-0.8-2.3v-6.6
				c0-0.9,0.3-1.7,0.8-2.3c0.6-0.6,1.3-0.9,2.2-0.9c0.9,0,1.7,0.3,2.3,0.9c0.6,0.6,0.9,1.3,0.9,2.3V19c0,0.9-0.3,1.7-0.9,2.3
				C53.3,21.9,52.5,22.1,51.6,22.1z M51.6,21c0.6,0,1-0.2,1.3-0.5c0.3-0.4,0.5-0.8,0.5-1.4v-6.7c0-0.6-0.2-1.1-0.5-1.4
				c-0.3-0.4-0.8-0.6-1.3-0.6c-0.5,0-1,0.2-1.3,0.6c-0.3,0.4-0.5,0.8-0.5,1.4v6.7c0,0.6,0.2,1,0.5,1.4C50.6,20.8,51,21,51.6,21z
				M62,9.6c0-0.1,0.1-0.2,0.2-0.2h0.9c0.1,0,0.2,0.1,0.2,0.2v12.2c0,0.1-0.1,0.2-0.2,0.2h-1.1c-0.1,0-0.2,0-0.2-0.1l-3.5-9.3
				c0,0,0,0-0.1,0c0,0,0,0,0,0.1l0,9.3c0,0.1-0.1,0.2-0.2,0.2h-0.9c-0.1,0-0.2-0.1-0.2-0.2V9.6c0-0.1,0.1-0.2,0.2-0.2h1
				c0.1,0,0.2,0,0.2,0.1l3.5,9.3c0,0,0,0.1,0.1,0.1c0,0,0,0,0-0.1V9.6z M68.3,22.1c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.8-1.4-0.8-2.3
				v-0.4c0-0.1,0.1-0.2,0.2-0.2h0.9c0.1,0,0.2,0.1,0.2,0.2v0.4c0,0.6,0.2,1.2,0.5,1.5c0.3,0.4,0.7,0.6,1.3,0.6c0.5,0,0.9-0.2,1.3-0.6
				c0.3-0.4,0.5-0.9,0.5-1.5c0-0.4-0.1-0.8-0.3-1c-0.2-0.3-0.4-0.6-0.6-0.8c-0.3-0.2-0.7-0.6-1.3-1c-0.6-0.4-1.1-0.8-1.4-1.1
				c-0.3-0.3-0.6-0.7-0.9-1.2c-0.2-0.4-0.3-1-0.3-1.6c0-0.9,0.3-1.7,0.8-2.2c0.5-0.6,1.2-0.8,2.1-0.8c0.9,0,1.6,0.3,2.2,0.9
				c0.6,0.6,0.8,1.4,0.8,2.4V13c0,0.1-0.1,0.2-0.2,0.2h-0.9C70,13.1,70,13.1,70,13v-0.5c0-0.6-0.2-1.1-0.5-1.5
				c-0.3-0.4-0.7-0.6-1.3-0.6c-0.5,0-0.9,0.2-1.2,0.5c-0.3,0.3-0.5,0.8-0.5,1.4c0,0.4,0.1,0.7,0.2,1c0.1,0.3,0.4,0.5,0.6,0.8
				s0.7,0.6,1.2,1c0.7,0.5,1.3,1,1.6,1.3c0.4,0.3,0.6,0.7,0.8,1.1c0.2,0.4,0.3,0.9,0.3,1.4c0,1-0.3,1.8-0.8,2.4
				C69.9,21.9,69.2,22.1,68.3,22.1z"/>
			<path class="st1" d="M114.9,15.4c-0.5,0-0.9-0.1-1.3-0.3c-0.4-0.2-0.7-0.5-0.9-0.9c-0.2-0.4-0.3-0.8-0.3-1.3c0-0.5,0.1-0.9,0.3-1.3
				c0.2-0.4,0.5-0.7,0.9-0.9c0.4-0.2,0.8-0.3,1.3-0.3c0.5,0,0.9,0.1,1.3,0.3s0.7,0.5,0.9,0.9c0.2,0.4,0.3,0.8,0.3,1.3
				c0,0.5-0.1,0.9-0.3,1.3c-0.2,0.4-0.5,0.7-0.9,0.9C115.7,15.2,115.3,15.4,114.9,15.4z M114.4,23c-0.1,0-0.1,0-0.2-0.1
				c0,0,0-0.1,0-0.2l6.6-12.3c0-0.1,0.1-0.1,0.2-0.1h0.6c0.1,0,0.1,0,0.1,0.1c0,0,0,0.1,0,0.1l-6.6,12.3c0,0.1-0.1,0.1-0.2,0.1H114.4z
				M114.9,14.6c0.5,0,0.9-0.2,1.2-0.5c0.3-0.4,0.5-0.8,0.5-1.3c0-0.5-0.2-0.9-0.5-1.3c-0.3-0.3-0.7-0.5-1.2-0.5
				c-0.5,0-0.9,0.2-1.2,0.5c-0.3,0.3-0.5,0.8-0.5,1.3c0,0.5,0.2,0.9,0.5,1.3C114,14.4,114.4,14.6,114.9,14.6z M121.3,23.2
				c-0.5,0-0.9-0.1-1.3-0.3c-0.4-0.2-0.7-0.5-0.9-0.9c-0.2-0.4-0.3-0.8-0.3-1.3c0-0.5,0.1-0.9,0.3-1.3c0.2-0.4,0.5-0.7,0.9-0.9
				c0.4-0.2,0.8-0.3,1.3-0.3s0.9,0.1,1.3,0.3c0.4,0.2,0.7,0.5,0.9,0.9c0.2,0.4,0.3,0.8,0.3,1.3c0,0.5-0.1,0.9-0.3,1.3
				c-0.2,0.4-0.5,0.7-0.9,0.9C122.2,23,121.8,23.2,121.3,23.2z M121.3,22.4c0.5,0,0.9-0.2,1.2-0.5c0.3-0.4,0.5-0.8,0.5-1.3
				c0-0.5-0.2-0.9-0.5-1.3c-0.3-0.3-0.7-0.5-1.2-0.5c-0.5,0-0.9,0.2-1.2,0.5c-0.3,0.3-0.5,0.8-0.5,1.3c0,0.5,0.2,0.9,0.5,1.3
				C120.4,22.2,120.8,22.4,121.3,22.4z M132.8,23.1c-0.9,0-1.7-0.3-2.2-0.9c-0.6-0.6-0.8-1.3-0.8-2.3v-6.6c0-0.9,0.3-1.7,0.8-2.3
				c0.6-0.6,1.3-0.9,2.2-0.9c0.9,0,1.7,0.3,2.3,0.9c0.6,0.6,0.9,1.3,0.9,2.3V20c0,0.9-0.3,1.7-0.9,2.3
				C134.5,22.9,133.7,23.1,132.8,23.1z M132.8,22c0.6,0,1-0.2,1.3-0.5c0.3-0.4,0.5-0.8,0.5-1.4v-6.7c0-0.6-0.2-1.1-0.5-1.4
				c-0.3-0.4-0.8-0.6-1.3-0.6c-0.5,0-1,0.2-1.3,0.6c-0.3,0.4-0.5,0.8-0.5,1.4v6.7c0,0.6,0.2,1,0.5,1.4C131.8,21.8,132.3,22,132.8,22z
				M143.9,11.3c0,0.1-0.1,0.2-0.2,0.2h-4.1c0,0-0.1,0-0.1,0.1v4.5c0,0,0,0.1,0.1,0.1h2.6c0.1,0,0.2,0.1,0.2,0.2v0.8
				c0,0.1-0.1,0.2-0.2,0.2h-2.6c0,0-0.1,0-0.1,0.1v5.5c0,0.1-0.1,0.2-0.2,0.2h-0.9c-0.1,0-0.2-0.1-0.2-0.2V10.6c0-0.1,0.1-0.2,0.2-0.2
				h5.3c0.1,0,0.2,0.1,0.2,0.2V11.3z M151.2,23c-0.1,0-0.2-0.1-0.2-0.2l-2.6-12.2v0c0-0.1,0.1-0.2,0.2-0.2h1c0.1,0,0.2,0.1,0.2,0.2
				l1.9,10.1c0,0,0,0,0,0c0,0,0,0,0,0l1.9-10.1c0-0.1,0.1-0.2,0.2-0.2h1c0.1,0,0.2,0.1,0.2,0.2l-2.6,12.2c0,0.1-0.1,0.2-0.2,0.2H151.2z
				M159.6,23.1c-0.9,0-1.7-0.3-2.2-0.9c-0.6-0.6-0.8-1.3-0.8-2.3v-6.6c0-0.9,0.3-1.7,0.8-2.3c0.6-0.6,1.3-0.9,2.2-0.9
				c0.9,0,1.7,0.3,2.3,0.9s0.9,1.3,0.9,2.3V20c0,0.9-0.3,1.7-0.9,2.3C161.3,22.9,160.6,23.1,159.6,23.1z M159.6,22c0.6,0,1-0.2,1.3-0.5
				c0.3-0.4,0.5-0.8,0.5-1.4v-6.7c0-0.6-0.2-1.1-0.5-1.4c-0.3-0.4-0.8-0.6-1.3-0.6c-0.5,0-1,0.2-1.3,0.6c-0.3,0.4-0.5,0.8-0.5,1.4v6.7
				c0,0.6,0.2,1,0.5,1.4C158.7,21.8,159.1,22,159.6,22z M170.6,10.4c0.1,0,0.2,0.1,0.2,0.2v0.8c0,0.1-0.1,0.2-0.2,0.2h-2.4
				c0,0-0.1,0-0.1,0.1v11.2c0,0.1-0.1,0.2-0.2,0.2H167c-0.1,0-0.2-0.1-0.2-0.2V11.6c0,0,0-0.1-0.1-0.1h-2.2c-0.1,0-0.2-0.1-0.2-0.2
				v-0.8c0-0.1,0.1-0.2,0.2-0.2H170.6z M178.4,11.3c0,0.1-0.1,0.2-0.2,0.2H174c0,0-0.1,0-0.1,0.1v4.5c0,0,0,0.1,0.1,0.1h2.6
				c0.1,0,0.2,0.1,0.2,0.2v0.8c0,0.1-0.1,0.2-0.2,0.2H174c0,0-0.1,0-0.1,0.1v4.5c0,0,0,0.1,0.1,0.1h4.2c0.1,0,0.2,0.1,0.2,0.2v0.8
				c0,0.1-0.1,0.2-0.2,0.2h-5.3c-0.1,0-0.2-0.1-0.2-0.2V10.6c0-0.1,0.1-0.2,0.2-0.2h5.3c0.1,0,0.2,0.1,0.2,0.2V11.3z M182.8,23.1
				c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.8-1.4-0.8-2.3v-0.4c0-0.1,0.1-0.2,0.2-0.2h0.9c0.1,0,0.2,0.1,0.2,0.2v0.4c0,0.6,0.2,1.2,0.5,1.5
				c0.3,0.4,0.7,0.6,1.3,0.6c0.5,0,0.9-0.2,1.3-0.6s0.5-0.9,0.5-1.5c0-0.4-0.1-0.8-0.3-1c-0.2-0.3-0.4-0.6-0.6-0.8
				c-0.3-0.2-0.7-0.6-1.3-1c-0.6-0.4-1.1-0.8-1.4-1.1c-0.3-0.3-0.6-0.7-0.9-1.2c-0.2-0.4-0.3-1-0.3-1.6c0-0.9,0.3-1.7,0.8-2.2
				c0.5-0.6,1.2-0.8,2.1-0.8c0.9,0,1.6,0.3,2.2,0.9c0.6,0.6,0.8,1.4,0.8,2.4V14c0,0.1-0.1,0.2-0.2,0.2h-0.9c-0.1,0-0.2-0.1-0.2-0.2
				v-0.5c0-0.6-0.2-1.1-0.5-1.5c-0.3-0.4-0.7-0.6-1.3-0.6c-0.5,0-0.9,0.2-1.2,0.5c-0.3,0.3-0.5,0.8-0.5,1.4c0,0.4,0.1,0.7,0.2,1
				c0.1,0.3,0.4,0.5,0.6,0.8s0.7,0.6,1.2,1c0.7,0.5,1.3,1,1.6,1.3c0.4,0.3,0.6,0.7,0.8,1.1c0.2,0.4,0.3,0.9,0.3,1.4
				c0,1-0.3,1.8-0.8,2.4C184.4,22.9,183.7,23.1,182.8,23.1z"/>
			</svg>
	</div>

	<div class="text-container">
	</div>
	<div class="no-events">
	<Scroller top={0} bottom={1} bind:index>
		<div slot="background">
			<Scatter 
				data={groupedData}
				layout='fs'
				step={steps[index]}/>
		</div>

		<div slot="foreground" style="padding: 0% 20% 10% 20%;">
            <section class="top">
				<div class="white-bg">
					<h3>By 2020, most political parties have mentioned environment protections in their manifestos.</h3>
					<p><span class="ECO"><strong>Ecological parties</strong></span> and those that <span class="LEFT-LEAN"><strong>lean left</strong></span> , tend towards a higher number of mentions in their manifestos. However, <span class="RIGHT-LEAN"><strong>right-leaning</strong></span> parties are also not far behind.</p>
				</div>
			</section>
            <section>
				<div class="white-bg">
					<h3>How did we get to here? In the 80s, there was very little mention of environmental policy.</h3>
					<p>Prior to most of these countries in Europe taking part in democratic elections, there were few ecological parties.</p>
				</div>
			</section>
            <section>
				<div class="white-bg">
					<h3>It all began to explode in the early&nbsp;90s.</h3>
					<p>This was the year that <span class="ECO"><strong>ecological parties</strong></span>, even Romania and Croatia, saw a huge increase in mentions&nbsp;of environmental protection policies.
					<br>Also in this year, the UN sets the 21 Agenda, a non-binding action plan of the United Nations with regard to sustainable development.</p>
				</div>
			</section>
            <section>
				<div class="white-bg">
					<h3>In 1995, ecological parties began to drop their mentions.</h3>
					<p>And, <span class="RIGHT-LEAN">right-leaning parties</span> began to increase slightly perhaps encouraged by conversations leading up to the Kyoto Protocol, signed in 1997.</p>
				</div>
			</section>
            <section>
				<div class="white-bg">
					<h3>In the 21st century, the ecological parties continued to drop their mentions</h3>
					<p>As they lowered their mentions to environmental policies, the rest of the political spectrum begun to develop the green agenda.
					</p>
				</div>
			</section>
            <section>
				<div class="white-bg">
					<h3>In 2015, the left parties substantially increase the green mentions</h3>
					<p>Almost 20 years after the Kyoto Protocol, the <span class="LEFT-LEAN">lean left</span> parties embrace the green agenda while the lean right still resist to incorporate the green mentions in their manifestos.</p>
				</div>
			</section>
            <section>
				<div class="white-bg">
					<h3>Back to 2020 the majority of the parties have embraced the green agenda </h3>
					<p>Following the path of the the left parties, the <span class="RIGHT-LEAN">lean right parties</span> also start adding green mentions to their manifestos. The agrarian parties are the ones that still resist to include environmental policies.</p>
				</div>
			</section>
		</div>
	</Scroller>
		</div>
	<div class="text-content">
			<p>In the last 30 years, Europe has gone from completely ignoring the climate agenda to incorporating it into its speeches and political manifestos. In 1985, 10 years before the Kyoto protocol, there was almost no concern for the environment.</p> 
			<p>According to the calculations made from the Manifesto Project data, in that year the mentions of environmental policies in the manifestos of the political parties barely totaled 257.</p>
		
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 689.36 394.55">
				<defs>
				  <style>
					.a, .f, .k {
					  fill: none;
					}
			  
					.a {
					  stroke: #eee;
					  stroke-width: 1.5px;
					}
			  
					.b, .c, .e {
					  isolation: isolate;
					}
			  
					.b {
					  font-size: 14px;
					  fill: #aaa;
					  font-family: BarlowCondensed-Regular, Barlow Condensed;
					}
			  
					.d {
					  letter-spacing: -0.03em;
					}
			  
					.e {
					  fill: #33a02c;
					  opacity: 0.9;
					}
			  
					.g {
					  font-size: 28px;
					  font-family: BarlowCondensed-Bold, Barlow Condensed;
					  font-weight: 700;
					}
			  
					.h {
					  font-family: BarlowCondensed-Light, Barlow Condensed;
					  font-weight: 300;
					}
			  
					.i {
					  letter-spacing: 0em;
					}
			  
					.j {
					  letter-spacing: 0em;
					}
			  
					.k {
					  stroke: #231f20;
					}
			  
					.l {
					  fill: #231f20;
					}
				  </style>
				</defs>
				<g>
				  <g>
					<line class="a" x1="46.34" y1="371.69" x2="681" y2="371.69"/>
					<line class="a" x1="46.34" y1="127.46" x2="681" y2="127.46"/>
				  </g>
				  <g>
					<g>
					  <line class="a" x1="58.7" y1="371.69" x2="58.7" y2="376.62"/>
					  <line class="a" x1="99.91" y1="371.69" x2="99.91" y2="376.62"/>
					  <path class="a" d="M113.1,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M121.34,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M129.59,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M137.83,378.17" transform="translate(-4.95 -6.48)"/>
					  <line class="a" x1="141.12" y1="371.69" x2="141.12" y2="376.62"/>
					  <path class="a" d="M154.31,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M162.55,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M170.8,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M179,378.17" transform="translate(-4.95 -6.48)"/>
					  <line class="a" x1="182.34" y1="371.69" x2="182.34" y2="376.62"/>
					  <path class="a" d="M195.52,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M203.77,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M212,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M220.25,378.17" transform="translate(-4.95 -6.48)"/>
					  <line class="a" x1="223.55" y1="371.69" x2="223.55" y2="376.62"/>
					  <path class="a" d="M236.74,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M245,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M253.22,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M261.46,378.17" transform="translate(-4.95 -6.48)"/>
					  <line class="a" x1="264.76" y1="371.69" x2="264.76" y2="376.62"/>
					  <path class="a" d="M278,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M286.19,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M294.43,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M302.67,378.17" transform="translate(-4.95 -6.48)"/>
					  <line class="a" x1="305.97" y1="371.69" x2="305.97" y2="376.62"/>
					  <path class="a" d="M319.16,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M327.4,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M335.64,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M343.89,378.17" transform="translate(-4.95 -6.48)"/>
					  <line class="a" x1="347.18" y1="371.69" x2="347.18" y2="376.62"/>
					  <path class="a" d="M360.37,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M368.61,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M376.86,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M385.1,378.17" transform="translate(-4.95 -6.48)"/>
					  <line class="a" x1="388.39" y1="371.69" x2="388.39" y2="376.62"/>
					  <path class="a" d="M401.58,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M409.82,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M418.07,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M426.31,378.17" transform="translate(-4.95 -6.48)"/>
					  <line class="a" x1="429.61" y1="371.69" x2="429.61" y2="376.62"/>
					  <path class="a" d="M442.79,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M451,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M459.28,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M467.52,378.17" transform="translate(-4.95 -6.48)"/>
					  <line class="a" x1="470.82" y1="371.69" x2="470.82" y2="376.62"/>
					  <line class="a" x1="512.03" y1="371.69" x2="512.03" y2="376.62"/>
					  <path class="a" d="M525.22,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M533.46,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M541.7,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M549.94,378.17" transform="translate(-4.95 -6.48)"/>
					  <line class="a" x1="553.24" y1="371.69" x2="553.24" y2="376.62"/>
					  <path class="a" d="M566.43,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M574.67,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M582.91,378.17" transform="translate(-4.95 -6.48)"/>
					  <path class="a" d="M591.16,378.17" transform="translate(-4.95 -6.48)"/>
					  <line class="a" x1="594.45" y1="371.69" x2="594.45" y2="376.62"/>
					  <text x="-4.95" y="-6.48"/>        <line class="a" x1="635.66" y1="371.69" x2="635.66" y2="376.62"/>
					  <g>
						<line class="a" x1="676.88" y1="371.69" x2="676.88" y2="376.62"/>
						<text class="b" transform="translate(658.19 388.98) scale(1.32 1)">2020</text>
						<text class="b" transform="translate(578.55 388.98) scale(1.32 1)">2010</text>
						<text class="b" transform="translate(496.9 388.98) scale(1.32 1)">2000</text>
						<text class="b" transform="translate(411.95 388.98) scale(1.32 1)">1990</text>
						<text class="b" transform="translate(332.06 388.98) scale(1.32 1)">1980</text>
						<text class="b" transform="translate(247.57 388.98) scale(1.32 1)">1970</text>
						<text class="b" transform="translate(165.15 388.98) scale(1.32 1)">1960</text>
						<text class="b" transform="translate(83.54 390.01) scale(1.32 1)">1950</text>
						<g class="c">
						  <text class="c" x="-4.95" y="-6.48"/>          </g>
					  </g>
					</g>
					<g>
					  <g>
						<line class="a" x1="46.34" y1="371.69" x2="5.34" y2="371.69"/>
						<text class="b" transform="translate(4.65 369.02) scale(1.32 1)">0</text>
					  </g>
					  <g>
						<line class="a" x1="46.34" y1="127.46" x2="5.34" y2="127.46"/>
						<g class="c">
						  <text class="b" transform="translate(0.85 122.8) scale(1.32 1)">500<tspan class="d" x="18.16" y="0">,</tspan><tspan x="20.15" y="0">000</tspan></text>
						</g>
					  </g>
					</g>
				  </g>
				</g>
				<g>
				  <path class="e" d="M52.31,378.17h0Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M60.56,378.17h0Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M68.8,378.15H75v0H68.8Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M77,378.15h6.18v0H77Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M85.28,376.09h6.18v2.08H85.28Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M93.53,375.4h6.18v2.77H93.53Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M101.77,375.65H108v2.52h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M110,375.65h6.18v2.52H110Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M118.25,378.16h0Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M126.49,378.16h0Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M134.74,378.16h0Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M143,378.16h0Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M151.22,375.86h6.18v2.31h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M159.46,375.86h6.19v2.31h-6.19Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M167.71,372.25h6.18v5.92h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M176,375.9h6.18v2.27H176Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M184.19,376.2h6.18v2h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M192.43,368.55h6.19v9.62h-6.19Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M200.68,367.53h6.18v10.64h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M208.92,374.07h6.18v4.1h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M217.16,368.87h6.18v9.3h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M225.4,359h6.18v19.13H225.4Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M233.65,376.89h6.18v1.28h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M241.89,372.28h6.18v5.89h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M250.13,372.35h6.18v5.82h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M258.37,372.37h6.18v5.8h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M266.61,354.9h6.19v23.27h-6.19Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M274.86,332.61H281v45.56h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M283.1,316h6.18v62.18H283.1Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M291.34,340.32h6.18v37.85h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M299.58,299.44h6.19v78.73h-6.19Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M307.83,373H314v5.2h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M316.07,313.62h6.18v64.55h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M324.31,299h6.18v79.2h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M332.55,304.54h6.18v73.63h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M340.8,368.42H347v9.75H340.8Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M349,311.41h6.18v66.76H349Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M357.28,316.08h6.18v62.09h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M365.52,310.7h6.18v67.47h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M373.76,239.1H380V378.17h-6.19Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M382,267.59h6.18V378.17H382Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M390.25,252.25h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M398.49,229.66h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M406.73,146.83h6.19V378.17h-6.19Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M415,183.11h6.18V378.17H415Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M423.22,204.58h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M431.46,234.35h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M439.7,263.83h6.19V378.17H439.7Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M448,65.09h6.18V378.17H448Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M456.19,122.35h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M464.43,170.07h6.18v208.1h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M472.67,79.4h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M480.92,42.44h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M489.16,114.13h6.18v264h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M497.4,83.77h6.18v294.4H497.4Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M505.64,139.18h6.18v239h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M513.88,134.32h6.19V378.17h-6.19Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M522.13,117.3h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M530.37,222.88h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M538.61,100.18h6.18v278h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M546.85,181.29H553V378.17h-6.19Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M555.1,175h6.18V378.17H555.1Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M563.34,83.33h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M571.58,231.14h6.18v147h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M579.82,268H586V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M588.07,200.35h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M596.31,38.92h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M604.55,181.38h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M612.79,245.11H619V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M621,305.42h6.19v72.75H621Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M629.28,157.27h6.18v220.9h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M637.52,321.65h6.18v56.52h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M645.76,293.47h6.18v84.7h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M654,120.82h6.19V378.17H654Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M662.25,219h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M670.49,250.23h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				  <path class="e" d="M678.73,250.23h6.18V378.17h-6.18Z" transform="translate(-4.95 -6.48)"/>
				</g>
				<line class="f" x2="8.8"/>
				<text class="g" transform="translate(351.14 58.61) scale(1.04 1)">1997<tspan class="h"><tspan x="-91.61" y="21">K</tspan><tspan class="i" x="-79.24" y="21">y</tspan><tspan x="-69.47" y="21">oto P</tspan><tspan class="j" x="-21.56" y="21">r</tspan><tspan x="-13.69" y="21">otocol</tspan></tspan></text>
				<g>
				  <path class="k" d="M395.4,35.78s42.49-20.14,76-7.21" transform="translate(-4.95 -6.48)"/>
				  <polygon class="l" points="463.04 26.13 472.96 25.1 467.12 17.02 463.04 26.13"/>
				</g>
			  </svg>
			  
						  
			<p>In 2017, exactly 20 years after the Kyoto agreement, the green agenda has penetrated the manifestos of practically all political families.
			Mentions of the green agenda have doubled and now reach the total sum of 526. This increase, however, is still not enough to solve the challenges posed by climate change for the next century.			</p>
			<p>Explore the next chart to see how other politicals trends have modified european manifestos in the last 30 years</p>

	
			<button on:click={() => scatterStep = 0}>Arrange like so</button>
			<button on:click={() => scatterStep = 1}>Rearrange again</button>
		<!-- 	<Exploratory 
				data={groupedData2}
				layout='fs'
				step2={scatterStep}/></div>-->
		

	<!-- <Scatter 
		data={groupedData2}
		layout='fs'
		step={steps[index]}/> -->
</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	.intro svg {
		width: 200px;
		margin: 0 auto;
	}

	section {
		height: 80vh;
		background-color: rgba(255, 255, 255, 0);
		color: #191919;
		text-align: center;
		padding: 1em;
		padding-top: 30vh;
		margin: 0 0 2em 0;
		padding-top:50vh;
	}

	/* .section-2 {
		padding-top: 80px;
	} */

	.deck {
		opacity: 0.6;
		margin: 0 auto;
		line-height: 34px;
		text-align: center;
		font-size: 30px;
	}

	h3 {
		text-align: left;
	}

	.LEFT-LEAN  {
		background-color:#e31a1c;
		display: inline;
		border-radius: 5px;
		border: 2px solid #e31a1c;
		color: white;
		padding: 1px;

	}

	.RIGHT-LEAN {
		background-color:#1f78b4;
		display: inline;
		border-radius: 5px;
		border: 2px solid #1f78b4;
		color: white;
		padding: 1px;

	}

	.ECO {
		background-color:#33a02c;
		display: inline;
		border-radius: 5px;
		border: 2px solid #33a02c;
		color: white;
		padding: 1px;

	}

	p {
		width: 400px;
		margin: 0 auto;
		opacity: 1;
		line-height: 24px;
		padding-bottom: 30px;
		text-align: left;
		font-size: 16px;

	}

	.text-content p {
		width: 500px;
		margin: 0 auto;
		opacity: 1;
		line-height: 24px;
		padding-bottom: 30px;
		text-align: left;
		font-size: 16px;
		text-align: justify;
	}

	.text-content svg {
	width: 350px;
	margin-bottom: 5vh;
	}

	.no-events {
		pointer-events:none;
	}

	h3 {
		font-size: 1.17em;
		width: 400px;
		margin: 0 auto;
		padding-bottom: 15px;
	}

	.white-bg {
		background-color: hsla(0,0%,100%,.8);
		width: 400px;
		margin: 0 auto;
		padding: 10px;
	}

	@media (min-width: 200px) {
		main {
			text-align: center;
			padding: 1em;
			margin: auto;
		}
	}
</style>
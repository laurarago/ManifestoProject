<script>
	import { Layer } from 'svelte-canvas'
	
	export let scale, 
			tickSize = 4, 
			margin, 
			tickNumber = 10,
			type = "x";
	
	$: ticks = scale.ticks(tickNumber);
	
	$: render = ({ context, width, height }) => {
		context.beginPath();
		
		ticks.forEach(d => {
				if (type === "x") {
					context.moveTo(scale(d), height - margin.bottom);
				} else if (type === "y") {
					context.moveTo(width, scale(d));
					context.lineTo(margin.left - tickSize, scale(d));
				}
		});
			
		context.strokeStyle = "rgb(209, 209, 209)";
		context.stroke();

		context.textAlign = type === "x" ? "center" : "right";
		context.textBaseline = type === "x" ? "top" : "middle";
		context.fillStyle = "black";
		context.font="small-caps 0.9em Barlow Condensed";
		
		if (type === "x") { 
			context.fillText("Far Left", scale(-25),0);
		} 
		else if (type === "y") {	
			ticks.forEach(d => { 
				context.fillText(d, margin.left - tickSize - 1, scale(d));
			});
		}
		}

	
</script>

<Layer {render} />
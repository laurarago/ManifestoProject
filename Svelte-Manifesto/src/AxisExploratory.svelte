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
		context.lineWidth = 0.5;
		context.stroke();

		context.textAlign = type === "x" ? "center" : "right";
		context.textBaseline = type === "x" ? "top" : "middle";


		if (type === "x") { 
			context.font="1em Barlow Condensed";
			context.fillStyle = "rgba(0, 0, 0, 0.75)";
			context.fillText("FAR LEFT", scale(-34),0);
			context.fillText("CENTER-LEFT", scale(-15),0);
			context.fillText("FAR RIGHT", scale(22),0);
			context.fillText("CENTER-RIGHT", scale(5),0);

		} 
		else if (type === "y") {	
			ticks.forEach(d => { 
				context.font="0.8em Barlow Condensed";
				context.fillStyle = "black";

				context.fillText(d, margin.left - tickSize - 1, scale(d));
				
			});
		}
		}

	
</script>

<Layer {render} />
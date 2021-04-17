
<script>
	import { Layer } from 'svelte-canvas'
	import { tweened } from 'svelte/motion';
	import { quadOut, cubicOut } from 'svelte/easing';
	export let x = 0;
	export let y = 0;
	export let fill = "black"; 
	export let stroke = null; 
    export let strokeWidth = 1;
    export let radius = 1;
	
    const _x = tweened(x, { duration: 600, easing:quadOut});
    const _y = tweened(y, { duration: 600, easing:quadOut});
	const _radius = tweened(radius, { duration: 600, easing:cubicOut});
    $: _x.set(x);
    $: _y.set(y);
	$: _radius.set(radius);

	
	$: render = ({ context }) => {
		context.fillStyle = fill;
		context.beginPath();
		context.arc($_x, $_y, $_radius, 0, Math.PI * 2);
		context.save();
		context.globalAlpha = 0.7;
		context.fill();
		
		if (stroke) {
			context.strokeStyle = stroke;
			context.lineWidth = strokeWidth;
			context.beginPath();
			context.arc($_x, $_y, $_radius + strokeWidth / 2, 0, Math.PI * 2);
			context.globalAlpha = 1;
			context.stroke();
		} 
		context.restore();
	}
</script>

<Layer {render} priority={stroke && 1} />

<script>
	import { Layer } from 'svelte-canvas'
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	export let d;
    export let strokeWidth = 3;
    export let color;

	$: render = ({ context }) => {
		const p = new Path2D(d);
        context.strokeStyle = color;
        context.lineWidth = strokeWidth;
		context.stroke(p);
	}
</script>

<Layer {render} />
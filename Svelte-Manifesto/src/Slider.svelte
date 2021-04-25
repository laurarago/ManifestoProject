<script>
    import { createEventDispatcher } from "svelte";
    
    import RangeSlider from "svelte-range-slider-pips";
    export let value = 1996;
    const dispatch = createEventDispatcher();
    
  </script>

<RangeSlider
		min={1990}
    max={2020}
    step={1}
    float={true}
    pips first='label' 
		last='label'
    values={[value]}
    on:change={(e) => { 
        value=e.detail.value; 
        dispatch("change", { value }); 
    }} 
/>

<style>
	/* :global(body) { 
		padding: 50px;
		width: 60%;
	  font-family: Barlow, sans-serif;
		font-size: 0.5em;
	} */
</style>
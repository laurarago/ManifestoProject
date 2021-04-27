<script>
    import { createEventDispatcher } from "svelte";
    
    import RangeSlider from "svelte-range-slider-pips";
    export let value = 1996;
    const dispatch = createEventDispatcher();
    
    export let min;
    export let max;


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

<script>
    import { createEventDispatcher } from "svelte";
    
    import RangeSlider from "svelte-range-slider-pips";
    export let value = 1996;
    const dispatch = createEventDispatcher();
    
  </script>

<RangeSlider
    min={1993}
    max={2019}
    step={1}
    float={true}
    pips={true}
    pipstep={1}
    first={true}
    last={true}
    values={[value]}
    on:change={(e) => { 
        value=e.detail.value; 
        dispatch("change", { value }); 
    }} 
/>
  


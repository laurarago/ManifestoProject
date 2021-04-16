import App from './App.svelte';
import {csv} from "d3-fetch";


const dades = csv('groupedData.csv',  {encoding: 'utf8'})
	.then(data => { 

        data.forEach( d => {
            d.avgVote = +d.avgVote;
            d.environWeighted =  +d.environWeighted;
            d.index = new Date(d.index);
            d.parfam = +d.parfam;
            d.per503 = +d.per503;
            d.pervote = +d.pervote;
        });

        const app = new App({
            target: document.body,
            props: {
                dades: data
                
            }
        })
    });

export default app;
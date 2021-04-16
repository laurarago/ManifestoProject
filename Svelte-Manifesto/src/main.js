import App from './App.svelte';
import {csv} from "d3-fetch";


const dades = csv('groupedData.csv',  {encoding: 'utf8'})
	.then(data => { console.log(data)
        const app = new App({
            target: document.body,
            props: {
                dades: data
                
            }
        })
    });

export default app;
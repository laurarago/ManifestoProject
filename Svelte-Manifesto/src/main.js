import App from './App.svelte';
import {json} from "d3-fetch";


const groupedData = json('groupedData.json',  {encoding: 'utf8'})
	.then(data => { const app = new App({
            target: document.body,
            props: {
                groupedData: data
                
            }
        })
    });

export default app;
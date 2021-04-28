import App from './App.svelte';
import data from './data/groupedData.json'
import data_spain from './data/countryData.json'

const app = new App({
    target: document.body,
    props: {
        groupedData: data,
        groupedData2: data_spain,
    }
})
export default app;
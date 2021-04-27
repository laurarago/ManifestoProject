import App from './App.svelte';
import data from './data/groupedData.json'
import data_spain from './data/spain_groupedByPartyName.json'
import data_grouped from './data/merged.json'

const app = new App({
    target: document.body,
    props: {
        groupedData: data,
        groupedData2: data_spain,
        mergedData: data_grouped
    }
})
export default app;
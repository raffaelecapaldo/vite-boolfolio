import { reactive } from 'vue';
import axios from 'axios';


export const store = reactive({
    getProjects(apiLink, onlyone) {
        store.loading = true;
        axios.get(apiLink).then((res) => {
            if (!onlyone || onlyone === undefined) {
                store.projects = res.data.results.data;
                store.links = res.data.results.links;
            }
            else {
                store.project = res.data.results;
            }

            store.loading = false;

        })
    },
    projects: [],
    links: [],
    loading: false,
    project: [],
})
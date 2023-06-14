import { reactive } from 'vue';
import axios from 'axios';
import router from '../router/index'



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
            if (!res.data.success) {
                router.push({ name: 'NotFound' });
            }

        })
    },
    projects: [],
    links: [],
    loading: false,
    project: [],
})
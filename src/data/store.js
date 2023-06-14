import { reactive } from 'vue';
import axios from 'axios';


export const store = reactive({
    getProjects(apiLink) {
        store.loading = true;
        axios.get(apiLink).then((res) => {
          store.projects = res.data.results.data;
          store.links = res.data.results.links
          store.loading = false;
  
        })
      },
      projects: [],
      links: [],
      loading: false,
})
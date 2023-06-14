<template>
    <div class="container-fluid">
      <div class="row">
       <Card v-for="project in projects" :project="project"/>
        
      </div>
      <nav class="mt-2">
        <ul class="pagination d-flex justify-content-center">
          <li v-for="link in links" @click="changePage(link)" :class="{ 'active' : link.active, 'disabled' : link.url === null }" class="page-item"><a
              class="page-link" href="#" v-html="link.label"></a></li>
        
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import Card from '../components/Card.vue';
  import axios from 'axios';
  export default {
    name: 'Home',
    components: {
        Card,
    },
    data() {
      return {
        link: 'http://localhost:8000/api/projects',
        projects: [],
        info: [],
        links: [],
      }
    },
    methods: {
      getProjects(apiLink) {
        axios.get(apiLink).then((res) => {
          this.projects = res.data.results.data;
          this.links = res.data.results.links
  
        })
      },
      //Per disabilitare @click e non solo applicare disabled sul CSS
      changePage(link) {
        if (link.url) {
            this.getProjects(link.url)
        }
        else {
            return
        }

      }
    },
    created() {
      this.getProjects(this.link);
    }
  
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>
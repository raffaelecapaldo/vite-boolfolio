<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    name: 'App',
    data() {
      return {
        title:'Hello World',
        apiUrl: 'http://localhost:8000/api'
      }
    },
    methods: {
      getProjects() {
        axios.get(`${this.apiUrl}/projects`).then((res) => {
          const projects = res.data.results.data;
          console.log(projects);
        })
      }
    },
    mounted() {
      this.getProjects();
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
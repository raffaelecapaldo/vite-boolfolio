<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="project in projects" class="col-2">
        <div class="card" style="width: 18rem;">
          <img :src="project.image_url" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p v-html="project.description" class="card-text"></p>
            <div class="languages mb-2">
              <span v-for="language in project.languages" :style="{'background-color' : language.badge_color}" class="badge me-1">{{ language.name }}</span>
            </div>
            <a :href="project.repo_url" class="btn btn-primary">Repository</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      title: 'Hello World',
      apiUrl: 'http://localhost:8000/api',
      currentPage: 1,
      lastPage: null,
      projects: [],
    }
  },
  methods: {
    getProjects(pageNumber) {
      axios.get(`${this.apiUrl}/projects`, { params: { 'page': pageNumber } }).then((res) => {
        const projects = res.data.results.data;
        this.projects = projects;
      })
    }
  },
  mounted() {
    this.getProjects(this.currentPage);
  }

}
</script>

<style lang="scss" scoped></style>
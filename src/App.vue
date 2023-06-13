<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="project in projects" class="col-12 col-sm-6 d-flex justify-content-center mb-3">
        <div class="card" style="width: 22rem;">
          <div class="monitor position-relative">
            <img class="card-img-top  matrix-monitor img-fluid " src="images/matrix.png" alt="">

            <div class="project-image position-absolute">
              <img :src="project.image_url" class="card-img-top project-image img-fluid position-absolute" alt="...">
            </div>
        </div>
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p v-html="project.description" class="card-text"></p>
            <div class="languages mb-2">
              <span v-for="language in project.languages" :style="{ 'background-color': language.badge_color }"
                class="badge me-1">{{ language.name }}</span>
            </div >
            <div class="buttons d-flex justify-content-center">
            <a :href="project.repo_url" class="btn btn-primary">Repository</a>
          </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
    <nav class="mt-2">
      <ul class="pagination d-flex justify-content-center">
        <li class="page-item"><a @click="previousPage" class="page-link" href="#">Previous</a></li>
        <li v-for="n in lastPage" @click="getProjects(n)" :class="{ 'active': n === currentPage }" class="page-item"><a
            class="page-link" href="#">{{ n }}</a></li>
        <li class="page-item"><a @click="nextPage()" class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
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
      firstPage: 1,
      lastPage: null,
      projects: [],
      info: [],
    }
  },
  methods: {
    getProjects(pageNumber) {
      axios.get(`${this.apiUrl}/projects`, { params: { 'page': pageNumber } }).then((res) => {
        this.projects = res.data.results.data;
        this.currentPage = res.data.results.current_page;
        this.lastPage = res.data.results.last_page

      })
    },
    nextPage() {
      if (this.currentPage === this.lastPage) {
        this.currentPage = this.firstPage;
      }
      else {
        this.currentPage++
      }
      this.getProjects(this.currentPage);
    },
    previousPage() {
      if (this.currentPage === this.firstPage) {
        this.currentPage = this.lastPage;
      }
      else {
        this.currentPage--;
      }
      this.getProjects(this.currentPage);
    },
    changePage(page) {
      this.currentPage = page;
      this.getProjects(this.currentPage);
    }

  },
  mounted() {
    this.getProjects(this.currentPage);
  }

}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

.card {
  background-color: $darkgrey;
  color:$lightgrey;
.card-title {
  color:white;
}
  .btn {
    width: 200px;
    background-color: $buttonscolor;
    border-color:$bgcolor;
  }
  .project-image {
    top: 8px;
    left: 11px;
    width: 94%;
    height: 94%;
  }
}

.monitor {
  width: 100%;
}

@media screen and (max-width:624px) and (min-width:576px) {
  .card {
  .project-image
  {
    width: 92%;
    height: 92%;
  }
}}
</style>
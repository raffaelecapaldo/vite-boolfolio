<template>
  <div class="container">
    <div class="row mt-5">

      <div v-for="project in projects" class="preview-card">
        <div class="preview-card__wrp">
          <div class="preview-card__item">
            <div class="preview-card__img">
              <img
                :src="project.image_url"
                alt="">
            </div>
            <div class="preview-card__content">
              <span v-for="language in project.languages" :style="{ 'background-color': language.badge_color }"
                class="badge me-1">{{ language.name }}</span>
              <div class="preview-card__title">{{ project.name }}</div>
              <div v-html="project.description" class="preview-card__text"></div>
              <a :href="project.repo_url" class="preview-card__button text-uppercase">repository</a>
            </div>
          </div>

        </div>
      </div>

    </div>
    <nav class="mt-2">
    <ul class="pagination">
      <li class="page-item"><a @click="previousPage" class="page-link" href="#">Previous</a></li>
      <li v-for="n in lastPage" @click="changePage(n)" :class="{ 'active': n === currentPage }" class="page-item"><a
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

<style lang="scss" scoped></style>
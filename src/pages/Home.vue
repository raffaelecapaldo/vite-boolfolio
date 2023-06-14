<template>
    <div class="container-fluid">
      <div class="row">
       <Card v-for="project in projects" :project="project"/>
        
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
  import Card from '../components/Card.vue';
  import axios from 'axios';
  export default {
    name: 'Home',
    components: {
        Card,

    },
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
      }
  
    },
    created() {
      this.getProjects(this.currentPage);
    }
  
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>
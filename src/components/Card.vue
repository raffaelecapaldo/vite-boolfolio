<template>
        <div class="col-12 pe-1 col-sm-6 col-md-6 col-lg-4 col-xxl-3 d-flex justify-content-center mb-3">
          <div class="card" style="width: 22rem;">
            <div class="monitor position-relative">
              <img class="card-img-top  matrix-monitor img-fluid " src="images/matrix.png" alt="">
  
              <div class="project-image position-absolute">
                <img :src="project.image_url" class="card-img-top project-image img-fluid position-absolute" alt="...">
              </div>
          </div>
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <MatrixDescription :description="project.description"/>
              <div class="languages mb-2">
                <span v-for="language in project.languages" :style="{ 'background-color': language.badge_color }"
                  class="badge me-1">{{ language.name }}</span>
              </div >
              <div class="buttons d-flex justify-content-center">
              <a :href="project.repo_url" class="btn btn-primary">Visualizza</a>
            </div>
            </div>
            
          </div>
          
        </div>
</template>

<script>
  import MatrixDescription from '../components/MatrixDescription.vue'
    export default {
        name: 'Card',
        props: ['project'],
        components: {
            MatrixDescription
        }
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
  
  .card {
    background-color: $darkgreen;
    color:$lightgreen;
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
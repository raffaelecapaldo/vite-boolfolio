<template>
        <Loading v-if="store.loading"/>
    <div v-else class="project">
        <div class="project-title d-flex justify-content-center">
            <h1>{{ store.project.name }}</h1>
        </div>
        <div class="container-fluid">
        <div class="project-image mt-2 mb-3">
            <img class="img-fluid" :src="store.project.image_url" alt="">
        </div>

    </div>
    <div class="project-body">
        <div class="container-fluid">
            <div class="languages py-2">
                <span v-for="language in store.project.languages" :style="{ 'background-color': language.badge_color }"
                  class="badge me-1">{{ language.name }}</span>
            </div>
            <p v-html="store.project.description"></p>
            <div class="buttons d-flex justify-content-center">
              <a :href="store.project.repo_url" class="btn btn-primary">Repository</a>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
  import { store } from '../data/store';
  import Loading from '../components/Loading.vue';

    export default {
    name:"Project",
    components: {
        Loading,
    },
    data() {
        return {
            store,
            apiProject: 'http://localhost:8000/api/projects/',

        }
    },
     created(){
        const projectSlug = this.$route.params.slug;
        store.getProjects((this.apiProject + projectSlug), true);
     }   
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


.project {
    .btn {
      width: 40%;
      background-color: $buttonscolor;
      border-color:$bgcolor;
      margin-bottom:30px;
    }
    .project-image {
        img {
            border-radius: 4px;
        }
    }
    .project-title {
        color:white;
        background-color: $darkgreen;
    }
    .project-body {
        background-color: $darkgreen;
        color:$lightgreen

    }
}

</style>
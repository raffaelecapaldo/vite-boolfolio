<template>
    <div class="project">
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
            <p v-html="store.project.description"></p>
        </div>
        </div>
    </div>
</template>

<script>
  import { store } from '../data/store';

    export default {
    name:"Project",
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
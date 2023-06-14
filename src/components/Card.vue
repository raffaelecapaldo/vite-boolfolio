<template>
    <div class="col-12 pe-1 col-md-4 col-lg-3 col-md-4 col-sm-6 col-xxl-2 d-flex justify-content-center mb-3">
        <div class="card" style="width: 22rem;">
            <div class="monitor">
                <img class="inside-image" :src="project.image_url" alt="">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <MatrixDescription :description="project.description" />
                <div class="languages mb-2">
                    <span v-for="language in project.languages" :style="{ 'background-color': language.badge_color }"
                        class="badge me-1">{{ language.name }}</span>
                </div>
                <div class="buttons d-flex justify-content-center">
                    <router-link :to="{ name: 'Project', params: { slug: project.slug } }" class="btn btn-primary">
                        Visualizza
                    </router-link>
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
    color: $lightgreen;


    .card-title {
        color: white;
    }

    .btn {
        width: 200px;
        background-color: $buttonscolor;
        border-color: $bgcolor;
    }

    .project-image {
        top: 8px;
        left: 11px;
        width: 94%;
        height: 94%;
    }
}

.monitor {
    border-image-slice: 28 27 30 30;
    border-image-width: 13px 13px 13px 13px;
    border-image-outset: 12px 1px 10px 0px;
    border-image-repeat: repeat repeat;
    border-image-source: url("images/matrix.png");
}

.inside-image {
    translate: 12px;
    width: 92%;
    height: 165px;
    object-fit: cover;
}


@media screen and (max-width:576px) {
    .inside-image {
    width: 94%;

}

.card {
    min-width: 374px;
}
}
</style>
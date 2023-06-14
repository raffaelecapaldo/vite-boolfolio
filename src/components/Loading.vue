<template>
    <div class="loading">
        <div class="loader">
            <MatrixDescription :description="'CARICAMENTO' "/>
        </div>
    </div>
</template>

<script>
import MatrixDescription from './MatrixDescription.vue';
export default {
    name: 'Loading',
    components: {
        MatrixDescription,
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.loading {
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;

}

.loader {
    font-size:3rem;
    color:$darkgreen;
}
</style>
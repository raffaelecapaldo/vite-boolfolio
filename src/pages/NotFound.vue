<template>
    <div class="not-found">
        <div class="error">
            <p>Pagina non trovata</p>
            <p>Errore 404</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.not-found {
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    
.error {
    color:$darkgreen;
    font-size:2rem;
}
}
</style>
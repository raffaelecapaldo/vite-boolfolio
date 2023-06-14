<template>
    <div class="container-fluid">
        <header class="d-flex justify-content-center">
            <div class="nav-container">
                <nav class="d-flex align-items-center justify-content-between">
                    <div class="logo">
                        <h4 class="m-0">Boolfolio</h4>
                    </div>
                    <div class="navlinks d-flex gap-2">
                        <li> <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link></li>
                        <li> <router-link class="nav-link" to="chi-sono">Chi sono</router-link></li>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.nav-container {
    background-color: #004238;
    padding: 1rem;
    margin-top: 20px;
    margin-bottom: 15px;
    width: 400px;
    border-radius: 30px;
}

nav {
    li {
        list-style: none;
    
    }
}

.logo {
    color: $lightgreen;
    font-family: 'VT323', monospace;

    h4 {
        font-size: 1.9rem;
        cursor:pointer;
    }

    img {
        width: 100px;
        border-radius: 10px;
    }
}

.router-link-active {

    color: white!important;

}

.nav-link {
    color: grey
}
</style>
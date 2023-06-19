<template>
    <form @submit.prevent="sendForm()" class="text-white" action="">
        <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input name="name" v-model="name" type="text" class="form-control" placeholder="Nome">
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Email address</label>
            <input type="email" name="email" v-model="address" class="form-control" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="body" class="form-label">Messaggio</label>
            <textarea name="body" v-model="body" class="form-control" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-info">Invia</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Contact',
    data() {
        return {
            name: '',
            address: '',
            body: '',
            apiUrl: 'http://localhost:8000/api/contacts'
        }
    },
    methods: {
        sendForm() {
            const data = {
                name: this.name,
                address: this.address,
                body: this.body
            }
            axios.post(this.apiUrl, data).then((res) => {
                console.log(res.data);
            }
            )
        }
    }
}
</script>

<style lang="scss" scoped></style>
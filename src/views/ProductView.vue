<template>
    <div>
        <h1>{{ product.name }}</h1>
 
 
        <router-link to="'/productos'">Volver</router-link>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const products = [
    { id: 1, name: "Espumante" },
    { id: 2, name: "Vino" },
    { id: 3, name: "Pisco" }

]
const product = computed(() => products.find((item) => item.id == route.params.id))

</script>


<style scoped></style>
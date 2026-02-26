<template>
    <div>
        <h1 class="product__name">{{ product.name }}</h1>

        <router-link to="/catalogo" class="btn btn-dark">Volver</router-link>
    </div>
</template>

<script setup>

import { computed, defineProps } from "vue"

const props = defineProps(["id"])

const catalogo = [
    { id: 1, name: "Espumante Livianita de Sangre Brut" },
    { id: 2, name: "Vino El Infaltable Carménère" },
    { id: 3, name: "Pisco Black Heron" }

]
const product = computed(() => catalogo.find((item) => item.id == props.id))

</script>


<style scoped>
.product__name{

    color: #54030f;
    font-style: italic;
}
</style>
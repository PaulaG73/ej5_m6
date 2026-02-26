<template>
    <div>
<h1>Catálogo</h1>
<p>Selecciona tu opción favorita!</p>
<ul>
    <li v-for="product in catalogo" :key="product.id">  
    <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
    </li>
</ul>
    </div>
</template>

<script setup>
const catalogo =[
{id :1, name : "Espumante Livianita de Sangre Brut"},
{id :2, name : "Vino El Infaltable Carménère"},
{id :3, name : "Pisco Black Heron"}

]
</script>

<style scoped>

</style>
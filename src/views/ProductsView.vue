<template>
    <div>
<h1>Lista de Productos</h1>
<p>Estas son las opciones disponibles</p>
<ul>
    <li v-for="product in products" :key="product.id">
    <router-link :to="'/product/${product.id}'">{{ product.name }}</router-link>
    </li>
</ul>
    </div>
</template>

<script setup>
const products =[
{id :1, name : "Espumante"},
{id :2, name : "Vino"},
{id :3, name : "Pisco"}

]
</script>

<style scoped>

</style>
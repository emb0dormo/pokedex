<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="{ name: 'Pokemon-details', params: { id: pokemon.id } }">
    <div class="product-card">
      <h2>{{ pokemon.name }}</h2>
      <p>Type 1: {{ pokemon.type1 }}</p>
      <p>Type 2: {{ pokemon.type2 }}</p>
      <span>Evolution: {{ pokemon.evolution }}</span>
      <img :src="pokemon.image_url" alt="Pokemon Image" />
    </div>
  </RouterLink>
</template>



<style scoped>
.product-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>

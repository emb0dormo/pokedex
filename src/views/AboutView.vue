<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import PokemonService from '@/services/PokemonService.js';

const pokemons = ref([]);

onMounted(async () => {
  console.log('Firebase connected!');
  try {
    const querySnapshot = await PokemonService.getPokemonList();
    querySnapshot.forEach((doc) => {
      pokemons.value.push(doc);
    });
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
  }
});

</script>


<template>
  <div class="products">
    <ProductCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

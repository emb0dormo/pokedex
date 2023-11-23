<template>
  <div class="products">
    <RouterLink
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :to="{ name: 'Pokemon-details', params: { id: pokemon.id } }"
    >
      <ProductCard :pokemon="pokemon" />
    </RouterLink>
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import PokemonService from '@/services/PokemonService.js';
import ProductCard from '@/components/ProductCard.vue';

const pokemons = ref([]);

onMounted(async () => {
  console.log('Firebase connected! poklist is called');
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

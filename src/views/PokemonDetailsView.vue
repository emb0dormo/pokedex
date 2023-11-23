<script setup>
import { ref, onMounted, defineProps } from 'vue';
import PokemonService from '@/services/PokemonService.js';

const pokemonDetails = ref(null);

const props = defineProps({
  id: { required: true },
});

onMounted(async () => {
  console.log('PokemonDetailsView mounted with ID:', props.id);

  try {
    const response = await PokemonService.getPokemonDetails(props.id);
    pokemonDetails.value = response.data();
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
  }
});
</script>



<template>
  <div v-if="pokemonDetails">
  <h1>{{ pokemonDetails.name }}</h1>
  <p>Type 1: {{ pokemonDetails.type1 }}</p>
  <p>Type 2: {{ pokemonDetails.type2 }}</p>
  <img :src="pokemonDetails.image_url" alt="Pokemon Image" />
</div>

</template>

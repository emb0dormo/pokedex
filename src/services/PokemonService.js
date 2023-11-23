import { db } from '@/js/firebase.js';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

const pokemonCollection = collection(db, 'pokemon');

export default {
  async getPokemonList() {
    const querySnapshot = await getDocs(pokemonCollection);
    return querySnapshot.docs;
  },
  getPokemonDetails(id) {
    const pokemonDoc = doc(pokemonCollection, id);
    return getDoc(pokemonDoc);
  },
};

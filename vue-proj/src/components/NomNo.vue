<template>
   Total: ${{ nom.total }} 
        Items: {{ nom.items }}
    <h1>Bag:</h1>
      <Cakes
      v-for="food in nom.bag"
      :key="food.name"
      :name = "food.name" 
      :price="food.price"
/>
<button id="restart" @click="restart">RESTART</button>
</template>

<script>
import { nom } from "../shop";
import Cakes from "./NomMaybe.vue";

export default {
  name: "NomNo",
  data() {
    return {
      nom,
    };
  },
  methods:{
  restart: function (){
  nom.total = 0;
  nom.items = 0
  nom.bag = []
}}
  } 
</script>

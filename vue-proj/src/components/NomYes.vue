<template>
  <div class="NomYes">
    <h1>{{ name }}</h1>
    <img :src="image" alt="" />
    <h2>${{ price }}</h2>
    <button id="Add" @click="Adding()">Add</button>
  </div>
</template>
<script>
import { nom } from "../shop";
export default {
  name: "NomYes",
  props: {
    name: String,
    price: Number,
    image: String,
  },
  data() {
    return {
      nom,
    };
  },
  methods: {
    Adding() {
      nom.bag.push({
        name: this.name,
        price: this.price,
      });
      nom.total += this.price;
      nom.items += 1;
    },
    /* 
    RemoveItem() {
      nom.bag.push({
        name: this.name,
        price: this.price,
        image: this.image,
      });
    }, */
  },
};
</script>
<style>
img {
  height: 500px;
  max-width: 500%;
}
.NomYes {
  background-color: beige;
  color: black;
  border-radius: 5%;
  border-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 24px;
}
</style>
import { reactive } from "vue";

export const nom = reactive({
  foods: [
    {
      name: "Rainbow",
      price: 64.99,
      img: "https://cdn3.1800baskets.com/wcsstore/Baskets/images/catalog/4106821x.jpg?width=406&height=445quality=60&auto=webp&auto=webp&optimize={medium}",
    },

    {
      name: "Red Velvet",
      price: 66.99,
      img: "https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/175139x.jpg?quality=65&auto=webp&optimize={medium}",
    },
    {
      name: "Double Chocolate",
      price: 64.99,
      img: "https://cdn3.1800baskets.com/wcsstore/Baskets/images/catalog/195077_23x.jpg?quality=65&auto=webp&optimize={medium}",
    },

    {
      name: "Gluten Free RV",
      price: 39.99,
      img: "https://cdn4.fruitbouquets.com/wcsstore/Flowers/images/catalog/183785alt_view1x.jpg",
    },
    {
      name: "Humming Bird",
      price: 69.99,
      img: "https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/19_29090_30GL_01ex.jpg?quality=65&auto=webp&optimize={medium}",
    },
    {
      name: "CinaWalCoff",
      price: 44.99,
      img: "https://cdn.shopify.com/s/files/1/0551/9071/6499/products/10_CinnamonWalnutCoffeeCake.jpg?v=1666147258",
    },

    {
      name: "Carrot",
      price: 69.99,
      img: "https://cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/18_26897_30J_01ex.jpg?quality=65&auto=webp&optimize={medium}",
    },

    {
      name: "Mousse",
      price: 39.99,
      img: "https://cdn4.fruitbouquets.com/wcsstore/Flowers/images/catalog/183784x.jpg",
    },
   {
      name: "PineCocoCoff",
      price: 29.99,
      img: "https://cdn.shopify.com/s/files/1/0551/9071/6499/products/PineappleCoconutCoffeeCake.jpg?v=1666408121"
    },
    {
      name: "Chocolate",
      price: 64.99,
      img: "https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/14982221x.jpg?quality=65&auto=webp&optimize={medium}",
    },

    {
      name: "Cheesecake",
      price: 59.99,
      img: "https://cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/18_27322_30XP_01ex.jpg?quality=65&auto=webp&optimize={medium}",
    },
  ],
  bag: [],
  total: 0,
  items: 0,
});
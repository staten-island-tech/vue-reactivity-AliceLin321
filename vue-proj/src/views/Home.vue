<template>
  <div class ="home">

  <h1 v-if="graduated">{{ student }}</h1>
  <h1 v-else>"They did not yet graduate"</h1>

  <ul>
    <li v-for="animal in animals" :key="animal"> {{ animal }}
<!-- //animals.forEach(animal) =>{} -->
    </li>
  </ul>

  <button @click="authState" v-if="loggedIn">LogOut</button>
  <button @click="authState" v-else>Login</button>

  <input type="text" placeholder="edit me" v-model="message"/>
  <p> {{ message }}</p>
  </div>
  </template>
  


  <script>
  export default {
   name: "Home",
   components: {},
  data() {
  return {
  student: "Harry",
  graduated: true,
  animals: ["Pig", "Horse", "Donkey", "Cow", "Duck"  ],
  loggedIn: true,
  message: "",
  };
  },
methods: {
  authState: function() {
    if(this.loggedIn===false){
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
    }
  }
}
};
  </script>
  <style>
  h1 {
    color: red
  }
  </style>

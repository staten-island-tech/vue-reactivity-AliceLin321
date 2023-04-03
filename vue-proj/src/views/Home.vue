 <template>
 <div class="home">
    <h1 v-if="graduated">{{ student }}</h1>
    <h1 v-else>"They did not yet graduate"</h1>
</div> 
   <ul>
      <li v-for="animal in animals" :key="animal">
        {{ animal }}
       <!--  animals.forEach(animal) =>{}  -->
      </li>
    </ul> 
  
      
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
       student: 'Harry',
      graduated: true,
      animals: ['Pig', 'Horse', 'Donkey', 'Cow', 'Duck'],
     
    };
  },
} 
</script>

<style>
h1 {
  color: red;
}
</style> 

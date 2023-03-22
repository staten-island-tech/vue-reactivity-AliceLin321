<!-- <template>
 <div class="home">
    <h1 v-if="graduated">{{ student }}</h1>
    <h1 v-else>"They did not yet graduate"</h1>
</div> 
   <ul>
      <li v-for="animal in animals" :key="animal">
        {{ animal }}
        //animals.forEach(animal) =>{} 
      </li>
    </ul> 
  
      <button @click="authState" v-if="loggedIn">LogOut</button>
      <button @click="authState" v-else>Login</button> 
    
 
    <input type="text" placeholder="edit me" v-model="message" />
    <p>{{ message }}</p>
 
   <div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span> Checked names: {{ checkedNames }}</span>
  </div> 
   <div>
    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <spar>{{ selected }}</spar>
  </div>
  <div class="home">
    <Button>Button One</Button>
    <Button>Button Two</Button>
  </div>
</template>

<script>
import Button from "../components/Button.vue"; 
export default {
  name: 'Home',
  components: {
    Button,
  },
  data() {
    return {
       student: 'Harry',
      graduated: true,
      animals: ['Pig', 'Horse', 'Donkey', 'Cow', 'Duck'],
      loggedIn: true,
      message: '',
      checkedNames: [], 
      selected: "",
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
}
</script>

<style>
h1 {
  color: red;
}
</style> -->

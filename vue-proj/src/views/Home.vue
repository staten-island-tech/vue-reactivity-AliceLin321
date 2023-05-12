 <template> 
 <h1>Shopping Simulator</h1>
    <NomNo/>
      <NomYes
        v-for="food in nom.foods"
        :name="food.name"
        :price="food.price"
        :image="food.img"
      />
</template>
<script>
import NomYes from "../components/NomYes.vue";
import { nom } from "../shop";
import NomNo from "../components/NomNo.vue";
export default {
  name: "Main",
  components: {
    NomYes,
    NomNo,
  },
  data() {
    return {
      nom,
    };
  },
};
</script>
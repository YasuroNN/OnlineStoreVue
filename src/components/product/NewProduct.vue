<template>
  <!-- Базовая разметка для кмопонет согласно сетке -->
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm-3>
        <h1 class="text--secondary mb3">Create new Product</h1>
        <form class="mb-3">
          <v-text-field v-model="title"  label="Title" required></v-text-field>
          <v-text-field v-model="description" label="Description" required type="text-aria" aria-multiline=""></v-text-field>
          <v-text-field v-model="vendor" label="Vendor" required></v-text-field>
          <v-text-field v-model="price" label="Prie" required></v-text-field>
        </form>
        <v-layout class="mb-3">
          <v-flex xs12>
              <v-btn class=warning>Upload</v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
              <img src="" height="200">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-btn class="success" @click="create" :loading="loading" :disabled="loading">Create</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-flex>
        </v-layout> 
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      title:'',
      description: '',
      vendor: '',
      price: 0
    }
  },
  methods:{
    clear (){

    },
    create(){
        const product ={
            title:  this.title,
            description: this.description,
            vendor: this.vendor,
            price: this.price,
            imageSrc: 'https://items.s1.citilink.ru/1376001_v01_b.jpg'
        }
        this.$store.dispatch('createProduct', product).then(()=>{
          this.$router.push('/list')
        }).catch(()=>{})
    }
  },
  computed: {
    loading (){
      return this.$store.getters.loading
    }
  }
};
</script>

<style scoped>
h1 {
  background: red;
}
</style>
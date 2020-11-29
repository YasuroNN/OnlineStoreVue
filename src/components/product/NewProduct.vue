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
              <v-btn class=warning @click="upload">Upload</v-btn>
              <input ref="fileInput" type="file" style="display: none;" accept="image/*" @change="onFileChange">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
              <img :src="imageSrc" height="200px" v-if="imageSrc">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-btn class="success" @click="create"  :disabled="!image">Create</v-btn>
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
      price: 0,
      image: null,
      imageSrc: ''
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
            image: this.image
        }
        this.$store.dispatch('createProduct', product).then(()=>{
          this.$router.push('/list')
        }).catch(()=>{})
    },
    upload(){
      this.$refs.fileInput.click()
    },
    onFileChange(event){
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e =>{
          console.log(e)
          this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image=file
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
<template>
  <!-- Базовая разметка для кмопонет согласно сетке -->
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <v-text-field name="email" label="email" type="email" v-model="email"></v-text-field>
              <v-text-field name="password" label="Password" type="password" v-model="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSubmit" >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    loading (){
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit() {
        if (this.$refs.form.validate()){
          const user ={
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('loginUser',user).then(()=>{
            this.$router.push('/')
          })
          .catch(error => console.log(error))
        }
        
    }
  },
  created () {
    if (this.$route.query['loginError']){
      this.$store.dispatch('setError', 'Авторризуйся брат')
    }
  }
};
</script>
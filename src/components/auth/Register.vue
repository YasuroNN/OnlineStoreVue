<template>
  <!-- Базовая разметка для кмопонет согласно сетке -->
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Create form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <v-text-field name="email" label="email" type="email" v-model="email"></v-text-field>
              <v-text-field name="password" label="Password" type="password" v-model="password"></v-text-field>
              <v-text-field name="confirmPassword" label="Password" type="password" v-model="confirmPassword"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSubmit">Create account</v-btn>
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
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSubmit() {
        if (this.$refs.form.validate()){
          const user ={
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
          }
          console.log(user)
        }
        
    }
  }
};
</script>
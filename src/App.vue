<!-- 

<v-app></v-app> - аналог div id = app из vue 
<v-main>- главный html элемент. В нем все происходит. он занимате весь экран.
<v-app-bar app> это типо тулбар. Директива app говорит vuetify что это элемент разметки, т.е эта директива влият на <v-main>. 
  Когда есть эта директива, то <v-main> пересчитывается исходя из того, сколько пространства занимает элемент (<v-app-bar>). 
  В данном случае v-app-bar втсанет в самом верху, а контент </v-main> будет распологаться под ним.

-->
<template>
  <v-app>
    <vor-navbar></vor-navbar>
    <template v-if="error">
      <v-snackbar :multi-line="true" :timeout="5000" color="error" @input="colorError" :value="true">
        {{ error }}
        <v-btn dark @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    vorNavbar: Navbar
  },
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    }
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  }
};
</script>
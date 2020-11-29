import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
// import 'firebase/messaging'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  created () {
    const firebaseConfig = {
      apiKey: 'AIzaSyA-byhajAuWomrAJHRhKBymSmAMJo3YSH0',
      authDomain: 'onlinestore-31327.firebaseapp.com',
      databaseURL: 'https://onlinestore-31327.firebaseio.com',
      projectId: 'onlinestore-31327',
      storageBucket: 'onlinestore-31327.appspot.com',
      messagingSenderId: '417333631378',
      appId: '1:417333631378:web:a2b7ca769b057d04a7894b'
  }
  firebase.initializeApp(firebaseConfig)
  firebase.auth().onAuthStateChanged(user => {
    if (user){
      this.$store.dispatch('authLoginUser', user)
    }
  })
  this.$store.dispatch('fetchProducts')
  },
  render: h => h(App)
}).$mount('#app')

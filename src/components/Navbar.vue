<template>
  <div>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list dense>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.url">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title @click="onLogout" v-if="isUserLoggedIn">LogOut</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="sideNav=!sideNav" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Online store</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, name,i) in items" :key="i" :to="item.url">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.text }}
        </v-btn>
        <v-btn @click="onLogout" v-if="isUserLoggedIn">LogOut</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      selectedItem: 1
    };
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logoutUser");
      this.$router.push("/");
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    items() {
      if (this.isUserLoggedIn) {
        return [
          { text: "Home", icon: "mdi-flag", url: "/" },
          { text: "MyProducts", icon: "mdi-flag", url: "/list" },
          { text: "New Product", icon: "mdi-flag", url: "/new" },
        ];
      }
      return [
        { text: "Home", icon: "mdi-flag", url: "/" },
        { text: "login", icon: "mdi-clock", url: "/login" },
        { text: "Register", icon: "mdi-account", url: "/register" }
      ];
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
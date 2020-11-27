<template>
  <div>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list dense>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="sideNav=!sideNav" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, name,i) in items" :key="i">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.text }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      selectedItem: 1,
      items: [
        { text: 'linkOne', icon: 'mdi-clock' },
        { text: 'linkTwo', icon: 'mdi-account' },
        { text: 'linkThree', icon: 'mdi-flag' },
      ]
    };
  }
};
</script>
<template>
  <!-- Базовая разметка для кмопонет согласно сетке -->
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="(product, i) in products" :key="i" :src="product.imageSrc" />
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="(product, i) in products" :key="i">
          <router-link :aria-label="product.title" :to="'/product/' + product.id">
            <v-img :src="product.imageSrc" height="200px"/>
          </router-link>
          <v-card class="mx-auto" max-width="344">
            <v-card-title>{{product.title}}</v-card-title>
            <v-card-subtitle>{{product.venodr }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text :to="'/product/' + product.id">Explore</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider/>
                <v-card-text>Test text</v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      products: [
        {
          id: "1",
          title: "Lenovo Legion",
          venodr: "Lenovo",
          price: 100,
          imageSrc: "https://cdn1.ozone.ru/s3/multimedia-m/6007603366.jpg"
        },
        {
          id: "2",
          title: "MacBook",
          venodr: "apple",
          price: 200,
          imageSrc: "https://items.s1.citilink.ru/1376001_v01_b.jpg"
        },
        {
          id: "3",
          title: "Toshiba ls200",
          venodr: "Toshiba",
          price: 400,
          imageSrc:
            "https://www.notebookcheck-ru.com/uploads/tx_nbc2/ToshibaSatelliteProR40-C__1_.JPG"
        }
      ]
    };
  }
};
</script>
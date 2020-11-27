<template>
  <!-- Базовая разметка для кмопонет согласно сетке -->
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h1 class="text--secondary mb3">ProductList</h1>
          <v-card class="elevation-10 mb-2" v-for="(product, i) in products" :key="i">
            <v-layout>
              <v-flex xs4>
                <v-img :src="product.imageSrc"></v-img>
              </v-flex>
              <v-flex xs8>
                <v-card-text>
                  <h2 class="text--primary"> {{product.title }}</h2>
                  <p>{{product.venodr }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn class="info" :to="'/product/' + product.id">Open</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
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
<template>
  <!-- Базовая разметка для кмопонет согласно сетке -->
  <v-container>
    <section class="product mt3 elevation-10">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img src="https://items.s1.citilink.ru/1376001_v01_b.jpg" class="product_img" />
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product_info">
            <h5 class="product_title display-1 mb-3 mt-3">lorem lorem</h5>
            <p class="product_category_titile">
              <span class="product_titile">Venodor: </span>Lorem
            </p>
            <p class="product_price title">
              <span class="product_title">Price: </span>$1000
            </p>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.product {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #1c77ad;
  padding: 30px;
  margin-bottom: 100px;
}

.product_img {
  height: 200px;
  width: 550px;
}

.product_info {
  margin-left: 50px;
}
.product_titile {
  font-size: 1.6em;
  font-weight: bold;
  color: blue;
  margin-bottom: 0;
}
.product_price {
  color: red;
}
</style>
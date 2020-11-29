<template>
  <!-- Базовая разметка для кмопонет согласно сетке -->
  <v-container>
    <section class="product mt3 elevation-10" v-if="!loading">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img :src="product.imageSrc" class="product_img" />
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product_info">
            <h5 class="product_title display-1 mb-3 mt-3">{{product.title}}</h5>
            <p class="product_category_titile">
              <span class="product_titile">Venodor:</span>
              {{product.vendor}}
            </p>
            <p class="product_price title">
              <span class="product_title">Price:</span>
              {{product.price}}
            </p>
            <vor-edit-product :product="product"></vor-edit-product>
            <v-btn color="primary" class="headline">Buy</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <!-- Чтобы грузилось только первый раз, когда заходишь на страницу, а то ошибки в логах -->
    <section v-else class="text-xs-center">
        <v-progress-circular :size="100" :width="4" color="purple" indeterminate />
    </section>
  </v-container>
</template>

<script>
import EditProduct from './EditProduct'
export default {
  props: ["id"],
  computed: {
    product() {
      const id = this.id;
      return this.$store.getters.productById(id);
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  components: {
    vorEditProduct: EditProduct
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
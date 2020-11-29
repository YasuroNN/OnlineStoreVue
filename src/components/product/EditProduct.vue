<template>
  <v-dialog v-model="dialog" width="400px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" class="headline" v-bind="attrs" v-on="on">Edit</v-btn>
    </template>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex>
            <v-card-title>
              <h1 class="text--primary">Edit product</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex>
            <v-card-text>
              <v-text-field name="title" label="Titile" type="text" v-model="editedTitile"></v-text-field>
              <v-text-field name="vendor" label="Vendor" type="text" v-model="editedVendor"></v-text-field>
              <v-text-field name="price" label="Price" type="price" v-model="editedPrice"></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="light-blue darken-4" @click="onCancel">Cancel</v-btn>
              <v-btn dark color="light-blue darken-4" @click="onSave">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      dialog: false,
      editedTitile: this.product.title,
      editedVendor: this.product.vendor,
      editedPrice: this.product.price
    };
  },
  methods: {
    onCancel() {
      this.editedTitile = this.product.title;
      this.editedVendor = this.product.vendor;
      this.editedPrice = this.product.price;
      this.dialog = false;
    },
    onSave() {
      if (this.editedTitile !== "") {
        this.$store.dispatch("updateProduct", {
          title: this.editedTitile,
          price: this.editedPrice,
          vendor: this.editedVendor,
          id: this.product.id
        });
        this.dialog = false;
      }
    }
  }
};
</script>
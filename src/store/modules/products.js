import fb from "firebase/app";

class Product {
  constructor (title, vendor, price, description, ownerId, imageSrc='', id = null){
    this.title = title
    this.vendor = vendor
    this.price = price
    this.description = description
    this.imageSrc = imageSrc
    this.id = id
  }
}

export default {
  state: {
    products: [
      {
        id: "1",
        title: "Lenovo Legion kek",
        vendor: "Lenovo",
        price: 100,
        imageSrc: "https://cdn1.ozone.ru/s3/multimedia-m/6007603366.jpg",
      },
      {
        id: "2",
        title: "MacBook",
        vendor: "apple",
        price: 200,
        imageSrc: "https://items.s1.citilink.ru/1376001_v01_b.jpg",
      },
      {
        id: "3",
        title: "Toshiba ls200",
        vendor: "Toshiba",
        price: 400,
        imageSrc:
          "https://www.notebookcheck-ru.com/uploads/tx_nbc2/ToshibaSatelliteProR40-C__1_.JPG",
      },
    ],
  },
  mutations: {
    createProduct(state, payload) {
      state.products.push(payload)
    }
  },
  actions: {
    async createProduct ({commit, getters} ,payload){
      commit('clearError')
      commit('setLoading', true)
      try{
        const newProduct = new Product(
          payload.title,
          payload.vendor,
          payload.price,
          payload.description,
          getters.user.id,
          payload.imageSrc
        )
        console.log(newProduct)
        const product = await fb.database().ref('products').push(newProduct)
        commit('setLoading', false)
        commit('createProduct', {
          ...newProduct,
          id: product.key
        })
      }catch(error){
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
      // commit('createProduct', payload)
    }
  },
  getters: {
    products(state) {
      return state.products;
    },
    promoProducts(state) {
      return state.products[1];
    },
    myProducts(state) {
      return state.products[0];
    },
    productById(state) {
      return (productId) => {
        return state.products.find((product) => product.id === productId);
      };
    },
  },
};

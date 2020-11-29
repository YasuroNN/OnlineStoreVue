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
    products: [],
  },
  mutations: {
    createProduct(state, payload) {
      state.products.push(payload)
    },
    loadProducts(state, payload){
      state.products = payload
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
    },
    async fetchProducts({commit}){
        commit('clearError')
        commit('setLoading', true)
        try{
          const productsVal = await fb.database().ref('products').once('value')
          const products = productsVal.val()
          const resultProduct = []
          Object.keys(products).forEach(key => {
            const product =products[key]
            resultProduct.push(
                new Product(
                  product.title,
                  product.vendor,
                  product.price,
                  product.description,
                  product.ownerId,
                  product.imageSrc,
                  key
              )
            )
          })
          commit('loadProducts', resultProduct)
          commit('setLoading', false)
          console.log(products)
        }catch(error){
          commit('setError', error.message)
          commit('setLoading', error.message)
          throw error
        }

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

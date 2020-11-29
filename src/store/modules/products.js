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
    },
    updateProduct(state, {title, price, vendor, id}) {
        const product = state.products.find(a => {
          return a.id == id
        })
        product.title = title
        product.price=price
        product.vendor = vendor
    }
  },
  actions: {
    async createProduct ({commit, getters} ,payload){
      commit('clearError')
      commit('setLoading', true)
      const image= payload.image
      try{
        const newProduct = new Product(
          payload.title,
          payload.vendor,
          payload.price,
          payload.description,
          getters.user.id,
          ''
        )
        const product = await fb.database().ref('products').push(newProduct)
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))
        const fileData = await fb.storage().ref('products/' + product.key+'/' + imageExt).put(image)
        const imageSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
        await fb.database().ref('products').child(product.key).update({imageSrc})
        commit('setLoading', false)
        commit('createProduct', {
          ...newProduct,
          id: product.key,
          imageSrc
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

    },
    async updateProduct({commit}, {title, price, vendor, id}){

      commit('clearError')
      commit('setLoading', true)
      try{
        await fb.database().ref('products').child(id).update({
          title,
          price,
          vendor
        })
        commit('updateProduct', {
          title,
          price,
          vendor,
          id 
        })
        commit('setLoading', false)
      }catch(error){
        commit('setError', error.message)
        commit('setLoading', false)
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

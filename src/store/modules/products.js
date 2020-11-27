export default {
  state: {
    products: [
      {
        id: "1",
        title: "Lenovo Legion kek",
        venodr: "Lenovo",
        price: 100,
        imageSrc: "https://cdn1.ozone.ru/s3/multimedia-m/6007603366.jpg",
      },
      {
        id: "2",
        title: "MacBook",
        venodr: "apple",
        price: 200,
        imageSrc: "https://items.s1.citilink.ru/1376001_v01_b.jpg",
      },
      {
        id: "3",
        title: "Toshiba ls200",
        venodr: "Toshiba",
        price: 400,
        imageSrc:
          "https://www.notebookcheck-ru.com/uploads/tx_nbc2/ToshibaSatelliteProR40-C__1_.JPG",
      },
    ],
  },
  mutations: {},
  actions: {},
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

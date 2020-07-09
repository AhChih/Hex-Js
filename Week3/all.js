var app = new Vue({
  el: "#app",
  data: {
    products: [
      {
        title: "櫻桃鴨肉",
        id: 1344445920499,
        category: "壽司",
        content:
          "手握壽司是把用醋，砂糖和食鹽等調味後的米飯捏成一口量的小飯糰，再把生魚片等捏到飯糰上的日本傳統料理。",
        description: "好棒棒壽司",
        imageUrl: "https://i.imgur.com/Nr2745b.png",
        enabled: 1,
        origin_price: 120,
        price: 100,
        unit: "貫",
      },
      {
        title: "蝦卵壽司",
        id: 2546945217562,
        category: "壽司",
        content:
          "手握壽司是把用醋，砂糖和食鹽等調味後的米飯捏成一口量的小飯糰，再把生魚片等捏到飯糰上的日本傳統料理。",
        description: "好棒棒壽司",
        imageUrl: "https://i.imgur.com/wDy7w17.png",
        enabled: 1,
        origin_price: 120,
        price: 100,
        unit: "貫",
      },
    ],
    tempProduct: {},
  },
  methods: {
    updateProduct(){
      if(this.tempProduct.id) {
        this.products.forEach((item, i) => {
            if(this.tempProduct.id === item.id){
              this.products[i] = this.tempProduct
            }
        })
      } else {
        const newID = new Date().getTime()
        this.tempProduct.id = newID
        this.products.push(this.tempProduct)
      }
      this.tempProduct = {}
      $("#editModal").modal("hide");
    },
    isEnabled(data){
      if (data.id){
        this.products.forEach((item, i)=> {
          if(data.id === item.id){
            if(item.is_enabled){
              this.products[i].enabled = 0
            } else {
              this.products[i].enabled = 1
              console.log(this.products[i].enabled)
            }
          }
        })
      }
    },
    editModal(data) {
      this.tempProduct = JSON.parse(JSON.stringify(data))
      $("#editModal").modal("show");                               
    },
    delModal(data) {
      this.tempProduct = Object.assign({}, data)
      $("#delModal").modal("show");
    },
    delProduct(id) {
      this.products.filter((item, index) => {
        if (item.id === id) {
          this.products.splice(index, 1);
          this.tempProduct = {};
        }
      });
      $("#delModal").modal("hide");
    },
  },
  created() {
    console.log(this.products);
  },
});

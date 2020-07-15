const uuid = '4b6eb7de-9d99-4791-bbea-6b0b82d94cb8'
const apiPath = 'https://course-ec-api.hexschool.io/api/'

new Vue({
    el: '#app',
    data: {
        products: [],
        tempProduct: {
            imgUrl: [],
        },
        user: {
            token: '',
            uuid: '4b6eb7de-9d99-4791-bbea-6b0b82d94cb8'
    }
},
    methods: {
      getProducts() {
        const api = `${apiPath}${this.user.uuid}/admin/ec/products`
        axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;
        axios.get(api).then((res) => {
            this.products = res.data.data
            console.log(res)
        })
      },
      OpenDelModal(data) {
        this.tempProduct = Object.assign({}, data)
        $("#delModal").modal("show")
      },
      OpenEditModal(data) {
      this.tempProduct = JSON.parse(JSON.stringify(data))
      $("#editModal").modal("show");  
      },
      delProduct(id) {
        const url = `${apiPath}${this.user.uuid}/admin/ec/product/${id}`
        axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;
        axios.delete(url).then(() => {
            $("#delModal").modal("hide");
            this.getProducts()
        })
      },
    },
    created() {
        this.user.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (this.user.token === ''){
            window.location = 'login.html'
        }
        this.getProducts();
    }
})
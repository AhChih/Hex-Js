import pagination from './pagination.js'
import delModel from './delModel.js'
import editModel from './editModel.js'

Vue.component('pagination', pagination)
Vue.component('delmodel', delModel)
Vue.component('editmodel', editModel)

const apiPath = 'https://course-ec-api.hexschool.io/api/'

new Vue({
    el: '#app',
    data: {
        products: [],
        pagination: {},
        tempProduct: {
          imageUrl: [],
        },
        isNewProduct: false,
        status: {
            upLoading: false
        },
        user: {
            token: '',
            uuid: '4b6eb7de-9d99-4791-bbea-6b0b82d94cb8'
    }
},
    methods: {
      getProducts(num =1) {
        const api = `${apiPath}${this.user.uuid}/admin/ec/products?page=${ num }`
        axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;

        axios.get(api).then((res) => {
            this.products = res.data.data
            this.pagination = res.data.meta.pagination
        })
      },
      updateProduct() {
        if (this.isNewProduct) {
          const api = `${apiPath}${this.user.uuid}/admin/ec/product`
          axios.post(api, this.tempProduct).then(() => {
          $("#editModal").modal("hide")
          this.getProducts()
          })
        } else {
          const api = `${apiPath}${this.user.uuid}/admin/ec/product/${this.tempProduct.id}`
          axios.patch(api, this.tempProduct).then(() => {
            $("#editModal").modal("hide")
            this.getProducts()
          })
        }
      },
      OpenAddModal() {
        this.tempProduct = {
          enabled: false,
          imageUrl: [],
        }
        this.isNewProduct = true
        $("#editModal").modal("show")
      },
      OpenDelModal(data) {
        this.tempProduct = Object.assign({}, data)
        $("#delModal").modal("show")
      },
      OpenEditModal(data) {
      this.tempProduct = JSON.parse(JSON.stringify(data))
      this.isNewProduct = false
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
      uploadFile() {
        const uploadFile = document.querySelector('#customFile').files[0]
        const formData = new FormData()
        formData.append('file', uploadFile)

        const url = `${apiPath}${this.user.uuid}/admin/storage`
        this.status.upLoading = true
        axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then((res) => {
          this.status.upLoading = false
            this.tempProduct.imageUrl.push(res.data.data.path)
            if (this.isNewProduct == false){
              this.tempProduct.imageUrl = []
                this.tempProduct.imageUrl.push(res.data.data.path)
            }
        }).catch(() => {
          this.status.upLoading = false
        })
      },
      isEnabled(data){
        this.tempProduct = JSON.parse(JSON.stringify(data))
        if(this.tempProduct.enabled){
          this.tempProduct.enabled = false
          const api = `${apiPath}${this.user.uuid}/admin/ec/product/${this.tempProduct.id}`
          axios.patch(api, this.tempProduct).then(() => {
            this.getProducts()
          })
        } else {
          this.tempProduct.enabled = true
          const api = `${apiPath}${this.user.uuid}/admin/ec/product/${this.tempProduct.id}`
          axios.patch(api, this.tempProduct).then(() => {
            this.getProducts()
          })
        }
      },
      enabledModal() {
        console.log(this.tempProduct.enabled)
        if(this.tempProduct.enabled){
          this.tempProduct.enabled = false
        } else {
          this.tempProduct.enabled = true
        }
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
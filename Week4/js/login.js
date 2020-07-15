const uuid = '4b6eb7de-9d99-4791-bbea-6b0b82d94cb8'
const apiPath = 'https://course-ec-api.hexschool.io/api/'

new Vue({
  el: '#app',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const api = `${apiPath}auth/login`
      axios.post(api, this.user).then((res) => {
        const token = res.data.token
        const expired = res.data.expired

        document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`
        window.location = 'product.html'
      }).catch(() => {
        console.log('驗證錯誤')
      })
    }
  }
})

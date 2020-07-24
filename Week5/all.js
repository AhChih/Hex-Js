import zh_tw from './zh.js'

VeeValidate.configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid',
    },
  });

VeeValidate.localize('tw', zh_tw);

Vue.component('ValidationObserver', VeeValidate.ValidationObserver);
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);

new Vue({
    el: '#app',
    data: {
      user:{
          name: '',
          email: '',
          tel: '',
          address: '',
          pay: '',
          message: '',
      }
    }, 
})
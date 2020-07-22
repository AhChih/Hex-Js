export default {
    template:`<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增產品</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="form-group col-md-12">
              <label for="title">名稱</label>
              <input id="title" v-model="data.title" type="text" class="form-control" placeholder="請輸入產品名稱"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="category">分類</label>
              <input id="category" v-model="data.category" type="text" class="form-control" placeholder="請輸入分類"/>
            </div>
            <div class="form-group col-md-6">
              <label for="price">單位</label>
              <input id="unit" v-model="data.unit" type="unit" class="form-control" placeholder="請輸入單位"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="origin_price">原價</label>
              <input id="origin_price" v-model="data.origin_price" type="number" class="form-control" placeholder="請輸入原價"/>
            </div>
            <div class="form-group col-md-6">
              <label for="price">售價</label>
              <input id="price" v-model="data.price" type="number" class="form-control" placeholder="請輸入售價"/>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <label for="description">產品描述</label>
              <textarea id="description" v-model="data.description" type="text" class="form-control" placeholder="請輸入產品描述">
              </textarea>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <label for="content">說明內容</label>
              <textarea id="description" v-model="data.content" type="text" class="form-control" placeholder="請輸入說明內容">
              </textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 form-group">
              <div v-for="i in 1" :key="i + 'img'" class="form-group">
                <label :for="'img' + i">輸入圖片網址</label>
                <input :id="'img' + i" v-model="data.imageUrl[0]" type="text" class="form-control"
                  placeholder="請輸入圖片連結">
              </div>
            </div>
            <div class="form-group col-md-12">
              <label for="customFile">
               上傳圖片
               <span v-if="data.upLoading">
                <i class="fas fa-spinner fa-spin"></i>
               </span>
              </label>
              <input id="customFile" ref="file" type="file" class="form-control" @change="uploadFile">
            </div>
            <div class="col-md-12 text-center">
              <img class="img-fluid img-thumbnail" :src="data.imageUrl[0]" alt/>
            </div>
          </div>
          <div class="form-group">
            <div v-if="data.enabled">
              <h6>是否上架</h6>
              <span @click.prevent="enabledModal()"><a href="#"><i class="fas fa-toggle-on fa-2x"></i></a></span>
            </div>
            <div v-else>
              <h6>是否上架</h6>
              <span><a href="#" @click.prevent="enabledModal()"><i class="fas fa-toggle-off fa-2x"></i></a></span>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click.prevent="updateProduct()">
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  props: ['data'],
  methods: {
    updateProduct() {
      this.$emit('update-product')
      $("#editModal").modal("hide")
    },
    uploadFile() {
      this.$emit('upload-file')
    },
    enabledModal() {
      this.$emit('update-enabled')
    }
  }
}
export default {
    template:`<div class="modal fade" id="delModal" tabindex="-1" role="dialog" aria-labelledby="delModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="delModalLabel">
            確定刪除 {{ data.title }}
            <span class="text-danger text-bold">
            </span> 嗎?
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger btn-text" @click.prevent="delProduct(data.id)">
            刪除
          </button>
        </div>
      </div>
    </div>
  </div>`,
  props: ['data'],
  methods: {
    delProduct(id){
    this.$emit('delete', id)
    $("#delModal").modal("hide")
    }
  }
}
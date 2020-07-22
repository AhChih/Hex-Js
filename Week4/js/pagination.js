export default {
    template:`<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled': pages.current_page === 1}">
        <a class="page-link" href="#" @click.prevent="updatePage(pages.current_page -1)">Previous</a>
      </li>
      <li class="page-item" v-for="i in pages.total_pages" :key="i" :class="{ active: pages.current_page === i}">
        <a class="page-link" href="#" @click.prevent="updatePage(i)">{{ i }}</a>
      </li>
      <li class="page-item" :class="{'disabled': pages.current_page === pages.total_pages}">
        <a class="page-link" @click.prevent="updatePage(pages.current_page + 1)" href="#">Next</a>
      </li>
    </ul>
  </nav> `,
  props: ['pages'],
  data() {
    return {

    }
  },
  methods: {
    updatePage(num) {
      this.$emit('update', num)
    }
  }
}
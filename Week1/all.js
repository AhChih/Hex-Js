const todoData = []
const todoText = document.querySelector('#task')
const addBtn = document.querySelector('#addInput')
const todoList = document.querySelector('#todoUl')

addBtn.addEventListener('click', () => {
    if (todoText.value === ''){
        return
    } else {
        todoData.push({
            title: todoText.value,
            id: Math.floor(Date.now()),
        })
    }
    render()
})

function render () {
    var str = ''
    todoData.forEach((item,index) => {
        str += `<li class="form-check form-check-inline form-box my-2 p-0">
        <input class="form-check-input pl-2" type="checkbox" id=${item.id} value="option1">
        <label class="form-check-label pl-3" id=${item.id}><span style="font-size: 26px">${item.title}</span></label>
      </li>`
    })
    todoText.value = ''
    todoList.innerHTML = str
}

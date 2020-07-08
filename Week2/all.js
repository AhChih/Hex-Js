const productData = [];
const uuid = "4b6eb7de-9d99-4791-bbea-6b0b82d94cb8";
const apiPath = "https://course-ec-api.hexschool.io/";

function getData() {
  const vm = this;
  const api = `${apiPath}api/${uuid}/ec/products`;
  axios.get(api).then((res) => {
    vm.productData = res.data.data;
    console.log(vm.productData);
    render();
  });
}
function render() {
  const vm = this;
  var product = document.querySelector(".getProduct");
  var str = "";
  vm.productData.forEach((item, i) => {
    str += `<div class="col-xl-3 col-lg-4 col-md-6 px-1 mt-2">
        <div class="card border-0" style="width:100%">
        <div class="bg-cover" style="background-image:url(${item.imageUrl})"></div>
          <div class="card-body">
            <h5 class="card-title text-bold">${item.title}</h5>
            <p class="card-text">
              ${item.content}
            </p>
          </div>
          <div class="card-footer text-right border-0">
          <del>原價: ${item.origin_price} NT</del>
          <p class="text-danger">特價: ${item.price}</p>
          </div>
            <div class="text-right mb-1 mr-2">
              <button class="btn btn-primary">加入購物車</button>
            </div>
        </div>
      </div>`
  });
  product.innerHTML = str;
}
getData();

let products = [];
let div = document.querySelector("#AllProducts");
axios.get("https://fakestoreapi.com/products").then((res) => {
  let data = res.data;
  products = data;
  renderProducts(products);
});

function renderProducts(arr) {
  div.innerHTML = "";
  arr.forEach((product) => {
    div.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${product.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${product.price} $</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    `;
  });
}

document.querySelector("#less50").addEventListener("click", () => {
  let final = products.filter((pro) => {
    return +pro.price < 50;
  });
  renderProducts(final);
});

document.querySelector("#more50").addEventListener("click", () => {
  let final = products.filter((pro) => {
    return +pro.price >= 50;
  });
  renderProducts(final);
});

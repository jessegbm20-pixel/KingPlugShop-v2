const products = [
  { name: "AirPods 2", price: 150, image: "images/airpods2.png" },
  { name: "AirPods 2 Pro (sin cancelación)", price: 185, image: "images/airpods2pro.png" },
  { name: "AirPods Pro Gen (Con cancelación)", price: 220, image: "images/airpodsprogen.png" },
  { name: "AirPods Pro Gen (Con pantalla)", price: 260, image: "images/airpodsproscreen.png" },
  { name: "AirPods Max", price: 350, image: "images/airpodsmax.png" },
  { name: "Batería MagSafe", price: 190, image: "images/magsafe.png" },
];

const productList = document.getElementById("product-list");

products.forEach(p => {
  const item = document.createElement("div");
  item.classList.add("product");

  item.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p class="price">$ ${p.price.toFixed(2)}</p>
    <button>Agregar al carrito</button>
  `;

  productList.appendChild(item);
});

document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  if (productList) {
    productList.innerHTML = `
      <div><img src="https://via.placeholder.com/200"><p>Kurta A - ₹800</p></div>
      <div><img src="https://via.placeholder.com/200"><p>Kurta B - ₹1200</p></div>
      <div><img src="https://via.placeholder.com/200"><p>Dupatta - ₹500</p></div>
    `;
  }
});

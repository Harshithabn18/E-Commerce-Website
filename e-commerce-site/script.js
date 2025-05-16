const products = [
    {
      name: "Stylish Sunglasses",
      price: "299₹",
      image: "https://m.media-amazon.com/images/I/51Z+IIxGDXL._AC_UY1100_.jpg"
    },
    {
      name: "Wireless Headphones",
      price: "999₹",
      image: "https://m.media-amazon.com/images/I/61KBlwzfUZL.jpg"
    },
    {
      name: "Classic Sneakers",
      price: "1999₹",
      image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ecf633a438d31e9b40644071560ea701.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
    },
    {
      name: "Smart Watch",
      price: "3999₹",
      image: "https://www.pebblecart.com/cdn/shop/files/Snowleather.png?v=1691651824&width=500"
    }
  ];
  
  let cartCount = 0;
  
  const productList = document.getElementById('product-list');
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
  
  function addToCart() {
  cartCount++;
  const cartBadge = document.getElementById('cart-count');
  cartBadge.textContent = cartCount;

  // Animate badge
  cartBadge.classList.add('animate');
  setTimeout(() => {
    cartBadge.classList.remove('animate');
  }, 300);
}
  
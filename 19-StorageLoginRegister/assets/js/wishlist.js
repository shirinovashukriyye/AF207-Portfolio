function showToast(message) {
    Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #4caf50, #81c784)",
    }).showToast();
  }

  function toggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  
    const productIndex = wishlist.indexOf(productId);
    if (productIndex === -1) {
      wishlist.push(productId);
      showToast("Məhsul sevimlilərə əlavə edildi!");
    } else {
      wishlist.splice(productIndex, 1);
      showToast("Məhsul sevimlilərdən silindi!");
    }
  
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistIcons();
  }

  function updateWishlistIcons() {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    document.querySelectorAll(".wishlist-btn").forEach((btn) => {
      const productId = btn.dataset.productId;
      if (wishlist.includes(productId)) {
        btn.classList.add("selected");
      } else {
        btn.classList.remove("selected");
      }
    });
  }
 
  function checkLogin() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      showToast("Zəhmət olmasa, əvvəlcə daxil olun.");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    }
  }

  window.onload = () => {
    checkLogin();
    updateWishlistIcons();
  };
  
function showToast(message) {
    Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #4caf50, #81c784)",
    }).showToast();
  }
 
  function renderWishlist() {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const wishlistItemsContainer = document.getElementById("wishlist-items");
  
    if (wishlist.length === 0) {
      wishlistItemsContainer.innerHTML = "<p class='text-center'>Sevimli məhsul yoxdur.</p>";
    }
  
    wishlist.forEach((productId) => {
      const product = getProductById(productId);
      const productElement = createWishlistItem(product);
      wishlistItemsContainer.appendChild(productElement);
    });
  }
  

  function createWishlistItem(product) {
    const div = document.createElement("div");
    div.classList.add("wishlist-item");
  
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="info">
        <h5>${product.name}</h5>
        <p>${product.category}</p>
        <p class="price">$${product.price}</p>
      </div>
      <button onclick="removeFromWishlist('${product.id}')">Sil</button>
      <button class="wishlist-btn ${isProductInWishlist(product.id) ? 'selected' : ''}" onclick="toggleWishlist('${product.id}')">
        <i class="fa fa-heart"></i>
      </button>
    `;
  
    return div;
  }
  

  function toggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.includes(productId)) {
      wishlist = wishlist.filter(id => id !== productId);
      showToast("Məhsul wishlist-dən silindi!");
    } else {
      wishlist.push(productId);
      showToast("Məhsul wishlist-ə əlavə olundu!");
    }
  
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlist();
  }
  

  function isProductInWishlist(productId) {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return wishlist.includes(productId);
  }
  

  function getProductById(productId) {
    const products = [
      { id: "1", name: "Nike Air Max", category: "Shoes", price: "120", image: "https://via.placeholder.com/120" },
      { id: "2", name: "Adidas Running", category: "Shoes", price: "100", image: "https://via.placeholder.com/120" },
    ];
  
    return products.find(product => product.id === productId);
  }
  

  function removeFromWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter((id) => id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    showToast("Məhsul sevimlilərdən silindi!");
    renderWishlist();
  }
  

  function checkLogin() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      showToast("Zəhmət olmasa, əvvəlcə daxil olun.");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    }
  }
  
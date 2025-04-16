function renderNavLinks() {
    const nav = document.getElementById("navLinks");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    if (currentUser) {
      nav.innerHTML = `
        <a href="wishlist.html" class="btn btn-outline-danger">
          Sevimlilər <i class="fa-solid fa-heart"></i>
        </a>
        <a href="basket.html" class="btn btn-outline-primary">
          Səbət <i class="fa-solid fa-cart-shopping"></i>
        </a>
        <button id="logoutBtn" class="btn btn-danger">Çıxış</button>
      `;
  
      document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("wishlist");
        localStorage.removeItem("basket");
        showToast("Uğurla çıxış etdiniz.", "linear-gradient(to right, red, orange)");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
  
    } else {

    }
  }
  
  window.onload = () => {
    renderNavLinks();
    loadProducts();
  }




  const products = [
    {
      id: 1,
      title: "Nike Air Max",
      price: 120,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcUZePJKfknCGQX7_tLeRSCElkn-2nqHpnw&s",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Adidas Ultraboost",
      price: 110,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnko7JCLw0IycmLcADNBevBA_DYBQXo-jboQ&s",
      rating: 4.2,
    },
    {
      id: 3,
      title: "Puma RS-X",
      price: 95,
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/390775/01/sv01/fnd/PNA/fmt/png",
      rating: 4.0,
    },
    {
      id: 4,
      title: "New Balance 550",
      price: 105,
      image: "https://nb.scene7.com/is/image/NB/bb550wt1_nb_02_i?$pdpflexf2$&wid=440&hei=440",
      rating: 4.3,
    },
    {
      id: 5,
      title: "Reebok Classic",
      price: 85,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2gkfBz8HXl47B6DH4gVnuJ44Zt4ye2Vmvg&s",
      rating: 3.9,
    },
    {
      id: 6,
      title: "Vans Old Skool",
      price: 75,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcdfTBiE1ZZgxhqHIWgrJk63B8zIHRd7lSA&s",
      rating: 4.1,
    },
    {
      id: 7,
      title: "Converse Chuck Taylor",
      price: 70,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJAv554jknwlgyC0kSSif63TwBcRAy013nw&s",
      rating: 4.2,
    },
    {
      id: 8,
      title: "Asics Gel-Lyte",
      price: 90,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnxrb7VdJ6Z3obhqVvyyjjLrnDOP4Bt-kQQ&s",
      rating: 4.0,
    },
    {
      id: 9,
      title: "Jordan 1",
      price: 130,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnEQcx_xzgBis39HKzxiF00HBkk-TuiHmwQ&s",
      rating: 4.8,
    },
    {
      id: 10,
      title: "Yeezy Boost",
      price: 150,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE38yKoWnt6jmxGZ_tZXbE4u-G6rqZYZIDJw&s",
      rating: 4.7,
    },
    {
      id: 11,
      title: "Fila Disruptor",
      price: 80,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mMwpLqvwnaubqBaDI19XoVTul8XUTXdJNg&s",
      rating: 3.8,
    },
    {
      id: 12,
      title: "Under Armour HOVR",
      price: 100,
      image: "https://img-underarmour.mncdn.com/products/2025/02/14/124742/29daf921-7ccf-4d9a-b48a-fdaa2452edf7.jpg",
      rating: 4.4,
    }
  ];

  function renderNavLinks() {
    const nav = document.getElementById("navLinks");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    if (currentUser) {
      nav.innerHTML = `
        <a href="wishlist.html"><i class="fa-solid fa-heart"></i> Sevimlilər</a>
        <a href="basket.html"><i class="fa-solid fa-cart-shopping"></i> Səbət</a>
        <button id="logoutBtn">Çıxış</button>
      `;
  
      document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("wishlist");
        localStorage.removeItem("basket");
  
        Toastify({
          text: "Uğurla çıxış etdiniz",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "linear-gradient(to right, red, orange)",
        }).showToast();
  
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      });
  
    } else {
      nav.innerHTML = `
        <a href="login.html">Giriş</a>
        <a href="register.html">Qeydiyyat</a>
      `;
    }
  }
  

  function renderNavLinks() {
    const nav = document.getElementById("navLinks");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    if (currentUser) {
      nav.innerHTML = `
        <a href="wishlist.html"><i class="fa-solid fa-heart"></i> Sevimlilər</a>
        <a href="basket.html"><i class="fa-solid fa-cart-shopping"></i> Səbət</a>
        <button id="logoutBtn">Çıxış</button>
      `;
  
      document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("wishlist");
        localStorage.removeItem("basket");
  
        Toastify({
          text: "Uğurla çıxış etdiniz",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "linear-gradient(to right, red, orange)",
        }).showToast();
  
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      });
  
    } else {
      nav.innerHTML = `
        <a href="login.html">Giriş</a>
        <a href="register.html">Qeydiyyat</a>
      `;
    }
  }
  

function loadProducts() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const basket = JSON.parse(localStorage.getItem("basket")) || [];

  productList.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    const isFavorited = wishlist.some(item => item.id === product.id);

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Qiymət: $${product.price}</p>
      <p>⭐ ${product.rating}</p>
      <button class="wishlist-btn" data-id="${product.id}">
        <i class="fa-heart fa-${isFavorited ? "solid" : "regular"}"></i>
      </button>
      <button class="add-basket" data-id="${product.id}">Səbətə at</button>
    `;

    productList.appendChild(card);
  });

  document.querySelectorAll(".wishlist-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = +btn.dataset.id;
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
   } )
      if (!currentUser) {
        Toastify({
          text: "İlk öncə giriş etməlisiniz!",
          duration: 3000,
          style: { background: "linear-gradient(to right, red, orange)" }
        }).show}})}

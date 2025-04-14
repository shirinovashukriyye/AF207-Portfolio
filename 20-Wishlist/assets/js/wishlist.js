document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.querySelector(".wishlist");
    const currentUser = localStorage.getItem("currentUser");
  
  
    if (!currentUser) {
      Toastify({
        text: "Please sign in first!",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
          background: "#e74c3c",
        },
      }).showToast();
  
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
      return;
    }
  

    const favorites = JSON.parse(localStorage.getItem(`${currentUser}_favorites`)) || [];
  
    if (favorites.length === 0) {
      const emptyMsg = document.createElement("p");
      emptyMsg.className = "empty";
      emptyMsg.textContent = "You do not have a favorite product.";
      wishlistContainer.appendChild(emptyMsg);
      return;
    }
  

    favorites.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("wishlist-item");
  
      itemDiv.innerHTML = `
        <div class="image">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <h3 class="title">${item.title}</h3>
        <p class="category">${item.category}</p>
        <p class="price">${item.price}</p>
        <button class="btn btn-danger" data-index="${index}">Sil</button>
      `;
  
      wishlistContainer.appendChild(itemDiv);
    });
  
    wishlistContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-danger")) {
        const index = e.target.getAttribute("data-index");
        favorites.splice(index, 1);
        localStorage.setItem(`${currentUser}_favorites`, JSON.stringify(favorites));
  
        Toastify({
          text: "Product removed from wishlist",
          duration: 2000,
          gravity: "top",
          position: "right",
          style: {
            background: "#f44336",
          },
        }).showToast();
  
        setTimeout(() => location.reload(), 500);
      }
    });
  });
  








document.getElementById("logoutBtn").addEventListener("click", () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      localStorage.removeItem("currentUser");
      localStorage.removeItem(`${currentUser}_favorites`);
    }
  
    Toastify({
      text: "Çıxış etdiniz, favoritlər təmizləndi.",
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
        background: "#e67e22",
      },
    }).showToast();
  
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });
  
let card = document.createElement('div')
card.className = 'card'

let imageDiv = document.createElement('div')
imageDiv.className = 'image'

let heartDiv = document.createElement('div')
heartDiv.className = 'heart'
const heartIcon = document.createElement('i')
heartIcon.className = 'fa-regular fa-heart'
heartDiv.appendChild(heartIcon)

let img = document.createElement('img')
img.src = "https://picsum.photos/200/300"
img.alt = ""

imageDiv.appendChild(heartDiv)
imageDiv.appendChild(img)

const cardContent = document.createElement("div")
cardContent.className = 'cardContent'

const cardTitle = document.createElement("h2")
cardTitle.className = 'cardTitle'
cardTitle.textContent = 'Card Title'

const cardText = document.createElement("p")
cardText.className = 'cardText'
cardText.textContent = 'Lorem, ipsum dolor.'

const cardPrice = document.createElement('span')
cardPrice.className = 'cardPrice'
cardPrice.textContent = '150Azn'

let shopBtn = document.createElement('button')
shopBtn.className = 'shopBtn'
shopBtn.textContent = "Buy Now"

cardContent.appendChild(cardTitle)
cardContent.appendChild(cardText)
cardContent.appendChild(cardPrice)
cardContent.appendChild(shopBtn)

card.appendChild(imageDiv)
card.appendChild(cardContent)


document.body.appendChild(card)







// 1. Card uzerinde navigate ederek butun datalari bir objecte yigaraq consola yazdirin.
// Productu wishliste elave edirsiz ona gore heart clasina sahib olan div-den yola cixacaqsiniz.
// Her iki usulla ilk olaraq elementler uzerinde kecid ederek elave edeceksiniz daha sonra closest istfade ederek.




document.querySelectorAll(".heart").forEach(heart => {
    heart.addEventListener("click", () => {
      const card = heart.closest(".card");
      const image = card.querySelector("img").getAttribute("src");
      const title = card.querySelector(".cardTitle").innerText;
      const text = card.querySelector(".cardText").innerText;
      const price = card.querySelector(".cardPrice").innerText;
  
      const product = {
        title,
        text,
        price,
        image
      };
  
      console.log(product);
    });
  });
  



// 2.Asagidaki stilleri card elementlerine verin.


// cssdadir





// 3.Card elementlerini tek-tek secib contentlerini deyisin.Content serbestdir Her kes ucun.



const cardData = [
    {
        title: "iphone 16",
        price: "2900 AZN",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcEX0ydsDYlxLkMlMfe5dgEhsSLH_guO9WQ&s"
    },
    {
        title: "Dyson",
        price: "3000 AZN",
        image: "https://dysshop.kg/wp-content/uploads/2021/06/4000034b.jpg"
    },
    {
        title: "BMW",
        price: "150000 AZN",
        image: "https://qebulol.az/wp-content/uploads/2024/08/bmw-i5-edrive40-2023-1024x576-1.webp"
    }
];


const style = document.createElement('style');
style.textContent = `
    #cardContainer {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }
  
    .card {
      margin: 50px;
      width: 300px;
      border: 1px solid black;
      padding: 10px;
    }
  
    .heart {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: silver;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
  
    .image {
      width: 100%;
      height: 300px;
      position: relative;
    }
  
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  
    .cardContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
      color: burlywood;
    }
  
    .cardPrice {
      display: inline-block;
      padding: 5px;
      border-radius: 5px;
      background-color: rgb(95, 94, 91);
    }
  
    .shopBtn {
      width: 100%;
      padding: 10px;
      background-color: skyblue;
      border: none;
      cursor: pointer;
      color: white;
      text-transform: uppercase;
      border-radius: 5px;
      font-weight: bold;
    }
  `;
document.head.appendChild(style);


const faLink = document.createElement("link");
faLink.rel = "stylesheet";
faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
document.head.appendChild(faLink);


const container = document.createElement('div');
container.id = 'cardContainer';
document.body.appendChild(container);

cardData.forEach(data => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="image">
        <div class="heart"><i class="fa-regular fa-heart"></i></div>
        <img src="${data.image}" alt="${data.title}" />
      </div>
      <div class="cardContent">
        <h2 class="cardTitle">${data.title}</h2>
        <p class="cardText">${data.description}</p>
        <span class="cardPrice">${data.price}</span>
        <button class="shopBtn">Buy Now</button>
      </div>
    `;

    container.appendChild(card);
});

document.querySelectorAll(".heart").forEach(heart => {
    heart.addEventListener("click", () => {
      const card = heart.closest(".card");
      const image = card.querySelector("img").getAttribute("src");
      const title = card.querySelector(".cardTitle").innerText;
      const text = card.querySelector(".cardText").innerText;
      const price = card.querySelector(".cardPrice").innerText;
  
      const product = {
        title,
        text,
        price,
        image
      };
  
      console.log( product);
    })
  })






  
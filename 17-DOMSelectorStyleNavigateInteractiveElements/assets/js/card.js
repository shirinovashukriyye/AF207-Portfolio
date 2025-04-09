document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";


const container = document.createElement("div");
container.style.maxWidth = "400px";
container.style.margin = "20px auto";
container.style.border = "1px solid #ccc";
container.style.borderRadius = "10px";
container.style.overflow = "hidden";
container.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
document.body.appendChild(container);

const img = document.createElement("img");
img.src = "https://via.placeholder.com/400x200?text=House+Image"; // Öz şəkil URL-ni istifadə et
img.style.width = "100%";
img.style.height = "auto";
container.appendChild(img);


const info = document.createElement("div");
info.style.padding = "16px";
container.appendChild(info);


const title = document.createElement("div");
title.textContent = "DETACHED HOUSE • 5Y OLD";
title.style.color = "#888";
title.style.fontSize = "14px";
info.appendChild(title);


const price = document.createElement("div");
price.textContent = "$750,000";
price.style.fontSize = "28px";
price.style.fontWeight = "bold";
price.style.margin = "8px 0";
info.appendChild(price);


const address = document.createElement("div");
address.textContent = "742 Evergreen Terrace";
address.style.marginBottom = "16px";
info.appendChild(address);


const details = document.createElement("div");
details.style.display = "flex";
details.style.justifyContent = "space-between";
details.style.marginBottom = "16px";

const beds = document.createElement("div");
beds.innerHTML = "<b>3</b> Bedrooms";
const baths = document.createElement("div");
baths.innerHTML = "<b>2</b> Bathrooms";

details.appendChild(beds);
details.appendChild(baths);
info.appendChild(details);


const realtor = document.createElement("div");
realtor.style.borderTop = "1px solid #eee";
realtor.style.paddingTop = "12px";

const realtorName = document.createElement("div");
realtorName.innerHTML = "<b>Tiffany Heffner</b>";
realtorName.style.marginTop = "8px";

const phone = document.createElement("div");
phone.textContent = "(555) 555-4321";

realtor.appendChild(realtorName);
realtor.appendChild(phone);
info.appendChild(realtor);
const fetchdat1 = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const receive = await res.json();
  return receive.products;
};

const fetchdta2 = async () => {
  const store = await fetchdat1();

  // Create and style container
  const container = document.createElement("div");
  container.style.margin = "0";
  container.style.padding = "0";
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "center";
  container.style.backgroundColor = "white";
   container.style.height="440px"
  // Append container to the body
  document.body.style.margin = "0";  // Reset body margin
  document.body.style.height= "100%";
  document.body.style.weight = "100%";
  //document.body.style.backgroundColor = "black";
 // document.body.style.color = "white";


  document.body.appendChild(container);

  store.forEach((datas) => {
    if (datas.id <= 8) {
      const card = document.createElement("div");

      // Card styling
      card.style.margin = "20px";
      card.style.padding = "10px";
      card.style.width = "200px";
      card.style.height="250px"
      card.style.border = "2px solid black";
      //card.style.borderRadius = "8px";
      card.style.boxShadow = "10px 7px 10px orange"
      card.style.textAlign = "center";
      //card.style.backgroundColor = "#fff";
      //card.style.hover="red"

      const title = document.createElement("h2");
      const image = document.createElement("img");

      // Content
      title.innerText = datas.title;
      image.src = datas.images[0];

      // Title styling
      title.style.fontSize = "16px";
      title.style.color = "black";

      // Image styling
      image.style.width = "100%";
      image.style.height = "150px";
      image.style.justifyContent = "cover";
     // image.style.borderRadius = "4px";

      // Append elements to card
      card.appendChild(title);
      card.appendChild(image);
      container.appendChild(card);
    }
  });
};

// Run the function
fetchdta2();

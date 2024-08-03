// important if you clone this you must run the command: npm i json-server
// you must also run npx json-server db.json as well. then take the url you are given and replacce it in line 4

const BASE_URL = "http://localhost:3000/product";

// const handleItems = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}`);
//     const data = await response.json();
//     console.log(data);
//     // logic
//     data.map((item) => {
//       {
//         `<div class="item-ctnr">
//       <div>${data.name}</div>
//       <div>${data.image.url}</div>
//       <div>${data.price}</div>
//     </div>`;
//       }
//     });
//   } catch (error) {
//     console.error("Error fetching items:", error);
//   }
// };
const nameCtnr = document.getElementById("name-ctnr");
const imageCtnr = document.getElementById("image-ctnr");
const priceCtnr = document.getElementById("price-ctnr");
// different approach
const handleItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    console.log(data);

    // Assuming data is an array of objects
    const mappedData = data.map((item) => {
      console.log("value of item: ", item.name);
      nameCtnr.innerHTML += `
            <div class="grid-item">${item.name}</div>`;
      imageCtnr.innerHTML += ` <img src=${item.images} alt="picture of something">`;
      priceCtnr.innerHTML += ` <p>price: $${item.price}</p>`;
      console.log(container);
      return {
        // Example: extract specific fields
        id: item.id,
        name: item.name,
        price: item.price,
        images: item.images,
      };
    });

    console.log("data in mappedData variable: ", mappedData);
    // You can use mappedData for further processing or rendering in your application
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

//   mappedData.forEach((item) => {
//     container.innerHTML = `
//     <div class="grid-item">${item.name}</div>
//     <div class="grid-item">${item.images}  </div>
//     <div class="grid-item">${item.price}</div>
//   `;
//   });

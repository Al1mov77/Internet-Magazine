let url = "http://localhost:8000/products";
let box = document.querySelector("#box");
let filterctg = document.querySelector("#filterctg");
let allProducts = [];
let karzina = document.querySelector("#karzina1");
let karzinaModal = document.querySelector(".karzina2");
let addProdPush = [];

karzina.onclick = () => {
  karzinaModal.showModal();
  addPushShow(addProdPush);
};

export async function show(products) {
  box.innerHTML = "";
  products.forEach((prod) => {
    let div = document.createElement("div");
    div.classList.add("div1");
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
    div.style.width = '350px';
    div.style.backgroundColor = '#101010';
    div.style.borderRadius = '10px';
    div.style.padding = '20px';
    div.style.gap = '15px';

    div.innerHTML = `
      <div class="w-[300px] h-[300px] bg-[#181818] rounded-[20px] overflow-hidden flex items-center justify-center">
        <img src="${prod.avatar}" alt="${prod.name}" class="w-full h-full object-cover">
      </div>
      <div class="bg-[#282727] p-[20px] rounded-[5px] w-full">
        <h1 class="text-[25px] text-white text-center font-serif">${prod.name}</h1>
        <div class="flex justify-between mt-[10px]">
          <h1 class="text-white font-bold">QTY:</h1>
          <h1 class="text-white font-bold">${prod.qty}</h1>
        </div>
        <hr class="w-full bg-gray-500 mt-[10px]">
        <div class="flex justify-between mt-[10px]">
          <h1 class="text-white font-bold">Color</h1>
          <h1 class="text-white font-bold">${prod.color}</h1>
        </div>
        <hr class="w-full bg-gray-500 mt-[10px]">
        <div class="flex justify-between mt-[10px]">
          <h1 class="text-white font-bold">Price</h1>
          <h1 class="text-red-500 font-bold">${prod.price}$</h1>
        </div>
      </div>
      <button class="w-[300px] h-[50px] rounded-[15px] bg-[#b62c2c] text-white mt-5 border-none hover:bg-white hover:text-[#b62c2c] transition-colors duration-300 cursor-pointer addCartBtn">
        Add to Cart
      </button>
      <button style="width: 300px; height: 40px; background-color: white; color: black; border-radius: 20px;" class="infoBtn">Info</button>
    `;

    box.append(div);

    let addCart = div.querySelector(".addCartBtn");
    addCart.onclick = () =>{
        addCartProduct(prod);
    } 

    const info = div.querySelector('.infoBtn');
    const infoM = document.querySelector('#infoM');
    info.onclick = () => {
      infoM.showModal();
      infoM.innerHTML = `
        <div style="display: flex; justify-content: center; flex-direction: column; gap: 10px;">
          <img style="width: 200px; height: 100px; border-radius: 30px;" src="${prod.avatar}" alt="">
          <h1>${prod.name}</h1>
          <p>Price: ${prod.price}$</p>
          <p>Products left: ${prod.qty}</p>
          <a href="/src/products.html">
            <button class="w-[300px] h-[55px] rounded-[5px] bg-blue-500 text-white font-sans hover:bg-red-500 transition-all duration-100 ease-linear mt-[40px]">Back to Products Page</button>
          </a>
        </div>
      `;
    };
  });
}

filterctg.onchange = () => {
  filterCtg(allProducts);
};

function filterCtg(products) {
  let selectedCategory = filterctg.value;
  let filteredProducts = selectedCategory === "All" ? products : products.filter(prod => prod.category === selectedCategory);
  show(filteredProducts);
}

async function fetchProducts() {
  try {
    let res = await axios.get(url);
    allProducts = res.data;
    show(allProducts);
  } catch (error) {
    console.error(error);
  }
}

let search = document.querySelector("#search");
search.oninput = async () => {
  let resValue = search.value;
  try {
    let { data } = await axios.get(`${url}?q=${resValue}`);
    show(data);
  } catch (error) {
    console.error(error);
  }
};

function addCartProduct(prod) {
  addProdPush.push(prod);
  addPushShow(addProdPush);
}

function addPushShow(prods) {
  let cart = document.querySelector(".productsCart");
  cart.innerHTML = "";

  prods.forEach((prod, index) => {
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.marginBottom = "15px";
    div.innerHTML = `
      <img src="${prod.avatar}" alt="" style="width:100px;height:100px;border-radius:10px;object-fit:cover;margin-right:10px;">
      <div style="flex:1; display:flex; flex-direction:column; gap:4px;">
        <h1 style="font-size:16px;font-weight:700;color:#222;">${prod.name}</h1>
        <p style="font-size:14px;color:#666;">${prod.price}$</p>
      </div>
      <button class="cancelBtn" style="padding:5px 10px;border:none;border-radius:8px;background:linear-gradient(135deg,#ff6b6b,#ff8787);color:white;font-weight:700;cursor:pointer;">Cancel</button>
    `;
    let cancelBtn = div.querySelector(".cancelBtn");
    cancelBtn.onclick = () => {
      addProdPush.splice(index, 1);
      addPushShow(addProdPush);
    };
    cart.append(div);
  });
}

fetchProducts();

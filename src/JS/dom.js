let url = "http://localhost:8000/products";
let box = document.querySelector("#box");
export async function show(products) {
    box.innerHTML = "";
    products.forEach((prod) => {
        let div = document.createElement("div");
                div.classList.add("div1")
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

            <!-- Контент -->
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

            <a href="products.html">
                <button class="w-[300px] h-[50px] rounded-[15px] bg-[#b62c2c] text-white mt-5 border-none hover:bg-white hover:text-[#b62c2c] transition-colors duration-300 cursor-pointer">
                    Buy
                </button>
            </a>
        `;
        box.append(div);
    });
}
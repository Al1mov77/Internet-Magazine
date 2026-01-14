import { getProducts } from "./api.js"
import { show } from "./dom.js"

async function show2() {
  const products = await getProducts()
  show(products)
}

show2()
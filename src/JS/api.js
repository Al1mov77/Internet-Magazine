let url = "http://localhost:8000/products"
export async function getProducts(){
    try {
        let res = await axios.get(url)
        return res.data
    } catch (error) {
        console.error(error);
        
    }
}
export default async function getAllProducts() {
    const response = await fetch('http://localhost:3000/api/products')
    if (!response.ok) throw new Error('Echec lors de l\'extraction de données')
    return response.json()

}

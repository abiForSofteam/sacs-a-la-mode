import getAllProducts from "./getAllProducts";

export default async function getAProduct(productId) {
  const products = await getAllProducts();
  const product = products.find((p) => p.product_id === productId);
return product

}

// fetch api data
export function getSingleProduct (id) {
  return fetch(`https://fakestoreapi.com/products/${id}`)
  .then(res => res.json())
}
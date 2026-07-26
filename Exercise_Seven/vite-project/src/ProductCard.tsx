type product = {
    name: string,
    price: number,
    description?: string
}

const ProductCard = (Product: product) => {
  return (
    <div>
        <h1>{Product.name.toLocaleUpperCase()}</h1>
        <strong>${Product.price}</strong>
        <p>{Product.description}</p>
    </div>
  )
}

export default ProductCard
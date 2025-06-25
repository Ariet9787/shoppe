import ProductCard from "../product-card/ProductCard";

function ProductLists({ products }) {
  console.log(products);
  return (
    <div className="product-list">
      {products.map((product) => {
        // Error is here
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductLists;

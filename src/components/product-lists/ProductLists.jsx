import ProductCard from "../product-card/ProductCard";
import "./product-lists.css";

function ProductLists({ products }) {
  // console.log(products);
  return (
    <div className="product-list">
      {products.map((product) => {
        // Error is here
        return <ProductCard product={product} key={product.documentId} />;
      })}
    </div>
  );
}

export default ProductLists;

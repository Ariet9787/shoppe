import Link from "next/link";
// import product from "@/data/featured-product.json";
import "./featured-product.css";
import Image from "next/image";

function FeaturedProduct({ product }) {
  return (
    <div className="featured-product">
      <div className="featured-product-info">
        <h2 className="featured-product-title">{product.title}</h2>
        <p className="featured-product-price">$ {product.price}</p>
        <Link
          className="featured-product-link"
          href={`/products/${product.id}`}
        >
          View product
        </Link>
      </div>
      <Image
        fill
        className="featured-product-image"
        src={`${process.env.BASE_URL}${product.thumbnail.url}`}
        alt={product.title}
      />
    </div>
  );
}

export default FeaturedProduct;

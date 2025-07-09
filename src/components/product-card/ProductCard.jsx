import Image from "next/image";
import Link from "next/link";
import "./product-card.css";

function ProductCard({ product }) {
  // console.log(product.thumbnail);
  return (
    <div className="product-card">
      <Link
        href={`/products/${product.documentId}`}
        className="product-card-link"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${product.thumbnail.url}`}
          alt={product.title}
          width={377}
          height={380}
          className="product-card-image"
        />
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-price">$ {product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
}

export default ProductCard;

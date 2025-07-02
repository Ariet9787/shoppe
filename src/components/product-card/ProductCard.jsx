import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  // console.log(product.thumbnail);
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`} className="product-card-link">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={377}
          height={380}
        />
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-price">$ {product.price}</p>
      </Link>
    </div>
  );
}

export default ProductCard;

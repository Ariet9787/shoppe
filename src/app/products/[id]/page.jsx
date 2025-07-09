import ProductDetails from "@/components/product-details/ProductDetails";
import { getProduct } from "@/utils/globalApi";

async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  return <ProductDetails product={product} />;
}

export default ProductPage;

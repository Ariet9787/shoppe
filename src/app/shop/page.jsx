import Container from "@/components/container/Container";
import "./shop.css";
import { getBrands, getProducts } from "@/utils/globalApi";
import ShopClient from "@/components/shop-client/ShopClient";
export default async function Shop() {
  const products = await getProducts();
  const brands = await getBrands();
  return (
    <Container>
      <div className="shop-top">
        <h1 className="shop-title">Shop The Latest</h1>
      </div>
      <ShopClient brands={brands} products={products} />
    </Container>
  );
}

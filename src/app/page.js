import Container from "@/components/container/Container";
import "./page.css";
import FeaturedProduct from "@/components/featured-product/FeaturedProduct";
import Link from "next/link";
import ProductLists from "@/components/product-lists/ProductLists";
import { getFeaturedProduct, getProducts } from "@/utils/globalApi";
export default async function Home() {
  const featuredProductData = await getFeaturedProduct();
  const productsData = await getProducts();
  return (
    <main className="homepage">
      <Container>
        <section className="homepage-featured">
          <FeaturedProduct product={featuredProductData} />
        </section>
        <section className="homepage-latest-products">
          <div className="homepage-latest-products-header">
            <h2>Shop The Latest</h2>

            <Link className="lates-products-view-all" href="/shop">
              View All
            </Link>
          </div>
          <ProductLists products={productsData} />
        </section>
      </Container>
    </main>
  );
}

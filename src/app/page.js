import Container from "@/components/container/Container";
import "./page.css";
import FeaturedProduct from "@/components/featured-product/FeaturedProduct";
import featuredProductData from "@/data/featured-product.json";
import Link from "next/link";
import Products from "@/data/products.json";
import ProductLists from "@/components/product-lists/ProductLists";
export default function Home() {
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
          <ProductLists products={Products} />
        </section>
      </Container>
    </main>
  );
}

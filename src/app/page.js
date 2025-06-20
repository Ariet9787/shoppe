import Container from "@/components/container/Container";
import "./page.css";
import FeaturedProduct from "@/components/featured-product/FeaturedProduct";
import featuredProductData from "@/data/featured-product.json";
export default function Home() {
  return (
    <main className="homepage">
      <Container>
        <section className="homepage-featured">
          <FeaturedProduct product={featuredProductData} />
        </section>
      </Container>
    </main>
  );
}

import Container from "@/components/container/Container";
import { getShippingAndReturn } from "@/utils/globalApi";
import { marked } from "marked";

async function ShippingAndReturns() {
  const content = await getShippingAndReturn();
  const htmlContent = marked.parse(content.content);
  return (
    <Container>
      <div className="shop-content">
        <h1>{content.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </div>
    </Container>
  );
}

export default ShippingAndReturns;

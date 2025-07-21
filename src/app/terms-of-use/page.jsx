import Container from "@/components/container/Container";
import { getTermsOfUse } from "@/utils/globalApi";
import { marked } from "marked";

async function TermsOfUse() {
  const content = await getTermsOfUse();
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

export default TermsOfUse;

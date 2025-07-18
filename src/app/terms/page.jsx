import Container from "@/components/container/Container";
import { getTerms } from "@/utils/globalApi";
import { marked } from "marked";

async function TermsOfService() {
  const terms = await getTerms();
  const htmlContent = marked.parse(terms.content);
  return (
    <Container>
      <div className="shop-content">
        <h1>{terms.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </div>
    </Container>
  );
}

export default TermsOfService;

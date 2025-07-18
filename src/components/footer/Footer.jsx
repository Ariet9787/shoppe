import Link from "next/link";
import "./footer.css";
import Image from "next/image";

function Footer({ shopInfo }) {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link href="/contact">contact</Link>
        <Link href="/terms">terms of services</Link>
        <Link href="/shipping-and-returns">shipping and returns</Link>
      </div>
      <div className="footer-shop-info">
        <p>
          &copy; {new Date().getFullYear()} {shopInfo.name}
          <Link href="/terms-of-use">Terms of use</Link> and{" "}
          <Link href="/privacy-policy">privacy policy</Link>
        </p>

        <ul>
          <li>
            <Link target="_blank" href={shopInfo.linkedinUrl}>
              <Image
                src="/assets/images/linkedin.svg"
                alt="Linkedin"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link target="_blank" href={shopInfo.faceBookUrl}>
              <Image
                src="/assets/images/faseBook.svg"
                alt="faceBook"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link target="_blank" href={shopInfo.instagrammUrl}>
              <Image
                src="/assets/images/instagramm.svg"
                alt="instagramm"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link target="_blank" href={shopInfo.twitterUrl}>
              <Image
                src="/assets/images/twitter.svg"
                alt="Linkedin"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

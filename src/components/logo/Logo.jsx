import "./logo.css";
import Image from "next/image";

function Logo({ logoImage, appName }) {
  return (
    <Image
      className="logo"
      src={logoImage}
      alt={appName}
      width={200}
      height={60}
      priority
    />
  );
}

export default Logo;

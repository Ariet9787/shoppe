import "./logo.css";
import Image from "next/image";
import LogoImg from "@/assets/SHOPPE.svg";

function Logo() {
  return <Image className="logo" src={LogoImg} alt="Shoppe" />;
}

export default Logo;

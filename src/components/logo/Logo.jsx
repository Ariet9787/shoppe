import { getLogo } from "@/utils/globalApi";
import "./logo.css";
import Image from "next/image";

async function Logo() {
  const Logoimg = await getLogo();
  console.log(LogoImg);
  return <Image className="logo" src={LogoImg} alt="Shoppe" />;
}

export default Logo;

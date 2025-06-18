"use client";
import Container from "../container/Container";
import Image from "next/image";
import Logo from "../logo/Logo";
import "./header.css";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container>
      <header className="header">
        <Link href="/">
          <Logo />
        </Link>

        <button className="header-burger-btn" onClick={() => setOpen(!isOpen)}>
          <Image
            src="/assets/images/menu.svg"
            width={21}
            height={21}
            alt="Burger-icon-menu"
          />
        </button>
        <nav className={`header-nav ${isOpen ? "open" : null} `}>
          <Link className="header-nav-link" href="/shop">
            Shoppe
          </Link>
          <Link className="header-nav-link" href="/blog">
            Blog
          </Link>
          <Link className="header-nav-link" href="/our-story">
            Our Story
          </Link>
          <Link className="header-nav-link" href="/cart">
            <Image
              src="/assets/images/cart.svg"
              width={21}
              height={21}
              alt="cart icon"
            />
          </Link>
          <Link className="header-nav-link" href="/auth">
            <Image
              src="/assets/images/user.svg"
              width={21}
              height={21}
              alt="user item"
            />
          </Link>
        </nav>
      </header>
    </Container>
  );
}

export default Header;

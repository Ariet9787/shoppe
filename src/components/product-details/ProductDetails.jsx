"use client";
import Image from "next/image";
import Container from "../container/Container";
import "./product-details.css";
import { useState } from "react";

function ProductDetails({ product }) {
  const [mainImage, setMainImage] = useState(product.images[0].url);
  return (
    <Container>
      <div className="product-details-container">
        <div className="product-details-top">
          <div className="product-details-images">
            {product.images.map((image) => (
              <Image
                className="product-images"
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${image.url}`}
                width={120}
                height={120}
                alt="Product-thumbnail"
                key={image.documentId}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          <div className="product-details-main-image">
            <Image
              className="product-main-image"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${mainImage}`}
              width={540}
              height={600}
              alt="Product-thumbnail"
            />
          </div>
          <div className="product-details-content">
            <h1 className="product-content-title">{product.title}</h1>
            <p className="product-content-price">${product.price.toFixed(2)}</p>
            <p className="product-content-description">{product.excerpt}</p>
            <div className="product-bag">
              <p>
                <button>-</button>

                <span>1</span>
                <button>+</button>
              </p>
              <button className="product-details-cart">add to cart</button>
            </div>
            <p className="product-sku">
              SKU: <span>{product.sku}</span>
            </p>
            <p className="product-brand">
              Brand: <span>{product.brand.name}</span>
            </p>
          </div>
        </div>
        <div className="product-detailes-bottom">
          <div className="product-bottom-tabs">
            <button className="activeTab">Description</button>
            <button>Aditional information</button>
          </div>
          <div className="product-bottom-desc">
            <p>{product.description}</p>
          </div>
          <div className="product-bottom-aditional">
            <p>
              Weight: <span>{product.weight}</span>
            </p>
            <p>
              Dimentions: <span>{product.dimenstions}</span>
            </p>
            <p>
              Colors: <span>{product.colours}</span>
            </p>
            <p>
              Material: <span>{product.material}</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;

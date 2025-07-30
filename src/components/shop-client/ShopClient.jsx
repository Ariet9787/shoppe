"use client";
import { useState, useMemo } from "react";
import Sidebar from "../sidebar/Sidebar.jsx";
import ProductCard from "../product-card/ProductCard.jsx";

function ShopClient({ products, brands }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [onSale, setOnSale] = useState(false);
  const [inStock, setInStock] = useState(false);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .filter((p) => {
        if (selectedBrand && p.brand?.name !== selectedBrand) return false;
        const price = Number(p.price);
        return price >= priceRange[0] && price <= priceRange[1];
      })
      .filter((p) => (onSale ? p.onSale === true : true))
      .filter((p) => (inStock ? p.inStock === true : true))
      .sort((a, b) => {
        if (sortOrder === "asc") return a.title.localeCompare(b.title);
        if (sortOrder === "desc") return b.title.localeCompare(a.title);
        return 0;
      });
  }, [
    products,
    searchQuery,
    selectedBrand,
    priceRange,
    onSale,
    inStock,
    sortOrder,
  ]);

  return (
    <div className="shop">
      <Sidebar
        brands={brands}
        onSearchChange={setSearchQuery}
        onBrandChange={setSelectedBrand}
        onSortChange={setSortOrder}
        onSaleToggle={setOnSale}
        onStockToggle={setInStock}
        onPriceChange={setPriceRange}
      />
      <div className="shop-products">
        {products.map((product) => (
          <ProductCard product={product} key={product.documentId} />
        ))}
      </div>
    </div>
  );
}

export default ShopClient;

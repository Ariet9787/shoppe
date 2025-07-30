"use client";
import { useState } from "react";
import "./sidebar.css";
import * as Slider from "@radix-ui/react-slider";
import ToggleSwitch from "../toggle-switch/ToggleSwitch";

function Sidebar({
  brands,
  onSearchChange,
  onBrandChange,
  onSortChange,
  onSaleToggle,
  onStockToggle,
  onPriceChange,
}) {
  const [price, setPrice] = useState([0, 10000]);
  const handlePriceChange = (value) => {
    setPrice(value);
    onPriceChange(value);
  };

  return (
    <aside className="sidebar">
      <input
        onChange={(e) => onSearchChange(e.target.value)}
        className="sidebar-search"
        type="search"
        placeholder="search..."
      />

      <select
        onChange={(e) => onBrandChange(e.target.value)}
        className="sidebar-select"
      >
        <option value="Shop by">Shop by</option>
        {brands.map((brand) => (
          <option value={brand.name} key={brand.documentId}>
            {brand.name}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="sidebar-select sidebar-sort"
      >
        <option value="sortBy">Sort By</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <div className="price-range">
        <Slider.Root
          className="slider-root"
          value={price}
          min={0}
          max={10000}
          step={1}
          minStepsBetweenThumbs={10}
          onValueChange={handlePriceChange}
        >
          <Slider.Track className="slider-track">
            <Slider.Range className="slider-range" />
          </Slider.Track>
          <Slider.Thumb className="slider-thumb" />
          <Slider.Thumb className="slider-thumb" />
        </Slider.Root>
        <div className="price-display">
          <span>
            Price: ${price[0]} -${price[1]}
          </span>
        </div>
        <div className="sidebar-toggles">
          <ToggleSwitch onChange={onSaleToggle} label="On Sale" />
          <ToggleSwitch onChange={onStockToggle} label="In Stock" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

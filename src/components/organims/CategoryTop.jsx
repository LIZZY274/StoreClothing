// CategoryTop.jsx
import React, { useState } from "react";
import { useFilters } from "../../hooks/useFilters";

function CategoryTop() {
  const { filters, setFilters } = useFilters();

  return (
    <>
      <header className="fixed w-full px-6 items-start flex-col overflow-hidden md:flex-row gap-1 justify-between lg:pl-[260px] top-[70px] md:top-[64px] z-[2]  border-b-2 bg-white">
        <div className="flex flex-row items-center gap-3">
          <h4 className="font-bold">Categoría</h4>
          <div className="scrolls overflow-x-auto whitespace-nowrap lg:overflow-x-hidden">

            <a
              href="#"
              className={`inline-block p-2 m-2 text-black ${
                filters.category === "women's clothing" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setFilters({ ...filters, category: "women's clothing" })}
            >
              Ropa mujer
            </a>

            <a
              href="#"
              className={`inline-block p-2 m-2 text-black ${
                filters.category === "men's clothing" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setFilters({ ...filters, category: "men's clothing" })}
            >
              Moda Hombre
            </a>

            <a
              href="#"
              className={`inline-block p-2 m-2 text-black ${
                filters.category === "childrens_clothing" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setFilters({ ...filters, category: "childrens_clothing" })}
            >
              Niño
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default CategoryTop;

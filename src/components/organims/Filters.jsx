import React, { useState, useEffect } from "react";
import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";
import logo from "../../assets/logo.svg";
import CheckColors from "../molecules/CheckColors";
import CheckSize from "../molecules/CheckSize";
import filtro from '../../assets/filtros.svg'
import close from '../../assets/close.svg'

export default function Filters() {
  const [active, setActive] = useState(false);
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  // const handleChangeCategory = (e) => {
  //   const selectedValue = e.target.value;
  //   setSelectedCategory(selectedValue);

  //   setFilters((prevState) => ({
  //     ...prevState,
  //     category: selectedValue,
  //   }));
  // };

  const handleChangeColor = (e) => {
    const selectedColor = e.target.value;

    setSelectedColor(selectedColor);

    setFilters((prevState) => ({
      ...prevState,
      color: selectedColor,
    }));
  };

  const handleChangeSize = (e) => {
    const selectedSize = e.target.value;

    setSelectedSize(selectedSize);

    setFilters((prevState) => ({
      ...prevState,
      size: selectedSize,
    }));
  };

  const handleChangeType = (e) => {
    const selectedValue = e.target.value;
    setSelectedType(selectedValue);

    setFilters((prevState) => ({
      ...prevState,
      type: selectedValue,
    }));
  };

  const toggleMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    // Simular la carga de productos al cargar la página
    setFilters({
      minPrice: 0,
      category: "all",
      size: "all",
      color: "all",
      type: "all",
    });
  }, []);

  return (
    <>
      <section
        className={`scrols fixed top-0 w-60 h-full overflow-y-scroll border-r-[.1px] shadow-lg border-[#b8b8b8] p-8 flex flex-col gap-12 bg-[#fff] lg:left-0 transition-all duration-300 ease-in-out z-30 ${
          active ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="" />
        <div>
          {/* <label className="font-bold">Todo</label> */}
          <div className=" relative flex flex-row gap-1">
            <input
              className=" w-5 h-5 cursor-pointer dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 "
              type="checkbox"
              id="allCheckbox"
              onChange={() => {
                setSelectedCategory("all");
                setSelectedSize("all");
                setSelectedType("all");
                setSelectedColor("all");
                setFilters({
                  minPrice: 0,
                  category: "all",
                  size: "all",
                  type: "all",
                  color: "all",
                });
              }}
              checked={
                selectedCategory === "all" &&
                selectedSize === "all" &&
                selectedType === "all" &&
                selectedColor === "all"
              }
            />
            <span>Todo</span>
          </div>
        </div>


        <div className="flex flex-col gap-6">
          <label className="font-bold">Talla</label>
          <div className="grid grid-cols-2 gap-2 items-center justify-center">
            <CheckSize
              type="checkbox"
              id="size"
              onChange={handleChangeSize}
              value="Unitalla"
              checked={selectedSize === "Unitalla"}
              msj="Unitalla"
            />
            <CheckSize
              type="checkbox"
              id="size"
              onChange={handleChangeSize}
              value="L"
              checked={selectedSize === "L"}
              msj="L"
            />
            <CheckSize
              type="checkbox"
              id="size"
              onChange={handleChangeSize}
              value="XXS"
              checked={selectedSize === "XXS"}
              msj="XXS"
            />
            <CheckSize
              type="checkbox"
              id="size"
              onChange={handleChangeSize}
              value="XS"
              checked={selectedSize === "XS"}
              msj="XS"
            />
            <CheckSize
              type="checkbox"
              id="size"
              onChange={handleChangeSize}
              value="M"
              checked={selectedSize === "M"}
              msj="M"
            />
                        <CheckSize
              type="checkbox"
              id="size"
              onChange={handleChangeSize}
              value="S"
              checked={selectedSize === "S"}
              msj="S"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <label className="font-bold">Colors</label>

          {/* colores qui */}
          <div className="grid grid-cols-5 gap-4 items-center justify-center">
            <CheckColors
              type="checkbox"
              id="colorRojoCheckbox"
              onChange={handleChangeColor}
              value="rojo"
              checked={selectedColor === "rojo"}
              colors="bg-red-600"
            />
            <CheckColors
              type="checkbox"
              id="colorAzulCheckbox"
              onChange={handleChangeColor}
              value="azul"
              checked={selectedColor === "azul"}
              colors="bg-blue-600"
            />
            <CheckColors
              type="checkbox"
              id="colorAzulCheckbox"
              onChange={handleChangeColor}
              value="amarillo"
              checked={selectedColor === "amarillo"}
              colors="bg-[#FFF500]"
            />
            <CheckColors
              type="checkbox"
              id="colorAzulCheckbox"
              onChange={handleChangeColor}
              value="morado"
              checked={selectedColor === "morado"}
              colors="bg-[#BB14E4]"
            />
            <CheckColors
              type="checkbox"
              id="colorAzulCheckbox"
              onChange={handleChangeColor}
              value="negro"
              checked={selectedColor === "negro"}
              colors="bg-[#000]"
            />
            <CheckColors
              type="checkbox"
              id="colorAzulCheckbox"
              onChange={handleChangeColor}
              value="naranja"
              checked={selectedColor === "naranja"}
              colors="bg-[#F98E0F]"
            />
            <CheckColors
              type="checkbox"
              id="colorAzulCheckbox"
              onChange={handleChangeColor}
              value="cafe"
              checked={selectedColor === "cafe"}
              colors="bg-[#CB8C12]"
            />
            <CheckColors
              type="checkbox"
              id="colorAzulCheckbox"
              onChange={handleChangeColor}
              value="verde"
              checked={selectedColor === "verde"}
              colors="bg-[#09770D]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <label className="font-bold">Tipo</label>
          <div className="grid grid-cols-1 gap-2 items-center justify-center">
            <div className="flex flex-row gap-1">
              <input
                className="cursor-pointer"
                type="radio"
                id="menGuy"
                name="guy"
                onChange={handleChangeType}
                value="pantalon"
                checked={selectedType === "pantalon"}
              />
              <span>Pantalon</span>
            </div>

            <div className="flex flex-row gap-1">
              <input
                className="cursor-pointer"
                type="radio"
                id="menGuy"
                name="guy"
                onChange={handleChangeType}
                value="playera"
                checked={selectedType === "playera"}
              />
              <span>Playera</span>
            </div>

            <div className="flex flex-row gap-1">
              <input
                className="cursor-pointer"
                type="radio"
                id="menGuy"
                name="guy"
                onChange={handleChangeType}
                value="baño"
                checked={selectedType === "baño"}
              />
              <span>Traje de baño</span>
            </div>

            <div className="flex flex-row gap-1">
              <input
                className="cursor-pointer"
                type="radio"
                id="menGuy"
                name="guy"
                onChange={handleChangeType}
                value="sudadera"
                checked={selectedType === "sudadera"}
              />
              <span>Sudadera</span>
            </div>

            <div className="flex flex-row gap-1">
              <input
                className="cursor-pointer"
                type="radio"
                id="menGuy"
                name="guy"
                onChange={handleChangeType}
                value="vestido"
                checked={selectedType === "vestido"}
              />
              <span>Vestido</span>
            </div>         
            
            <div className="flex flex-row gap-1">
              <input
                className="cursor-pointer"
                type="radio"
                id="menGuy"
                name="guy"
                onChange={handleChangeType}
                value="falda"
                checked={selectedType === "falda"}
              />
              <span>Falda</span>
            </div>
                        
            <div className="flex flex-row gap-1">
              <input
                className="cursor-pointer"
                type="radio"
                id="menGuy"
                name="guy"
                onChange={handleChangeType}
                value="camiseta"
                checked={selectedType === "camiseta"}
              />
              <span>Camiseta</span>
            </div>

            <div className="flex flex-row gap-1">
              <input
                className="cursor-pointer"
                type="radio"
                id="menGuy"
                name="guy"
                onChange={handleChangeType}
                value="camisa"
                checked={selectedType === "camisa"}
              />
              <span>Camisa</span>
            </div>

          </div>
        </div>

        <div>
          <label htmlFor={minPriceFilterId}>Price</label>
          <input
            type="range"
            id={minPriceFilterId}
            min="0"
            className="w-[80%]"
            max="1000"
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span className="text-sm">{filters.minPrice}</span>
        </div>
      </section>
      
      <button
        onClick={toggleMenu}
        className=" bg-[#BFD6BE] lg:hidden  text-white fixed bottom-8 right-6 p-2 text-lg rounded-full transition-all ease-in-out duration-200  z-50"
      >
        {active ? <img className="  w-8" src={close} alt="" /> : <img className="w-8" src={filtro} alt="" />}
      </button>
    </>
  );
}

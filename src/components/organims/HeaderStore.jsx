import React from "react";
import cart from "../../assets/cart.svg";
import { Link, Outlet } from "react-router-dom";
import ropa from "../../assets/ropa.svg";
import InputSearch from "../molecules/InputSearch";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import PerfilUser from "../molecules/PerfilUser";
import { useCart } from "../../hooks/useCart";
import menu from '../../assets/menu.svg'
import Sidebar from "./Sidebar";

export function IconRopa() {

  return (
    <>
      <Link to="/home">
        <div className=" border-2 border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center">
          <img src={ropa} alt="" />
        </div>
      </Link>
    </>
  );
}

export function IconCart() {
  const { getCartTotalProducts } = useCart()
  return (
    <>
      <Link className=" relative md:flex md:flex-row md:gap-5 hidden gap-4  " to="/carrito">
        <div className=" relative border-2 hover:bg-[#9dc49c] border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center ">
          <img src={cart} alt="" />
        </div>
        <div className=" absolute border-2 -top-3 -right-2 bg-[#fff] border-black w-7 h-7 flex items-center justify-center rounded-full ">
          <p className="text-[#488e76] font-bold text-sm ">{getCartTotalProducts()}</p>
        </div>
      </Link>
    </>
  );
}

export function IconHistory() {
  return (
    <>
      <Link className=" relative" to="/historial">
        <div className=" relative border-2 hover:bg-[#9dc49c] border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center ">
          <img src="" alt="" />
        </div>

      </Link>
    </>
  );
}

function HeaderStore({ value, onChange, onClick }) {


  const [icons, setIcon] = useState(false);
  const [perfil, setPerfil] = useState(false)
  const { user } = useAuth();
  const [sidebar, setSidebar] = useState(false)


  const toggleMenu = () => {
    setIcon(!icons);
  };

  const toggleMenuPerfil = () => {
    setPerfil(!perfil);
  };

  const hanldeSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <Sidebar responsi={sidebar ? "translate-x-0" : " -translate-x-full"} nombre={user.nombre}/>
      <header className="fixed z-10 w-full flex items-start flex-col md:flex-row gap-4 justify-between p-3 lg:pl-[260px] bg-[#fff] border-b-2">
        <nav className="flex items-center justify-between w-full">
          <div className="flex gap-4">

          <div className="md:flex md:flex-row md:gap-5 hidden gap-4 ">
            <Link to="/home" >Mas</Link>
            <Link to="/home" >Descuentos</Link>
            <Link className="" to="/home" >Productos</Link>
          </div>
            
          </div>

          <div className="flex  relative gap-3">
            <InputSearch onChange={onChange} onClick={onClick} value={value} />
            <IconCart />
            <button onClick={toggleMenuPerfil} className=" hidden relative right-0 border-2 border-[#4A8549] bg-[#E1FFE1] w-[47px] h-[47px] rounded-lg md:flex justify-center items-center">
              {user ? (
                <>
                  <h3 className=" text-xl font-bold text-[#4A8549] uppercase">{user.nombre.charAt(0)}<span className=" uppercase">{user.apellido.charAt(0)}</span></h3>
                </>
                  
              ) : null }
            </button>
            
            <button className="md:hidden" onClick={hanldeSidebar}>
              <img className=" w-10 border p-1 border-[#059669] rounded-xl" src={menu} alt="" />
            </button>
            <div className={`absolute top-16 transition-all z-[2000px] ease-in-out duration-500 ${perfil ? "right-0" : "-right-[1000px]"}`}>
              <PerfilUser/>
            </div>
          </div>
        </nav>

      </header>

      <Outlet/>
    </>
  );
}

export default HeaderStore;

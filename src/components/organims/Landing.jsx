import React from "react";
import clothing from "../../assets/clothing.svg";
import { Link } from "react-router-dom";

export function LandingHeader() {
  return (
    <>
      <header>
        <nav className="  h-20 wrapper  lg:w-[80%] items-center justify-between flex ">
          <a href="./" className=" w-1/3 max-w-[140px]">
            <h3 className=" text-xl font-bold text-[#4a8549e1] tracking-[5px]">
              CLOTHING
            </h3>
          </a>

          <input type="checkbox" id="menu" className="peer hidden" />

          <label
            htmlFor="menu"
            className=" bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"
          ></label>

          <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none z-20">
            <ul className=" absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-dark-blue shadow-2xl md:w-max md:bg-transparent md-p-0 md:grid-flow-col md:static md:shadow-none">
              <li>
                <a href="#">Princing</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <Link to="/login">
            <a href="#" className="button1 hidden lg:block py-3 text-sm">
              Get Started
            </a>
          </Link>
        </nav>
      </header>
    </>
  );
}
function Landing() {
  return (
    <>
      <LandingHeader />
      <section className=" relative wrapper lg:w-[100%] grid gap-8 justify-items-center pb-12 items-center md:grid-cols-2 md:py-24 z-10">
        <div className=" absolute top-10">
          <img className=" hidden md:flex" src="" alt="" />
        </div>
        <img
          className=" absolute bottom-[-10%] left-2 w-14  md:-bottom-8 md:left-[37%] md:w-[7  %] md:w-22 lg:bottom-1 md:right-2/4 lg:right-2/4 "
          src=""
          alt=""
        />
        <img
          src={clothing}
          alt=""
          className=" -z-10 w-[223.69px] md:w-full md:max-w-lg md:order-1"
        />
        <img
          className=" absolute w-12 bottom-12 right-2 lg:w-[9%] lg:right-[52px] lg:bottom-20"
          src=""
          alt=""
        />

        <article className=" relative text-center space-y-7 md:text-left md:space-y-8">
          <img
            className=" absolute top-8 md:top-[-40px] -left-14 md:left-0 lg:top-[-40px] w-12 lg:w-[30%] md:w-[24%]"
            src=""
            alt=""
          />
          <h1 className=" inline-block w-full borderjustify-items-center lg:max-w-[370px] text-4xl max-w-[200px]  md:text-start font-bold text-[#000] md:text-5xl lg:text-6xl ">
            Descubre el Estilo que te Define
          </h1>
          <p className="lg:max-w-[330px] text-center md:text-start max-w-[190px] ">
            Explora una Colección Exclusiva para Crear Tu Look Único.
          </p>
            <div>
            <Link to="/login">
            <a href="#" className="button1 hidden lg:block py-3 text-sm">
              Get Started
            </a>
          </Link>
            </div>
          <div className="flex flex-row items-center gap-8 w-full justify-center md:justify-start lg:justify-start ">
            <a className="hover:translate-y-2 transition-transform" href="#">
              <img src="" alt="" />
            </a>
            <a className="hover:translate-y-2 transition-transform" href="#">
              <img src="" alt="" />
            </a>
            <a className="hover:translate-y-2 transition-transform" href="#">
              <img src="" alt="" />
            </a>
          </div>
        </article>
      </section>
    </>
  );
}

export default Landing;

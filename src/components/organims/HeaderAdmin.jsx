import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import PerfilUser from "../molecules/PerfilUser";

export function IconAdd({}) {
  return (
    <>
      <Link className="" to="/add">
        <div className=" border-2 hover:bg-[#9dc49c] border-[#000] w-[77px] h-[77px] p-2 rounded-lg flex flex-col justify-center items-center hover:top-1">
          <img
            className="w-9"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAA3BJREFUWEelWIuR4yAMfVRyvk6ynSSVXFJJ7irJdrLphBsBNhIgJBzP7MxOLKSn35NwAD0BQEz/LTzrh9KJ6TH9ZdBe1d9tida78YmTjhXldNp4Vg3ojgVEGVEuaphxAU0GNHekgQ0IVyC+AdDf9/hYObQQAwXogoaM5A7gzwAUgf1X3vtboTMf0llWBXZHDVx4AbgYASfAv233J81kVaj+Pil9AriaOrL9vwBua2Gp0jmig6K2vU9RpGjuD0/zVhxg5ZA0ful1m9XMOGYYEAfd5WhWwREIAvzDDDz2euVGHUHhNbpUquT7DxAJCD0irU3d8xomFiCH2OOBmSN99qFO3x8CoFCRYITUVMepAUY19R5/PDITb0vDEcXEdzSAdnqScUFPCwmZVbxkuLbhlBKxk/pJ6mfaB12fxGXDraS+coI/TBOEFyA8U5OVlLG1jEUzlYG5sLWsadDTfFrsmS5SzzLrW52Dbm9EjEZQUr+QE85qAS9EMU7FrK/Z0/thmfDH3WcUvQQqqci5knwA1JGT2uk0hfYhUIEWFadobj87PuxRKWQIHPFlu0W9A/AV827qmkdVq8Sg0lPbcf0CeHRuO88zoBpFInmipQ6sELSqyhO7qoPnMP1fCF249U6UFLAd/BPwRkwrnjZmi2N6eByErx6+BODVRJqiti8dLyBsjEd7BuCMYXSvA6jkn2KYlmWqSf5IrswRbetWBWuRgp9HK6TjfsRirRH6FoBr7O5T4QFEvn2Zw54B9dBQeJW65IrraBzPiS3m60p7+RssKPMpeBg1oI4ucQ8E3HPvWB9bwh2ILdhmKOiB9dSoxpHq/WcCenSt3hsw0Zd/Mskp0nDkoSaB1Mh5HJdDMTUZv0eRuAA7Op8jmnR0vhxLL3tDk+YWCx/a6VZTSQGgUtrH7Q72FoDv0deFPvXZeruZkzNE2pMJYzZuO4hoZ6VtqwV7fFlpJlxnYMSRJERXXdezEOlfZT/QwbJS5Mb7SKrQPHDmdGN8QBLN2qZei6Yrkr2QPrsdCmk3IK49KoCf0ahIcq0nmLzAHKg4oLIW1vt/6XeG+dTXvApjEMA1CtM98hC+Ix6e8cvVuFMiMukA0ois2zlVCG2CfEAHQ2EN75p0C+qj1HfYxxNO2jxJBAzoqser8lriND3y948iatfMapPpGv8Dfck1PZTzFP8AAAAASUVORK5CYII="
          />
          <p className=" font-bold">agregar</p>
        </div>
      </Link>
    </>
  );
}

function HeaderAdmin() {

    
  const [icons, setIcon] = useState(false);
  const [perfil, setPerfil] = useState(false)
    const toggleMenuPerfil = () => {
        setPerfil(!perfil);
      };
  const { user } = useAuth();
  return (
    <>
      <header className="fixed w-full border-2 px-10 shadow-slate-500 p-1 z-50 bg-[#fff]">
        <div className="flex flex-row items-center justify-between">
          <div>
            <IconAdd />
          </div>

          <div>
            <button
                onClick={toggleMenuPerfil}
              className=" relative right-0 border-2 border-[#4A8549] bg-[#E1FFE1] w-[77px] h-[77px] rounded-lg flex justify-center items-center"
            >
              {user ? (
                <>
                  <h3 className=" text-3xl font-bold text-[#4A8549] uppercase">
                    {user.nombre.charAt(0)}
                    <span className=" uppercase">
                      {user.apellido.charAt(0)}
                    </span>
                  </h3>
                </>
              ) : null}
            </button>
            <div className={`absolute pt-10 top-16 transition-all ease-in-out duration-500  ${perfil ? "right-0" : "-right-[1000px]"}`}>
              <PerfilUser />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderAdmin;

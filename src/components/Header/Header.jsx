import React, { useEffect, useState } from "react";
import logoImg from "../../assets/images/logo.svg";
import ButtonHeader from "./ButtonHeader/ButtonHeader";
import styles from "./style.module.css";
import Content from "../Content/Content";

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [focus, setFocus] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsActive(!menuOpen);
    setFocus(!menuOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (menuOpen) {
      body.classList.add(styles.bodyFixed);
    } else {
      body.classList.remove(styles.bodyFixed);
    }
  }, [menuOpen]);

  return (
    <div
      className={` w480:h-18 h-14 w-[70%] flex flex-row items-center justify-between relative z-10  w640:px-4 w768:w-screen w768:px-5 w1024:w-11/12`}
    >
      <div
        className={` flex justify-center items-center w480:px-[15px] w480:w-[80px] w480:items-end w480:justify-end`}
      >
        <img src={logoImg} alt="logo" className="w-[86px]" />
      </div>
      <div
        className={`border-black flex justify-between items-center w-[500px] w640:justify-end w640:gap-x-4 w480:hidden h-full ${
          menuOpen ? styles.menuOpen : ""
        } `}
      >
        <ButtonHeader btnName="Home" />
        <ButtonHeader btnName="New" />
        <ButtonHeader btnName="Popular" />
        <ButtonHeader btnName="Trending" />
        <ButtonHeader btnName="Categories" />
      </div>
      <div className={`h-full  w480:block ${menuOpen ? "block" : "hidden"}`}>
        <div
          className={`${styles.hamburger} ${styles.hamburgerIcon} ${
            menuOpen ? styles.isActive : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`${styles.line} ${isActive ? styles.lineActive : ""}`}
          ></div>
          <div
            className={`${styles.line} ${isActive ? styles.lineActive : ""}`}
          ></div>
          <div
            className={`${styles.line} ${isActive ? styles.lineActive : ""}`}
          ></div>
        </div>

        <div
          className={`${
            styles.openMenu
          } bg-[#ffffff] flex flex-col justify-center gap-y-3 font-bold px-10  ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ButtonHeader btnName="Home" />
          <ButtonHeader btnName="New" />
          <ButtonHeader btnName="Popular" />
          <ButtonHeader btnName="Trending" />
          <ButtonHeader btnName="Categories" />
        </div>
      </div>
    </div>
  );
}

export default Header;

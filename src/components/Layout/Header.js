import React from "react";
import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      ;
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="식탁 위 음식" />
      </div>
    </>
  );
};

export default Header;

import React, { Fragment } from "react";

import classes from "./Header.module.css";
import MealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="This is the meals navbar image" />
      </div>
    </Fragment>
  );
};

export default Header;

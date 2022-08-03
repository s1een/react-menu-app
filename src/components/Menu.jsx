import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ items, alco }) => {
  let navigate = useNavigate();
  if (alco) {
    return (
      <div className="section-center">
        {items.map((el, index) => {
          return (
            <article key={index} className="menu-item">
              <img
                src={`${el.strDrinkThumb}/preview`}
                alt={el.strDrink}
                className="photo"
                onClick={() => navigate(`/drinks/${el.idDrink}`)}
              />
              <div className="item-info">
                <header>
                  <h4>{el.strDrink}</h4>
                  <h4 className="price">${el.idDrink / 100}</h4>
                </header>
                <p className="item-text">
                  {el.strInstructions.substring(0, 300)}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="section-center">
        {items.map((el) => {
          return (
            <article key={el.id} className="menu-item">
              <img src={el.img} alt={el.title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{el.title}</h4>
                  <h4 className="price">${el.price}</h4>
                </header>
                <p className="item-text">{el.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
};

export default Menu;

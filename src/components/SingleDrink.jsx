import React from "react";

function SingleDrink({ drink, list }) {
  return (
    <section>
      <div className="title">
        <h2>{drink.strDrink}</h2>
        <div className="underline"></div>
      </div>
      <article className="drink__wrapper">
        <div className="tms">
          <img
            src={`${drink.strDrinkThumb}/preview`}
            alt={drink.strDrink}
            className="photo full-img"
          />
          <div className="item-ingredients">
            <ul className="list">{list}</ul>
          </div>
        </div>
        <div className="tags">
          <div className="tag" title="Category">
            {drink.strCategory}
          </div>
          <div className="tag" title="Contains alcohol or not">
            {drink.strAlcoholic === "Alcoholic" ? (
              <i className="bx bxs-drink"></i>
            ) : (
              <i className="bx bx-coffee-togo"></i>
            )}
          </div>
          <div className="tag" title="What glass is used">
            {drink.strGlass}
          </div>
          <div className="tag" title="Measure">
            {drink.strMeasure1}
          </div>
        </div>
        <div className="item-full-info">
          <p className="item-instructions">{drink.strInstructions}</p>
          <div className="underline"></div>
        </div>
      </article>
    </section>
  );
}

export default SingleDrink;

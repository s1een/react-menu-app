import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import items from "../data/data";
import Loading from "../components/Loading";

const allCategories = ["all", ...new Set(items.map((el) => el.category))];

function MenuPage() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [drinks, setDrinks] = useState([]);
  const [tmp, setTmp] = useState([]);
  const [alco, setAlco] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (params.name) {
      setLoading(true);
      setAlco(true);
      setDrinks([]);
      setTmp([]);
      fetchByCategory(params.name);
    } else {
      fetchAlco();
    }
  }, []);

  async function fetchByCategory(category) {
    let response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
    );
    let data = await response.json();
    fetchOne(data);
  }

  async function fetchOne(data) {
    setDrinks([]);
    setTmp([]);
    const le = [];
    for (let i = 0; i < data.drinks.length; i++) {
      let final = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.drinks[i].idDrink}`
      );
      let result = await final.json();
      le.push(result.drinks[0]);
    }
    setDrinks(le);
    setTmp(le);
    setLoading(false);
  }
  async function fetchAlco() {
    for (let i = 0; i < 10; i++) {
      let response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      let data = await response.json();
      setDrinks((prev) => [...prev, data.drinks[0]]);
      setTmp((prev) => [...prev, data.drinks[0]]);
    }
  }

  function filterItems(category) {
    if (alco) {
      category === "all"
        ? setDrinks(tmp)
        : setDrinks(tmp.filter((el) => el.strCategory === category));
    } else {
      if (category === "all") {
        setMenuItems(items);
      } else {
        setMenuItems(items.filter((el) => el.category === category));
      }
    }
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>
            <a className="logo" href="/">
              Our menu
            </a>
          </h2>
          <div className="underline"></div>
          <div style={{ marginTop: 20 }} className="btn-container">
            {!params.name && (
              <button onClick={() => setAlco(!alco)} className="filter-btn">
                {alco ? "Food" : "Cocktails"}
              </button>
            )}
          </div>
        </div>
        {loading && <Loading />}
        {alco ? (
          <Categories
            categories={["all", ...new Set(tmp.map((el) => el.strCategory))]}
            filterItems={filterItems}
          />
        ) : (
          <Categories categories={categories} filterItems={filterItems} />
        )}
        {alco ? (
          <Menu items={drinks} alco={alco} />
        ) : (
          <Menu items={menuItems} />
        )}
      </section>
    </main>
  );
}

export default MenuPage;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Error from "./Error";
import Loading from "../components/Loading";
import SingleDrink from "../components/SingleDrink";

function DrinkPage() {
  const [drink, setDrink] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchOneDrink();
  }, []);
  async function fetchOneDrink() {
    setLoading(true);
    let response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
    );
    let data = await response.json();
    if (data.drinks === null) {
      setError(true);
      return;
    }
    setDrink(data.drinks[0]);
    setLoading(false);
  }

  let list = [];
  for (let i = 1; i < 16; i++) {
    if (drink[`strIngredient${i}`] !== null) {
      list.push(
        <li key={i}>
          <div
            className="ingredient"
            onClick={() =>
              navigate(`/ingredient/${drink[`strIngredient${i}`]}`)
            }
          >
            <i className="bx bx-check"></i> {drink[`strIngredient${i}`]}
          </div>
        </li>
      );
    }
  }
  if (error) {
    return <Error />;
  }
  return (
    <>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <SingleDrink drink={drink} list={list} />
      )}
    </>
  );
}

export default DrinkPage;

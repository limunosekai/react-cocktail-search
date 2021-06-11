import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setcocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);
        if (!data.drinks) {
          setcocktail(null);
        } else {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strInstructions: description,
            strAlcoholic: isAlcoholic,
            strGlass: glass,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            category,
            description,
            isAlcoholic,
            glass,
            ingredients,
          };
          setcocktail(newCocktail);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  // 로딩 중 화면
  if (loading) {
    return <Loading />;
  }

  // 검색 결과가 없을 시
  if (!cocktail) {
    return <h2 className='section-title'>No Cocktail to display</h2>;
  }

  const {
    name,
    image,
    category,
    description,
    isAlcoholic,
    glass,
    ingredients,
  } = cocktail;

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back Home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>Alcohol Content :</span>
            {isAlcoholic}
          </p>
          <p>
            <span className='drink-data'>description :</span>
            {description}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;

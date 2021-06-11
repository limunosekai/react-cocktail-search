import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  // 로딩 중 화면
  if (loading) {
    return <Loading />;
  }
  // 검색결과 없을 시
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        No Cocktails matched your search term...
      </h2>
    );
  }
  return (
    <section className='section'>
      <h2 className='section-title'>🍸 Cocktails List 🍹</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;

import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  const termChangeHandler = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorite cocktail ~ 🍹</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={termChangeHandler}
            placeholder='ex) gin tonic...'
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const termChangeHandler = () => {
    setSearchTerm(searchValue.current.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorite cocktail ~ 🍹</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={termChangeHandler}
            placeholder='ex) tonic...'
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

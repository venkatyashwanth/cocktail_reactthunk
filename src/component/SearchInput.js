import React, { useRef, useEffect } from 'react'
import { fetchSearchCocktail } from '../redux/action'
import { useDispatch } from 'react-redux'
import './SearchInput.css'


const SearchInput = () => {
    const searchValue = useRef();

    let dispatch = useDispatch();
    const searchCocktail = () => {
        dispatch(fetchSearchCocktail(searchValue.current.value))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
     }

    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">Search Cocktail</label>
                    <input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail} />
                </div>
            </form>
        </section>
    )
}

export default SearchInput
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleCocktail } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Singlecocktail = () => {

    const { id } = useParams();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleCocktail(id));
    }, [id])

    const { cocktail, loading } = useSelector((state) => ({ ...state.data }));
    const [modifiedCocktail, setModifiedCocktail] = useState(null);

    useEffect(() => {
        if (cocktail.length > 0) {
            console.log(cocktail)
            const {
                strDrink: name,
                strDrinkThumb: image,
                strAlcoholic: info,
                strCategory: category,
                strGlass: glass,
                strInstructions: instructions,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5
            } = cocktail[0]

            const ingradients = [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5
            ]

            const newCocktail = {
                name,
                image,
                info,
                category,
                glass,
                instructions,
                ingradients
            };
            setModifiedCocktail(newCocktail);
        } else {
            setModifiedCocktail(null)
        }
    }, [id, cocktail])

    if (!modifiedCocktail) {
        return <h2 className='section-title'>No Cocktail to display</h2>
    }
    else {
        const { name, image, category, info, glass, instructions, ingradients } = modifiedCocktail;
        return (
            <>
                {loading ? (
                    <div className='spinner-grow' role="statue">
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                ) : (
                    <div className='container'>
                        <section className='section cocktail-section mt-5'>
                            <Link to="/">
                                <button className='btn btn-danger' style={{ marginTop: "2rem" }}>
                                    Go Back
                                </button>
                            </Link>
                            <h2 className='section-title'>{name}</h2>
                            <div className='drink'>
                                <img src={image} alt={name} />
                                <div className='drink-info'>
                                    <p>
                                        <span className='drink-data'>Name: </span> {name}
                                    </p>
                                    <p>
                                        <span className='drink-data'>Categroy: </span> {category}
                                    </p>
                                    <p>
                                        <span className='drink-data'>Info: </span> {info}
                                    </p>
                                    <p>
                                        <span className='drink-data'>Glass: </span> {glass}
                                    </p>
                                    <p>
                                        <span className='drink-data'>Instructions: </span> {instructions}
                                    </p>
                                    <p>
                                        <span className='drink-data'>Ingradients: </span>
                                        {ingradients.map((item,index)=>{
                                            return item? <span key={index}>{item}</span>:null;
                                        })}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </>
        )
    }
}

export default Singlecocktail
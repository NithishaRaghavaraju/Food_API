import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Recipes from './Recipes.jsx';

const Home = () => {
    const [query, setQuery] = useState('pizza');
  const [information, setInformation] = useState([]);
  const [getNewData, setGetNewData] = useState('')

  const fetchMe = () => {
  axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=31dace75&app_key=9cd62b13eb316c80a16402c3ba4d23a8`)
  .then(res => {
    setInformation(res.data.hits);
  })
}

  useEffect(() => {
    fetchMe();
  }, [getNewData]);
  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setGetNewData(query);
  };

  const onChangeHandler = (e) => {
    setQuery(e.target.value)
  };
//   const submitlink = (recipeName) => {
//     alert(recipeName)
// }
  return (
    <div className='screen'>
      <h1>Search Recipes</h1>
      <div className='form'>
      <form className='userform' onSubmit={onSubmitHandler}>
        <input className='input' type='text' value={query} onChange={onChangeHandler} placeholder="Enter Value" />
        <button className='button' type='submit'>Submit</button>        
      </form>
      </div>
      <div className='result' >
        {information.map((item, index) => {
              return(
              
               <div className='data' key={index}>
                <img className='images' src={item.recipe.image} alt={item.recipe.label} />
                <Link to="/Recipes" state={{ name: item.recipe.label }}><p>{item.recipe.label}</p></Link>
                </div>)
            }
          )
        }
      </div>
    </div>
  )
}

export default Home

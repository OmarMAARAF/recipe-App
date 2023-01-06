import React, { useEffect } from 'react'
import { useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import Recipes from './Recipes';

export default function Popular() {
    const [recipes,setRecipes]=useState([]);
    const REQ=`https://api.spoonacular.com/recipes/random?apiKey=690fb2dcfe1346c89680a3ef5bac1520&number=10`
    useEffect(()=>{
        getPopular();
    },[])
    const getPopular = async () => {
        const respond = await fetch(REQ);
        const data = await respond.json();
        setRecipes(data.recipes);
        console.log(data);
      };
    
  return (
    <div className='ml-12 mr-12'>
        <h1 className='text-lg font-bold mb-2'>Popular Picks:</h1>
        <Splide options={{perPage:4,arrows:true,pagination:false,frage:'free',gap:"5rem"}}> 
        {recipes.map((Element) => {
          return (
            <SplideSlide>
            <Recipes key={Element.id}
              title = {Element.title}
              img ={Element.image} />
            </SplideSlide>
          );
        })}
        </Splide>
    </div>
  )
}

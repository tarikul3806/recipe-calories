import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    const [recipes, setRecipes] = useState([])


    useEffect( () => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Recipes {recipes.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;
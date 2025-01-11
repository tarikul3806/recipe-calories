import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";


const Recipes = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([])


    useEffect( () => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    recipes.map(recipe => <Recipe 
                        key={recipe.recipe_id} 
                        recipe={recipe}
                        handleWantToCook={handleWantToCook}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

Recipes.propTypes = {
    handleWantToCook: PropTypes.func
}

export default Recipes;
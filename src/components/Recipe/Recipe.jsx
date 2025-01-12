import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
    const [selectedRecipes, setSelectedRecipes] = useState([]);

    const handleButtonClick = () => {
        if (selectedRecipes.includes(recipe_id)) {
            toast.error("You already added this recipe!", {
                position: "top-center",
                autoClose: 3000,
            });
        } else {
            setSelectedRecipes([...selectedRecipes, recipe_id]);
            handleWantToCook(recipe); // Optional, call the passed function
            toast.success("Recipe added to your list!", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return (
        <div>
            <div className="card bg-base-100 w-2/3 mx-auto mb-2 pb-5 rounded-xl shadow-xl border-2">
                <figure className="p-10">
                    <img
                        src={recipe_image}
                        alt={`Recipe image of the recipe ${recipe_name}`}
                        className="mx-auto rounded-xl" />
                </figure>
                <div className='px-10'>
                    <h2 className="text-2xl font-semibold pb-2">{recipe_name}</h2>
                    <p className='pb-2 border-b-2'>{short_description}</p>
                    <p className='pb-2 border-b-2'><span className='py-4 font-semibold'>Ingredients:</span> {ingredients.length} <br />
                        {
                            ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                        }
                    </p>
                    <div className='flex justify-between py-2'>
                        <div className='flex items-center gap-2'>
                            <span><CiClock2 /></span>
                            {preparing_time}
                        </div>
                        <div className='flex items-center gap-2'>
                            <span><AiOutlineFire /></span>
                            {calories}
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={handleButtonClick} className="font-semibold p-2 bg-emerald-400 rounded-3xl">Want To Cook</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func
}

export default Recipe;

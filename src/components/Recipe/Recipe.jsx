import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {
    const { recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
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
                    <p className='pb-2 border-b-2'><span className='font-semibold'>Ingredients:</span> {ingredients.length} <br />
                        {
                            ingredients.map(ingredient => <li key={recipe_id}>{ingredient}</li>)
                        }
                    </p>
                    <div>
                        <div>
                            {preparing_time}
                        </div>
                        <div>
                            {calories}
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe;
import PropTypes from "prop-types";
import Preparing from "../Preparing/Preparing";


const Cook = ({cook}) => {
    return (
        <div className="md:w-1/3">
            <div className="border-2 rounded-xl">
                <h2 className="text-xl font-semibold text-center p-5 border-b-2">Want To Cook: {cook.length}</h2>
                {
                    cook.map(cook => <Preparing key={cook.recipe_id} cook={cook}></Preparing>)
                }
            </div>
        </div>
    );
};

Cook.propTypes ={
    cook: PropTypes.array
}

export default Cook;
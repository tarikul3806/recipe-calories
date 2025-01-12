import PropTypes from "prop-types";
import { useState } from "react";

const Preparing = ({ cook }) => {

    const { recipe_id, recipe_name, preparing_time, calories } = cook;

    const [preparingTime, setPreparingTime] = useState(0);

    const handlePreparingTime = time => {
        const newPreparingTime = preparingTime + time;
        setPreparingTime(newPreparingTime);
    }

    return (
        <div>
            <div className="px-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time </th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        <tr>
                            <th className="pr-2">{recipe_id}</th>
                            <td className="text-center">{recipe_name}</td>
                            <td className="text-center">{preparing_time}min</td>
                            <td className="text-center">{calories}</td>
                            <td>
                                <button onClick={() => handlePreparingTime(preparing_time)} className="p-2 rounded-3xl font-semibold bg-emerald-400">Preparing</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Total Preparing time: {preparingTime}min</p>
        </div>
    );
};

Preparing.propTypes = {
    cook: PropTypes.object
}

export default Preparing;
import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"><FaCircleCheck className="text-green-400 mr-2"></FaCircleCheck>{feature}</p>
        </div>
    );
};
Feature.PropTypes={
    feature:PropTypes.string
}



export default Feature;
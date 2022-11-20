import {useContext} from "react";
import FeedbackContext from "../../context/FeedbackContext";

import {Average} from '../Functions/Functions'

const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext)

    return <div className='feedback-stats'>
        <h4>{feedback.length}{feedback.length === 1 ? ' Review' : ' Reviews'}</h4>
        <h4>Average Rating: {isNaN(Average(feedback)) ? 0 : Average(feedback).toFixed(1).replace(/[.,]0$/,'')}</h4>
    </div>
}

export default FeedbackStats

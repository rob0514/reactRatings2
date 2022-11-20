import {Link} from "react-router-dom";
import FeedbackList from "../components/Feedback/FeedbackList";
import FeedbackStats from "../components/Feedback/FeedbackStats";
import FeedbackForm from "../components/Feedback/FeedbackForm";
import AboutIconLink from "../components/AboutIconLink";

const Home = () => {

    return (
        <>
            <div className="container">
                <div className='feedback_form'>
                    <Link to='/about'><AboutIconLink/></Link>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                </div>

            </div>
        </>
    )
}

export default Home;

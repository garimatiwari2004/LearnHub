import './content.css';
import { Link } from 'react-router-dom';
export default function Content() {
    return (
        <div className="content">
            <button className="btn">Introducing LearnHub 2.0</button>
            <h1>Learn Anything</h1>
            <h1>Anywhere, Anytime</h1>
            <p>The modern learning platform designed to help you.</p>
            <p>master new skills with interactive courses, expert</p>
            <p>instructors, and a personalized learning experience.</p>
            <div className="buttons">
                <Link to="/signup" >
                <button className="btn1" type='submit'  >Get Started</button>
                </Link>
                <Link to="/courses">
                <button className="btn2">Browse More</button>
                </Link>
            </div>
        </div>
    );
}
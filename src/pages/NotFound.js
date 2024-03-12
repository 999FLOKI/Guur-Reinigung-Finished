import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Go Back to Homepage:</p>
            <Link to='/'>Home</Link>
            <a href='/'>Home</a>

        </div>
    )
}
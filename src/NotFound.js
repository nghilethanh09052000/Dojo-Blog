
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sory</h2>
            <p>That page cannot be found</p>
           <Link to="/">Back to home page...</Link>
        </div>
      );
}
 
export default NotFound;
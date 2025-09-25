// RRD improt
import { Link, useRouteError } from "react-router-dom"

function Error() {

  const error = useRouteError();
  
  if(error.status == 404) {
    return (<div className="error-container container">
      <div>
        <h2>404 Error: Page Not Found</h2>

        <Link to="/" className="btn">Go To Home</Link>
      </div>
    </div>
    );
  }

    return (<div className="error-container container">
      <div>
       <h2>Something is wrong. The problem is not you.</h2>

        <Link to="/" className="btn">Go To Home</Link>
      </div>
    </div>
    );
  
  
}

export default Error

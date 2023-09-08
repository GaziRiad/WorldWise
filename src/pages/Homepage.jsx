import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

import AppNav from "../components/AppNav";
function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h2 className="test">WorldWise</h2>

      <Link to="/app">Go to the APP</Link>
    </div>
  );
}

export default Homepage;

import React from "react";

import "../../styles/home.css";
import { Link } from "react-router-dom";


 const Home = () => (
	<div className="text-center mt-5">
		<Link to="/UserRegistration">
				<button className="btn btn-primary">User Registration</button>
		</Link>
	</div>
);

export default Home
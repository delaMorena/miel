import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import { Navbar } from "./components/Navbar";
import { ShoppingCart } from "../src/pages/ShoppingCart"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";


const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	// const basename = process.env.BASENAME || "";
    // const basename = '/chilemiel/'

	return (
		<div>
			
    <Router>
      <div>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <ShoppingCart />
          </Route>
          <Route exact path="/signin">
							<SignIn />
					</Route>
        </Switch>
      </div>
    </Router>
 
		</div>
	);
};

export default Layout;
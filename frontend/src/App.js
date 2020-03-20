import React from "react";
import Navbar from "./components/Navbar";
import { useAuth0 } from "./auth0-spa";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import history from "./utils/history";

function App() {
    const { loading } = useAuth0();
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <Router history={history}>
                <header>
                    <Navbar />
                </header>
                <Switch>
                    <Route path="/" exact />
                    <PrivateRoute path="/profile" component={Profile} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

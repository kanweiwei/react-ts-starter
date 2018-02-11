import * as React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./containers/Home";

const App = () => (
    <HashRouter>
        <Route path="/" component={Home} />
    </HashRouter>
);

export default App;

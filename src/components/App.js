import React from 'react';
import GetListSong from "./viewlist.js"
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";
import "../App.css"
export default function App() {
    return (
        <Router>
            <div>
                <nav className="nav">
                    <ul className="nav list">
                        <li>Home Page</li>
                        <li>Add New Song</li>
                        <li><Link to = "/viewlist">List Song</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/viewlist" component={GetListSong} />
                </Switch>
            </div>
        </Router>
    )
}

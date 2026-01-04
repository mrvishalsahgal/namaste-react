import React from "react";
import ReactDOM from 'react-dom/client';

/* <div id="parent">
    <div id="child">
        <h1>Namaste React</h1>
        <h1>Namaste React</h1>
    </div>
    <div id="child2">
        <h1>Namaste React</h1>
        <h1>Namaste React</h1>
    </div>
</div> */

const heading = React.createElement(
        "div", {
            id: "parent"
        }, [
            React.createElement("div", {
                    id: "child"
                },
                [React.createElement("h1", {}, "Namaste React"), React.createElement("h2", {}, "Namaste React")], React.createElement("div", {
                        id: "child2"
                    },
                    [React.createElement("h1", {}, "Namaste React"), React.createElement("h2", {}, "Namaste React")]))
        ])


const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(heading);
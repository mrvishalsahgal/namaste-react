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

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const jsxheading = <h1 id="heading">Namaste React</h1>; 

// React functional component
const Title = () => {
    return <h1>Namaste React Title</h1>;
}


const HeadingComponent = () => {
    return (<div className="heading">
        <h1>Namaste React Heading</h1>
        <Title />    
        </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

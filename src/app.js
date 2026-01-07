import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/header";
import Body from "./components/body";



// Epiosde 1 or 2 Learning
// /* <div id="parent">
//     <div id="child">
//         <h1>Namaste React</h1>
//         <h1>Namaste React</h1>
//     </div>
//     <div id="child2">
//         <h1>Namaste React</h1>
//         <h1>Namaste React</h1>
//     </div>
// </div> */

// // const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// const jsxheading = <h1 id="heading">Namaste React</h1>; 

// // React functional component
// const Title = () => {
//     return <h1>Namaste React Title</h1>;
// }


// const HeadingComponent = () => {
//     return (<div className="heading">
//         <h1>Namaste React Heading</h1>
//         <Title />    
//         </div>);
// }









const AppLayout  = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

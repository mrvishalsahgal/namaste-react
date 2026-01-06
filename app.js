import React from "react";
import ReactDOM from 'react-dom/client';

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

const restaurantList = [
    {
        id: "1",
        name: "Restaurant 1",
        cuisine: "Cuisine 1",
        rating: "Rating 1",
        deliveryTime: "Delivery Time 1",
    },
    {
        id: "2",
        name: "Restaurant 2",
        cuisine: "Cuisine 2",
        rating: "Rating 2",
        deliveryTime: "Delivery Time 2",
    },
    {
        id: "3",
        name: "Restaurant 3",
        cuisine: "Cuisine 3",
        rating: "Rating 3",
        deliveryTime: "Delivery Time 3",
    },
];

const Header = () => {
    return (
        <div className="header">
         <div className="logo-container">
            <img className="img" src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256" alt="logo" />
         </div>
         <div className="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
         </div>
        </div>
    );
}

const RestaurantCard = (prop) => {
    
    return (
        <div className="restaurant-card-details">
            <img className="restaurant-card-img" src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256" alt="logo" />
            <h2>{prop.restaurant.name}</h2>
            <h3>{prop.restaurant.cuisine}</h3>
            <h5>{prop.restaurant.rating}</h5>
            <h5>{prop.restaurant.deliveryTime}</h5>
            <button>Order Now</button>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search" />
            </div>
            <div className="restaurant-card-container">
                {
                    restaurantList.map((restaurant) => {
                        return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    })
                }
                
            </div>
        </div>
    );
}

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

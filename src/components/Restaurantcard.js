
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

export default RestaurantCard;

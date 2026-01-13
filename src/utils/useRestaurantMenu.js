import { useEffect, useState } from "react";


const useRestaurantMenu = (id) => {
     const [restaurantInfo, setRestaurantInfo] = useState(null);

      const fetchData = async () => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurantMenu/"+id);
        const json = await data.json();
    //    console.log(json.data);
       setRestaurantInfo(json.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return restaurantInfo;
}

export default useRestaurantMenu
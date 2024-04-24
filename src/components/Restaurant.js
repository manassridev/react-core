import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from "../utils/mock-data";

const Restaurant = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {RESTAURANT_LIST.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;

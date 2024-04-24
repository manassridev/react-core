const MENU_IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, costForTwo, sla, avgRating } =
    resData?.info;

  return (
    <div className="card-container">
      <img src={`${MENU_IMG_CDN_URL}${cloudinaryImageId}`} />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla?.slaString}</h5>
      <h5>{`${avgRating} Stars`}</h5>
    </div>
  );
};

export default RestaurantCard;

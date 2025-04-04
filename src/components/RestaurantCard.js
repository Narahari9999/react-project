const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  costForTwo,
  cloudinaryImageId,
}) => {
  return (
    <div className='res-card'>
      <img
        className='img'
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt='kfc'
      />
      <h4>{name}</h4>
      <p className='cousine'>{cuisines.join(', ')}</p>
      <p className='price'>Price: {costForTwo}</p>
      <p className='rating'>{avgRating} stars</p>
    </div>
  );
};

export default RestaurantCard;

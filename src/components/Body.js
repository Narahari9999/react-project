import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filter, setFilter] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );
    const data = await response.json();

    setRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilter(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTopRated = () => {
    const filterRestaurantsByRating = restaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilter(filterRestaurantsByRating);
  };

  const filterRestaurants = () => {
    const filterRestaurantsByText = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilter(filterRestaurantsByText);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={filterRestaurants}>search</button>
        </div>
        <button className='filter-btn' onClick={filterTopRated}>
          top rated restaurants
        </button>
      </div>
      <div className='res-container'>
        {filter.map((res) => (
          <RestaurantCard key={res.info.id} {...res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;

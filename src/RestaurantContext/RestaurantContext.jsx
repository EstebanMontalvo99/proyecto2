// RestaurantContext.js
import axios from "axios";
import { createContext, useContext, useState } from "react";

const RestaurantContext = createContext();

export const useRestaurantContext = () => useContext(RestaurantContext);

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsShown, setRestaurantsShown] = useState();
  const [restaurantPerPage, setRestaurantPerPage] = useState(10);
  const [mainRestaurants, setMainRestaurants] = useState(restaurants);
  const [filterBy, setfilterBy] = useState("name");
  const [restaurantIsCreated, setRestaurantIsCreated] = useState(false);
  const [restaurantIsDeleted, setRestaurantIsDeleted] = useState(false);
  const [restaurantIsUpdated, setRestaurantIsUpdated] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const [updateRestaurant, setUpdateRestaurant] = useState();
  const url =
    "https://my-json-server.typicode.com/EstebanMontalvo99/fakeApi/restaurants";

  const getAllRestaurants = () => {
    axios
      .get(url)
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  };
  //Si la api tendria persistencia de datos se usarian estos metodos en vez de realizar los cambios localmente
  /* 
    const createNewRestaurant = (data) => {
      axios
        .post(url, data)
        .then((res) => {
          setRestaurantCreated(true);
          getAllRestaurants();
        })
        .catch((err) => {
          setRestaurantCreated(false);
          console.log(err);
        });
    };
  
    const deleteRestaurant = (id) => {
      const urlDelete = `${url}/${id}`;
      axios
        .delete(urlDelete)
        .then((res) => getAllRestaurants())
        .catch((err) => console.log(err));
    };
  
    const updateRestaurantById = (id, data) => {
      const urlUpdate = `${url}/${id}`;
      axios
        .put(urlUpdate, data)
        .then((res) => getAllRestaurants())
        .catch((err) => console.log(err));
    };
   */
  const contextValue = {
    restaurants,
    setRestaurants,
    restaurantsShown,
    setRestaurantsShown,
    restaurantPerPage,
    setRestaurantPerPage,
    mainRestaurants, setMainRestaurants,
    filterBy,
    setfilterBy,
    restaurantIsCreated,
    setRestaurantIsCreated,
    restaurantIsDeleted,
    setRestaurantIsDeleted,
    restaurantIsUpdated,
    setRestaurantIsUpdated,
    isShow,
    setIsShow,
    isCreate,
    setIsCreate,
    updateRestaurant,
    setUpdateRestaurant,
    getAllRestaurants,


  };

  return (
    <RestaurantContext.Provider value={contextValue}>
      {children}
    </RestaurantContext.Provider>
  );
};

import React from 'react';
import { useRestaurantContext } from '../../RestaurantContext/RestaurantContext';

const TableData = ({ restaurant }) => {
  const {
    restaurants,
    setRestaurants,
    setIsShow,
    setUpdateRestaurant,
    /* deleteRestaurant */ } = useRestaurantContext();

  const handleDelete = () => {
    const newRestaurants = restaurants.filter(res => res.id !== restaurant.id);
    setRestaurants(newRestaurants);
    /*   deleteRestaurant(restaurant.id); */
  };
  const handleUpdate = () => {
    setIsShow(true);
    setUpdateRestaurant(restaurant);
  };

  return (
    <tr>
      <td>{restaurant.name}</td>
      <td className="d-none d-sm-table-cell">{restaurant.address}</td>
      <td className="d-none d-sm-table-cell">{restaurant.PostCode}</td>
      <td className="d-none d-sm-table-cell">{restaurant.Rating}</td>
      <td className="d-none d-sm-table-cell">{restaurant.typeOfFood}</td>
      <td>
        <div className="actions d-flex gap-1">
          <button className="btn btn-custome" onClick={handleUpdate}><i className='bx bx-edit'></i></button>
          <button className="btn btn-danger" onClick={handleDelete}><i className='bx bxs-trash-alt'></i></button>
        </div>
      </td>
    </tr>
  );
};

export default TableData;

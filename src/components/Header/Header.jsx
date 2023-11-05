import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './header.css';
import { useRestaurantContext } from '../../RestaurantContext/RestaurantContext';

const Header = () => {
  const { setRestaurantPerPage, restaurantPerPage, setIsShow, setIsCreate, restaurants, setRestaurants, mainRestaurants, setMainRestaurants, filterApplied, setFilterApplied } = useRestaurantContext();

  const handleCreate = () => {
    setIsShow(true);
    setIsCreate(true);
  };

  const handleSelectChange = (event) => {
    setRestaurantPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterChange = (event) => {
    const inputValue = event.target.value.toLowerCase();

    if (inputValue.length === 0) {
      setRestaurants(mainRestaurants);
      return;
    }

    if (mainRestaurants.length === 0) {
      setMainRestaurants(restaurants);
    }

    switch (filterApplied) {
      case "Contiene":
        setRestaurants(mainRestaurants.filter(restaurant => restaurant.name.toLowerCase().includes(inputValue)));
        break;
      case "No Contiene":
        setRestaurants(mainRestaurants.filter(restaurant => !restaurant.name.toLowerCase().includes(inputValue)));
        break;
      case "Igual":
        setRestaurants(mainRestaurants.filter(restaurant => restaurant.name.toLowerCase() === inputValue));
        break;
      case "No Igual":
        setRestaurants(mainRestaurants.filter(restaurant => restaurant.name.toLowerCase() !== inputValue));
        break;
      case "Empieza con":
        setRestaurants(mainRestaurants.filter(restaurant => restaurant.name.toLowerCase().startsWith(inputValue)));
        break;
      case "Termina con":
        setRestaurants(mainRestaurants.filter(restaurant => restaurant.name.toLowerCase().endsWith(inputValue)));
        break;
      default:
        setRestaurants(mainRestaurants);
    }


  };
  const handleFilterType = (e) => {
    setFilterApplied(e.target.value);
  };

  return (
    <Container className='mb-2'>
      <header>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <p className="d-md-inline">Show
              <select className="m-2 p-2" value={restaurantPerPage} onChange={handleSelectChange}>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
              </select>
              result per page
            </p>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <input type="text" className="form-control" placeholder='Filter in records' onChange={handleFilterChange} />
            <select className='p-2' onChange={handleFilterType} >{filterApplied}
              <option value="Contiene">Contiene</option>
              <option value="No Contiene">No Contiene</option>
              <option value="Igual">Igual</option>
              <option value="No Igual">No Igual</option>
              <option value="Empieza con">Empieza con</option>
              <option value="Termina con">Termina con</option>
            </select>
            <button className='btn btn-custome'>Button</button>
            <button onClick={handleCreate} className='btn btn-custome'><i className='bx bxs-duplicate' ></i></button>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;

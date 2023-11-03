import React from 'react';
import { Container } from 'react-bootstrap';
import './header.css';
import { useRestaurantContext } from '../../RestaurantContext/RestaurantContext';

const Header = () => {
  const { setRestaurantPerPage, restaurantPerPage, setIsShow, setIsCreate } = useRestaurantContext();

  const handleCreate = () => {
    setIsShow(true);
    setIsCreate(true);
  };

  const handleSelectChange = (event) => {
    setRestaurantPerPage(parseInt(event.target.value, 10));
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
            <input type="text" className="form-control" placeholder='Filter in records' />
            <button className='btn btn-custome'>Filter</button>
            <button className='btn btn-custome'>Button</button>
            <button onClick={handleCreate} className='btn btn-custome'><i className='bx bxs-duplicate' ></i></button>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;

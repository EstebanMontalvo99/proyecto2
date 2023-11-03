import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useRestaurantContext } from '../../RestaurantContext/RestaurantContext';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const { restaurantPerPage, restaurants, restaurantsShown, setRestaurantsShown } = useRestaurantContext();
  const [currentPage, setCurrentPage] = useState(0);

  // Initialize paginationRestaurants with an empty array to prevent rendering issues
  const [paginationRestaurants, setPaginationRestaurants] = useState([]);

  useEffect(() => {
    const tempPaginationRestaurants = [];
    for (let i = 0; i < restaurants?.length; i += restaurantPerPage) {
      const nRestaurants = restaurants?.slice(i, i + restaurantPerPage);
      tempPaginationRestaurants.push(nRestaurants);
    }

    // Update paginationRestaurants state after calculating pagination chunks
    setPaginationRestaurants(tempPaginationRestaurants);

    if (tempPaginationRestaurants.length > 0) {
      setRestaurantsShown(tempPaginationRestaurants[currentPage]);
    }

  }, [restaurants, currentPage, setRestaurantsShown, restaurantPerPage]);

  const handlePaginationClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    setRestaurantsShown(paginationRestaurants[pageIndex]);
  };

  return (
    <Container>
      <div className='d-flex justify-content-between align-items-center'>
        <p>Showing {restaurantsShown?.length} of {restaurants.length}</p>
        <Pagination className='d-flex justify-content-center align-items-center'>
          <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} />
          {paginationRestaurants.map((_, index) => (
            <Pagination.Item key={index} active={index === currentPage} onClick={() => handlePaginationClick(index)}>
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === paginationRestaurants.length - 1} />
        </Pagination>
      </div>
    </Container>
  );
};

export default Footer;

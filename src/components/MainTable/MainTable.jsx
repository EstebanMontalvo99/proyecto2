import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './mainTable.css';
import TableData from './TableData';
import { useRestaurantContext } from '../../RestaurantContext/RestaurantContext';

const MainTable = ({ }) => {
  const { restaurants, restaurantsShown } = useRestaurantContext();

  return (
    <Container>
      <Row>
        <Col>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th className="wider-column text-primary">Name</th>
                  <th className="d-none d-sm-table-cell text-primary">Address</th>
                  <th className="d-none d-sm-table-cell text-primary">PostCode</th>
                  <th className="d-none d-sm-table-cell text-primary">Rating</th>
                  <th className="d-none d-sm-table-cell text-primary">Type of Food</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {restaurantsShown?.map((restaurant, index) => (
                  <TableData key={index} restaurant={restaurant} ></TableData>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainTable;

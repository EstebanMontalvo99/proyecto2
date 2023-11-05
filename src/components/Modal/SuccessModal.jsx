import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRestaurantContext } from '../../RestaurantContext/RestaurantContext';

const SuccessModal = () => {
  const {
    restaurantIsCreated,
    setRestaurantIsCreated,
    restaurantIsDeleted,
    setRestaurantIsDeleted,
    restaurantIsUpdated,
    setRestaurantIsUpdated,
  } = useRestaurantContext();

  const handleClose = () => {
    setRestaurantIsCreated(false);
    setRestaurantIsDeleted(false);
    setRestaurantIsUpdated(false);
  };

  let actionText = '';
  if (restaurantIsCreated) {
    actionText = 'El usuario fue creado';
  } else if (restaurantIsUpdated) {
    actionText = 'El usuario fue actualizado';
  } else if (restaurantIsDeleted) {
    actionText = 'El usuario fue eliminado';
  }

  return (
    <Modal show={restaurantIsCreated || restaurantIsDeleted || restaurantIsUpdated} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>La acción fue exitosa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{actionText}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import BootstrapModal from 'react-bootstrap/Modal';
import { useRestaurantContext } from '../../RestaurantContext/RestaurantContext';

const CustomModal = () => {
  const { restaurants,
    setRestaurants,
    isShow,
    setIsShow,
    isCreate,
    setIsCreate,
    updateRestaurant,
    setRestaurantIsCreated,
    setRestaurantIsUpdated,
    mainRestaurants,
    setMainRestaurants
    /* updateRestaurantById,
    createNewRestaurant */
  } = useRestaurantContext();


  const { register, handleSubmit, setValue } = useForm();
  const handleClose = () => {
    setIsShow(false);
    setIsCreate(false);
  };



  const onSubmitCreate = (data) => {
    const updatedRestaurants = [data, ...restaurants];
    const updatedonMainRestaurants = [data, ...mainRestaurants];
    setRestaurants(updatedRestaurants);
    setMainRestaurants(updatedonMainRestaurants);
    /* createNewRestaurant(data); */

    setIsShow(false);
    setIsCreate(false);
    setRestaurantIsCreated(true);


  };
  const onSubmitUpdate = (data) => {
    const index = restaurants.findIndex((restaurant) => restaurant.id === updateRestaurant.id);

    if (index !== -1) {
      const updatedRestaurants = [...restaurants];
      updatedRestaurants[index] = { ...updateRestaurant, ...data };
      setRestaurants(updatedRestaurants);

      const indexInMain = mainRestaurants.findIndex((restaurant) => restaurant.id === updateRestaurant.id);
      if (indexInMain !== -1) {
        const updatedMainRestaurants = [...mainRestaurants];
        updatedMainRestaurants[indexInMain] = { ...updateRestaurant, ...data };
        setMainRestaurants(updatedMainRestaurants);
      }
    }

    setIsShow(false);
    setIsCreate(false);
    setRestaurantIsUpdated(true);
  };


  useEffect(() => {
    if (!isCreate && updateRestaurant) {
      Object.keys(updateRestaurant).forEach((key) => {
        setValue(key, updateRestaurant[key]);
      });
    }
  }, [isCreate, updateRestaurant, setValue]);


  return (
    <div>
      <BootstrapModal show={isShow} onHide={handleClose}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>{
            isCreate ?
              "Crea un restaurante" : "Modifica el usuario"
          }</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          <form onSubmit={handleSubmit(isCreate ? onSubmitCreate : onSubmitUpdate)}>
            <div className="mb-3">
              <label htmlFor="name" className='form-label'>Ingresa el Nombre: </label>
              <input required type="text" className='form-control' id="name" {...register("name",)} />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className='form-label'>Ingresa la dirección: </label>
              <input required type="text" className='form-control' id="address" {...register("address")} />
            </div>
            <div className="mb-3">
              <label htmlFor="PostCode" className='form-label'>Ingresa el Post Code: </label>
              <input required type="text" className='form-control' id="PostCode" {...register("PostCode")} />
            </div>
            <div className="mb-3">
              <label htmlFor="Rating" className='form-label'>Ingresa el Rating: </label>
              <input required type="text" className='form-control' id="Rating" {...register("Rating")} />
            </div>
            <div className="mb-3">
              <label htmlFor="typeOfFood" className='form-label'>Ingresa el tipo de comida: </label>
              <input required type="text" className='form-control' id="typeOfFood" {...register("typeOfFood")} />
            </div>

            <div className="d-grid gap-2">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </div>
          </form>
        </BootstrapModal.Body>
      </BootstrapModal>
    </div>
  );
};

export default CustomModal;

import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './header.css';
import { useRestaurantContext } from '../../RestaurantContext/RestaurantContext';

const Header = () => {
  const { setRestaurantPerPage, restaurantPerPage, setIsShow, setIsCreate, restaurants, setRestaurants, mainRestaurants, setMainRestaurants } = useRestaurantContext();
  const [filterApplied, setFilterApplied] = useState("Contiene");
  const [column, setColumn] = useState("name");
  const [order, setOrder] = useState();
  const handleCreate = () => {
    setIsShow(true);
    setIsCreate(true);
  };

  useEffect(() => {
    if (restaurants.length > 0 && mainRestaurants.length === 0) {
      setMainRestaurants([...restaurants]);
    }
  }, [restaurants, mainRestaurants]);

  const handleSelectChange = (event) => {
    setRestaurantPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterChange = (event) => {
    const inputValue = event.target.value.toLowerCase().trim();
    if (mainRestaurants.length === 0) {
      setMainRestaurants(restaurants);
    }

    if (inputValue.length === 0) {
      setRestaurants(mainRestaurants);
      return;
    }

    if (restaurants.length === 0) {
      return;
    }


    if (filterApplied === "Contiene") {
      setRestaurants(mainRestaurants.filter(restaurant => restaurant[column].toLowerCase().includes(inputValue)));
    } else if (filterApplied === "No Contiene") {
      setRestaurants(mainRestaurants.filter(restaurant => !restaurant[column].toLowerCase().includes(inputValue)));
    } else if (filterApplied === "Igual") {
      setRestaurants(mainRestaurants.filter(restaurant => restaurant[column].toLowerCase() === inputValue));
    } else if (filterApplied === "No Igual") {

      setRestaurants(mainRestaurants.filter(restaurant => restaurant[column].toLowerCase() !== inputValue));
    } else if (filterApplied === "Empieza con") {
      setRestaurants(mainRestaurants.filter(restaurant => restaurant[column].toLowerCase().startsWith(inputValue)));
    } else if (filterApplied === "Termina con") {
      setRestaurants(mainRestaurants.filter(restaurant => restaurant[column].toLowerCase().endsWith(inputValue)));
    } else {
      setRestaurants(mainRestaurants);
    }
  };


  const handleFilterType = (event) => {
    setFilterApplied(event.target.value);
  };
  const handleColumn = (event) => {
    setColumn(event.target.value);

  };
  const changeSortOrder = (event) => {
    const selectedOrder = event.target.value;
    setOrder(selectedOrder); // Actualiza el estado

    const sortedArray = [...restaurants].sort((a, b) => {
      if (selectedOrder === "ascendent") {
        return a[column].localeCompare(b[column]);
      } else if (selectedOrder === "descendent") {
        return b[column].localeCompare(a[column]);
      }
      return 0;
    });

    setRestaurants(sortedArray);
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
            <select className='p-2' onChange={handleFilterType} >
              <option value="Contiene">Contiene</option>
              <option value="No Contiene">No Contiene</option>
              <option value="Igual">Igual</option>
              <option value="No Igual">No Igual</option>
              <option value="Empieza con">Empieza con</option>
              <option value="Termina con">Termina con</option>
            </select>
            <select className='p-2' onChange={handleColumn} >
              <option value="name">Name</option>
              <option value="address">Address</option>
              <option value="PostCode">PostCode</option>
              <option value="Rating">Rating</option>
              <option value="typeOfFood">Tyoe of Food</option>
            </select>
            <select className="p-2" onChange={changeSortOrder}>
              <option value="">Selecciona un tipo de orden</option>
              <option value="ascendent">Orden Ascendente</option>
              <option value="descendent">Orden Descendente</option>
            </select>
            <button onClick={handleCreate} className='btn btn-custome'><i className='bx bxs-duplicate' ></i></button>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;

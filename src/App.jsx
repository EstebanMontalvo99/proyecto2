import { useEffect } from 'react';
import './App.css';
import MainTable from './components/MainTable/MainTable';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CustomModal from './components/Modal/CustomModal';
import { useRestaurantContext } from './RestaurantContext/RestaurantContext';
import SuccessModal from './components/Modal/SuccessModal';

function App() {
  const {
    restaurants,
    isShow,
    getAllRestaurants,
    restaurantIsCreated,
    restaurantIsUpdated,
    restaurantIsDeleted,
    setMainRestaurants,
    mainRestaurants
  } = useRestaurantContext();

  useEffect(() => {
    getAllRestaurants();

  }, []);


  return (
    <div className='mainContainer vw-100 vh-100 p-3'>

      {isShow ? <CustomModal /> : ""}
      {restaurantIsCreated ? <SuccessModal /> : ""}
      {restaurantIsUpdated ? <SuccessModal /> : ""}
      {restaurantIsDeleted ? <SuccessModal /> : ""}


      <Header />
      <MainTable />
      <Footer />
    </div>
  );
}

export default App;

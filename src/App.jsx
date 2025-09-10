
import { useDispatch, useSelector } from 'react-redux';


import Header from './components/Header';
import cn from './common/utils/cn';
import CartContainer from './components/CartContainer';
import { plants } from './dataset/plants';

import { goToHome, goToPlants } from "./store/NavSlice"

import './App.css';
import HomePage from './pages/Home';
import PlantsPage from './pages/PlantsPage';


function App() {

  const dispatch = useDispatch();
  const { isPlants } = useSelector((state) => state.nav);
  const isCartOpen = useSelector((state) => state.cart.isOpen);


  const handleGoHome = () => {
    dispatch(goToHome());
  };

  const handleGoToPlants = () => {
    dispatch(goToPlants());
  };


  return (
    <>

      <div className={cn(
        "app-container w-full min-h-screen flex flex-col  justify-start items-start",
        isCartOpen ? "overflow-hidden" : "overflow-auto",
      )}>
        <Header />

        <main className={cn(
          "w-full min-h-full flex-1",
          "flex flex-col",
        )}>

          {!isPlants && <HomePage plants={plants} handleGoToPlants={handleGoToPlants} />}
          {isPlants && <PlantsPage show={isPlants} plants={plants} goToHome={handleGoHome} />}

        </main>
      </div>
      <CartContainer />

    </>
  );
}

export default App;




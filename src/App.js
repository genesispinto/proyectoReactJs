import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider} from './components/context/cartContext';
import BuyerData from './components/BuyerData/BuyerData';
import Orden from './components/Order/Order';

function App() {
  
  return (
    <div className="App">

      <CartContextProvider > 
        <BrowserRouter>
         <NavBar/>
         <Routes>
         <Route path='/' element={<ItemListContainer/>} />
            <Route path='/Productos-gatos' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/Item/:productId' element={<ItemDetailContainer/>} />
            <Route path='/Todos-los-productos' element={<ItemListContainer title="Lista de productos"/>} />
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/datos-buyer/total=:total' element={<BuyerData/>}/>
            <Route path='/orden' element={<Orden />}/>
          </Routes>
      </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}

export default App;

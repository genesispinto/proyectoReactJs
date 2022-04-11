import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <NavBar/>
         <Routes>
         <Route path='/' element={<ItemListContainer/>} />
            <Route path='/Productos-gatos' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/Item/:productId' element={<ItemDetailContainer/>} />
            <Route path='/Todos-los-productos' element={<ItemListContainer title="Lista de productos"/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

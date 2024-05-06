
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import tuyo_banner from './Components/Assets/tuyo_banner.jpg'
import gourmet_banner from './Components/Assets/gourmet_banner.jpg'


function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/tuyo' element={<ShopCategory banner={tuyo_banner} category="driedfish"/>}/>
        <Route path='/gourmet' element={<ShopCategory banner={gourmet_banner} category="gourmet"/>}/>
        <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;

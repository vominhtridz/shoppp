
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,routes,route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Navbar/>
    <routes>
      <route path='/' element={<shop/>}/> 
      <route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/> 
      <route path='/womens' element={<ShopCategory banner={women_banner} category="woman"/>}/>
      <route path='/kids' element={<ShopCategory  banner ={kid_banner} category="kid"/>}/>
      <route path="product" element={<Product/>}>
        <route path='productId' element={<Product/>}/>
      </route>
      <route path='/cart' element={<Cart/>}/>
      <route path='/login' element={<LoginSignup/>}/>
    </routes>
    
      <Footer/>

    </BrowserRouter>
    </div>
  );
}

export default App;

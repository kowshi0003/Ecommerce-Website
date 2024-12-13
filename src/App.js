import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home'; 
import Mens from './Pages/Mens'; 
import Womens from './Pages/Womens'; 
import Kids from './Pages/Kids'; 
import Login from './Pages/Login'; 
import Cart from './Pages/Cart'; // Ensure correct capitalization
import Footer from './components/Footer';
import ShopContextProvider from './Context/ShopContext';

const router = createBrowserRouter([
  {
    path: "/", element: <><Navbar /><Home /><Footer /></>
  },
  {
    path: "/mens", element: <><Navbar /><Mens /><Footer /></>
  },
  {
    path: "/womens", element: <><Navbar /><Womens /><Footer /></>
  },
  {
    path: "/kids", element: <><Navbar /><Kids /><Footer /></>
  },
  {
    path: "/login", element: <><Navbar /><Login /><Footer /></>
  },
  {
    path: "/cart", element: <><Navbar /><Cart /><Footer /></>
  },
]);

function App() {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;

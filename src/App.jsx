import { useState } from "react";
import Home from "./Pages/Home.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Navbar from "./Components/Navbar.jsx";
import ShowProperty from "./Pages/ShowProperty.jsx";
import FavoriteProperty from "./Pages/FavoriteProperty.jsx";
import ProtectedRoute from "./Pages/ProtectedRoute.jsx";
import Logout from "./Pages/Logout.jsx";
import Footer from "./Components/Footer.jsx";


function App() {
  const [favorite, setFavorite] = useState([]);

  const addToFavorites = (property) => {
    setFavorite((prev) => [...prev, property]);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path="/logout" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/show-property" element={<ShowProperty addToFavorites={addToFavorites} /> }/>
         <Route path="/property/:id" element={ <ShowProperty addToFavorites={addToFavorites} /> }/>
         <Route element={<ProtectedRoute />}>
         <Route path="/favorite" element={<FavoriteProperty favorite={favorite} />} />
         </Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;

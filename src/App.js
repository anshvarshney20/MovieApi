import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Cards from "./Components/Cards";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Movie from "./Components/Movie";
import BookingForm from "./Components/BookingForm";
import Confirm from "./Components/Confirm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/bookingform/:id' element={<BookingForm />} />
          <Route path='/confirm' element={<Confirm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

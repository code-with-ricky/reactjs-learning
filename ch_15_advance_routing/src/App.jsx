import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Course from "./pages/Course";
import CourseDetails from "./pages/CourseDetails";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        {/* Nested routes */}
        <Route path="/product" element={<Product/>}>
          <Route path="men" element={<Men/>} />
          <Route path="women" element={<Women/>} />
        </Route>

        {/* dynamic routing */}
        <Route path="/courses" element={<Course/>}/>
        <Route path="/courses/:coursename" element={<CourseDetails/>}/>

        {/* for any other route */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

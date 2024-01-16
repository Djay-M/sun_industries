import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonial from "./pages/Testimonial";
import HomeArrow from "./components/HomeArrow";
import Contact from "./pages/Contact";
// import Products from "./pages/Products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="">
      <NavBar />
      <HomeArrow />
      <Home />
      <Services />
      <About />
      <Testimonial />
      <Contact />
      {/* <Products /> */}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
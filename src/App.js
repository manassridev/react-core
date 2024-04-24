import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Footer from "./components/Footer";

const AppLayout = () => (
  <div className="app-container">
    <Header />
    <Restaurant />
    <Footer />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

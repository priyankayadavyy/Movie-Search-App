import React, { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigate from "./components/MobileNavigate";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieoSlice";

const App = () => {
  const dispatch = useDispatch();
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");

      dispatch(setBannerData(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);
  return (
    <div className="pb-14 lg:pb-0">
      <Header />
      <div className="min-h-[85vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigate />
    </div>
  );
};

export default App;

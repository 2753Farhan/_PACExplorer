import React, { useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import EducationalInterface from "./components/Education/EducationInterface";
import WorkshopPage from "./components/Education/WorkshopPage";
import NotFound from "./components/NotFound/NotFound";
import ResourcesPage from "./components/Education/ResourcesPage";
import BoatAdventure from "./components/Games/BoatAdventure";

const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://pacexplorer-xw3b.onrender.com/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/learn/:gradeLevel" element={ <EducationalInterface />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/workshops" element={<WorkshopPage />} />
          <Route path="/game/boatgame" element={<BoatAdventure />} />
      


        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;

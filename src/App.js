import React from "react";
import { Route, Routes } from "react-router-dom";
import AutoCompound from "./components/AutoCompound";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import Vault  from "./components/vault/Vault"


function App() {

   


  return (
    <>
    <Routes>
      <Route path="/" element={<NavBar  />} />
      <Route path="/Vault" element={<Vault/>} />
      <Route path="/AutoCompound" element={<AutoCompound />} /> 
      <Route path="/LoginPage" element={<LoginPage/>} /> 
    </Routes>
    </>
  );
}

export default App;

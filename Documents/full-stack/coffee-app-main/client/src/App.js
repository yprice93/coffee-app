// import React, { useState, useEffect } from "react";
// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import Main from "./layout/Main";
import Login from "./layout/Login";
import Nav from "./components/Nav";
import { ContextProvider, MyContext } from "./context/MyContext";

function App() {
  // const [message, setMessage] = useState("Hi");

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:8000/message"
        );
        console.log(response.message);
        setMessage(response.message);
      } catch (error) {
        setMessage(error.message);
      }
    };
    fetchData();
  }, []);
  */

  return (
    <ContextProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;

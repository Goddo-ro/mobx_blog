import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;

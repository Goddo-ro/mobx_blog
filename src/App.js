import React, {useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import AccessControl from "./store/AccessControl";

function App() {
    useEffect(() => {
        AccessControl.checkStorage();
    }, []);

  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <div className="content">
                <AppRouter/>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;

import React, {useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import AccessControl from "./store/AccessControl";
import {observer} from "mobx-react-lite";
import PostsStore from "./store/PostsStore";

const  App = observer(() => {
    useEffect(() => {
        AccessControl.checkStorage();
        PostsStore.loadFromStorage();
    }, []);

    window.addEventListener("beforeunload", (ev) =>
    {
        ev.preventDefault();
        PostsStore.saveToStorage();
    });

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
});

export default App;

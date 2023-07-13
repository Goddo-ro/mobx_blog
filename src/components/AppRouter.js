import React from 'react';
import { Route, Routes } from "react-router-dom";
import AccessControl from "../store/AccessControl";
import {privateRoutes, routes} from "../router/router";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    return (
        <Routes>
            {
                !AccessControl.isAuthenticated
                    ? routes.map(route =>
                        <Route key={route.path} path={route.path} element={route.element} />
                    )
                    : privateRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={route.element} />
                    )
            }
        </Routes>
    );
});

export default AppRouter;
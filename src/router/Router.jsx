import React, { createContext, useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/login';
import './router.scss';
import userLoggedReducer, { userLoggedInitial } from '../reducers/useLoggedReducer';

export const AppContext = createContext({});

const Router = () => {

    const [userLogged, userLoggedDispatch] = useReducer(userLoggedReducer, userLoggedInitial);

    const globalStates = {
        userLogged: {userLogged, userLoggedDispatch}
    }
    return (
        <AppContext.Provider value={globalStates    }>
            <BrowserRouter>
                <Routes>
                    
                    <Route path='/'>
                        <Route element={<PrivatedRouter isAuthenticate={userLogged.isAuthenticated} />}></Route>                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>

    )
}

export default Router
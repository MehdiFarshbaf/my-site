import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {ToastContainer} from "react-toastify";
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./context/context";

//styles
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/styles.scss'
import './assets/styles/colors.scss'
import './assets/styles/fonts.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <App/>
            <ToastContainer position="top-right" rtl={true} closeOnClick={true}/>
        </AuthContextProvider>
    </BrowserRouter>
);

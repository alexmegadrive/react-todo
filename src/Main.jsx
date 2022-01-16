import React from "react";
import { Route, Routes } from "react-router";

import MainPage from "./containers/MainPage";
import Todos from "./containers/Todos";
import ImagesGallery from "./containers/ImagesGallery";
import Header from "./components/Header";

const Main = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={ <MainPage/> } />
                <Route path="/todos" element={ <Todos /> } />
                <Route path="/gallery" element={ <ImagesGallery /> } />
            </Routes>
        </div>
    )
}

export default Main;
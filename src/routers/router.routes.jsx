import React from "react";
import {Routes, Route} from "react-router-dom";
import List from "../pages/List";
import Products from "../pages/Products";

function Router(){
    return(
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/producte/:id" element={<Products />} />
        </Routes>
    )
}

export default Router;
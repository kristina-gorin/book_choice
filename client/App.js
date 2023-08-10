import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Choice from './components/Choice';
import Welcome from './components/Welcome';
import ThankYou from "./components/ThankYou";

const router = createBrowserRouter([
    {path:'/', element:<Welcome/>},
    {path:'/choice', element:<Choice/>},
    {path:'/thank_you', element:<ThankYou/>}
]);

function App(){
    return <div>
        <RouterProvider router={router}/>
    </div>
}

export default App;
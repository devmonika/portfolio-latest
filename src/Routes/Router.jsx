import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../Pages/Home/Home";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
            
        ]
    }
]);

export default routes;

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Dashboard from '../Pages/Dashboard/Dashboard';

const myCreatedRouter = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export default myCreatedRouter;
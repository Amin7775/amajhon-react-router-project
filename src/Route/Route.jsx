
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Product from '../Pages/Product/Product';

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
                element: <Products></Products>,
                loader: ()=>fetch(`https://dummyjson.com/products`)
            },
            {
                path: "/products/:id",
                element:<Product></Product>,
                loader: (object)=> fetch(`https://dummyjson.com/products/${object.params.id}`)
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export default myCreatedRouter;
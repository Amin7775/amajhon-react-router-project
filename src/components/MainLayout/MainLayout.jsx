import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <section className="flex justify-between px-10 shadow-md py-7">
                <div>
                    <h1 className="text-3xl font-bold">Amajhon</h1>
                </div>
                <nav className="text-lg font-medium">
                    <ul className="flex gap-10">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        
                    </ul>
                </nav>
            </section>
                <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
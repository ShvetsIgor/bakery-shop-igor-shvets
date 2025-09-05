import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
import Home from "./components/Home.tsx";
import {Paths} from "./utils/paths.ts";
import ShoppingCart from "./components/ShoppingCart.tsx";
import Customers from "./components/Customers.tsx";
import Orders from "./components/Orders.tsx";
import Bread from "./components/Bread.tsx";
import Dairy from "./components/Dairy.tsx";
import Error404Page from "./components/servicePages/Error404Page.tsx";
import {navItems, productsItems} from "./utils/constants.ts";
import NavigationDesktop from "./components/navigation/NavigationDesktop.tsx";
import Login from "./components/servicePages/Login.tsx";
import Logout from "./components/servicePages/Logout.tsx";
import {type NavItemType, Roles} from "./utils/app-types.ts";
import {useAppDispatch, useAppSelector} from "./redux/hooks.ts";
import SignUp from "./components/templates/SignUp.tsx";
import {loginWithFirebase} from "./firebase/loginWithFirebase.ts";


function App() {

    const {authUser} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function predicate(item: NavItemType) {
        return (
            item.role === Roles.ALL ||
            item.role === Roles.USER && authUser && !authUser.includes("admin") || //user not admin
            item.role === Roles.ADMIN && authUser && authUser.includes("admin") || //admin
            item.role === Roles.USER && authUser && authUser.includes("admin") && item.route !== Paths.CART || //user admin without CART
            item.role === Roles.NO_AUTH && !authUser
        );
    }

    function getRoutes() {
        return navItems.filter(item => predicate(item));
    }


    return (
        <Routes>
            {/*<Route path={Paths.HOME} element={<Layout/>}>*/}
            {/*<Route path={Paths.HOME} element={<Navigation items={navItems}/>}>*/}
            <Route path={Paths.HOME} element={<NavigationDesktop items={getRoutes()}/>}>
                <Route index element={<Home/>}/>
                <Route path={Paths.CART} element={<ShoppingCart/>}/>
                <Route path={Paths.CUSTOMERS} element={<Customers/>}/>
                <Route path={Paths.ORDERS} element={<Orders/>}/>
                {/*<Route path={Paths.PRODUCTS} element={<ProductLayout/>}>*/}
                {/*<Route path={Paths.PRODUCTS} element={<Navigation items={productsItems}/>}>*/}
                <Route path={Paths.PRODUCTS} element={<NavigationDesktop items={productsItems}/>}>
                    <Route path={Paths.BREAD} element={<Bread/>}/>
                    <Route path={Paths.DAIRY} element={<Dairy/>}/>
                </Route>
                <Route path={Paths.LOGIN} element={<Login/>}/>
                <Route path={Paths.LOGOUT} element={<Logout/>}/>
                <Route path={"*"} element={<Error404Page/>}/>
                <Route path={"/signup"}
                       element={<SignUp onSubmit={(data) => loginWithFirebase(data, dispatch, navigate)}/>}/>
            </Route>

        </Routes>
    )
}

export default App;

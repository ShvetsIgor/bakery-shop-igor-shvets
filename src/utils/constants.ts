import {type NavItemType, Roles} from "./app-types.ts";
import {Paths} from "./paths.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../redux/hooks.ts";
import {resetAuthUser} from "../redux/slices/authSlice.ts";

export const navItems: NavItemType[] = [
    {route: Paths.HOME, title: 'Home', role: Roles.ALL},
    {route: Paths.ORDERS, title: 'Orders', role: Roles.USER},
    {route: Paths.CUSTOMERS, title: 'Customers', role: Roles.ADMIN},
    {route: Paths.PRODUCTS, title: 'Products', role: Roles.ALL},
    {route: Paths.CART, title: 'Shopping Cart', role: Roles.USER},
    {route: Paths.LOGIN, title: 'Login', role: Roles.NO_AUTH},
    {route: Paths.LOGOUT, title: 'Logout', role: Roles.USER},
];

export const productsItems: NavItemType[] = [
    {route: Paths.HOME, title: 'Back to Home'},
    {route: Paths.BREAD, title: 'Bread'},
    {route: Paths.DAIRY, title: 'Dairy'}
]

export const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const logout = () => {
        localStorage.removeItem("email");
        dispatch(resetAuthUser());
        navigate("/login");
    };

    return logout;
};


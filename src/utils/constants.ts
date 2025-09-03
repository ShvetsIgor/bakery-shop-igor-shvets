import type {NavItemType} from "./app-types.ts";
import {Paths} from "./paths.ts";

export const navItems: NavItemType[] = [
    {route: Paths.HOME, title: 'Home'},
    {route: Paths.ORDERS, title: 'Orders'},
    {route: Paths.CUSTOMERS, title: 'Customers'},
    {route: Paths.PRODUCTS, title: 'Products'},
    {route: Paths.CART, title: 'Shopping Cart'},
    {route: Paths.LOGIN, title: 'Login'},
    {route: Paths.LOGOUT, title: 'Logout'},
];

export const productsItems: NavItemType[] = [
    {route: Paths.HOME, title: 'Back to Home'},
    {route: Paths.BREAD, title: 'Bread'},
    {route: Paths.DAIRY, title: 'Dairy'},

]
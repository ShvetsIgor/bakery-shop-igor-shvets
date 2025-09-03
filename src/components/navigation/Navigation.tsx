import type {FC} from "react";
import type {NavItemType} from "../../utils/app-types.ts";
import {NavLink, Outlet} from "react-router-dom";

type Props = {
    items: NavItemType[];
};

const Navigation:FC<Props> = ({items}) => {
    return (
        <div>
            <nav>
                <ul className="nav-list">
                    {items.map(item =>
                    <li key={item.route}>
                        <NavLink to={item.route}>{item.title}</NavLink>
                    </li>
                    )}
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Navigation;
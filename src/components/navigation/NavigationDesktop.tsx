import type {NavItemType} from "../../utils/app-types.ts";
import {type FC, useState} from "react";
import * as React from "react";
import {AppBar, Box, IconButton, Menu, MenuItem, Tab, Tabs, Tooltip} from "@mui/material";
import {Link, Outlet} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import {useAppSelector} from "../../redux/hooks.ts";
import {useLogout} from "../../utils/constants.ts";


type Props = {
    items: NavItemType[];
};

const NavigationDesktop: FC<Props> = ({items}) => {

    const [value, setValue] = useState(0);
    const [anchorElUser, setAnchorElUser] = useState<HTMLButtonElement | null>(null);
    const logout = useLogout();

    //check if state - not empty, then isLoggedIn -> true -> render icon
    //if false -> without an icon

    const authUser = useAppSelector(state => state.auth.authUser);
    const isLoggedIn = !!authUser;

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event)
        setValue(newValue);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    // const settings = [`${authUser}`, `${logout}`];

    const settings = [
        { label: authUser, action: () => {} },
        { label: "Logout", action: logout }
    ];

    return (
        <Box>
            <AppBar sx={{
                backgroundColor: "lightgray",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    textAlign: 'center'
                }}>
                    <Tabs value={value} onChange={handleChange}>
                        {items.map(item =>
                            <Tab key={item.route} component={Link} to={item.route} label={item.title}/>
                        )}
                    </Tabs>
                </Box>

                {/*rendering of icon true/false HERE*/}

                {isLoggedIn && (
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        pr: 2
                    }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar sx={{backgroundColor: "blueviolet"}} alt={authUser}
                                        src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, index) => (
                                <MenuItem key={index} onClick={() => {
                                    handleCloseUserMenu();
                                    setting.action()}}>
                                    <Typography sx={{textAlign: 'center'}}>{setting.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                )}
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavigationDesktop;
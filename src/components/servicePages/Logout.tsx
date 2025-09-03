import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks.ts";
import {resetAuthUser} from "../../redux/slices/authSlice.ts";
import Button from '@mui/material/Button';


const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        dispatch(resetAuthUser());
        navigate('/login');
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default Logout;
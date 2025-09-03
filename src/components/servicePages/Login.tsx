import SignIn from "../templates/SighIn.tsx";
import {useAppDispatch} from "../../redux/hooks.ts";
import {setAuthUser} from "../../redux/slices/authSlice.ts";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = (data: {authUser: string, password: string })=> {

        dispatch(setAuthUser(data.authUser));
        localStorage.setItem("email", data.authUser );
        localStorage.setItem("password", data.password)
        navigate("/");
    }

    return (
        <div>
            <SignIn onSubmit={handleLogin} />
        </div>
    );
};

export default Login;
import SignIn from "../templates/SighIn.tsx";
import {loginWithFirebase} from "../../firebase/loginWithFirebase.ts";
import {useAppDispatch} from "../../redux/hooks.ts";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <SignIn onSubmit={(data) => loginWithFirebase(data, dispatch, navigate)} />
        </div>
    );
};

export default Login;
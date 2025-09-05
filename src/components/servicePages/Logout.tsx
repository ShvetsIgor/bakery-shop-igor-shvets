import Button from '@mui/material/Button';
import {useLogout} from "../../utils/constants.ts";

const Logout = () => {

    const logout = useLogout(); //my hook in constants.ts

    return (
        <div>
            <Button variant="outlined" onClick={logout}>Logout</Button>
        </div>
    );
};

export default Logout;
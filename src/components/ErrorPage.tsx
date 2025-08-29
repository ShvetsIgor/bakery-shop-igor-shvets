import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Paths} from "../utils/paths.ts";


const ErrorPage = () => {

    const navigate = useNavigate();
    sessionStorage.setItem("onErrorPage", "true"); //flag true when ErrorPage

    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    // console.log(navEntries)
    const navType = navEntries[0]?.type;
    // console.log(navType)

    useEffect(() => {
        if ((sessionStorage.getItem("onErrorPage") === "true") && (navType === "reload")) {
            navigate(Paths.HOME);
            sessionStorage.removeItem("onErrorPage");
        }
    }, [navType, navigate]);

    return (
        <div>
            <h1>ERROR PAGE</h1>
        </div>
    );
};

export default ErrorPage;
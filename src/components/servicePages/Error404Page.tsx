import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Paths} from "../../utils/paths.ts";


const Error404Page = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation(); //pathname - at useLocation
    // console.log(location)

    useEffect(() => {
        if (pathname === `/${Paths.ERROR}`)
            navigate(Paths.HOME);
        else navigate(`/${Paths.ERROR}`);
    }, []);


    // const navigate = useNavigate();
    // sessionStorage.setItem("onError404Page", "true"); //flag true when ErrorPage
    //
    // const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    // // console.log(navEntries)
    // const navType = navEntries[0]?.type;
    // // console.log(navType)
    //
    // useEffect(() => {
    //     if ((sessionStorage.getItem("onError404Page") === "true") && (navType === "reload")) {
    //         navigate(Paths.HOME);
    //         sessionStorage.removeItem("onError404Page");
    //     }
    // }, [navType, navigate]);

    return (
        <div>
            <img style={{height: "80vh"}} src={"src/images/error404.jpg"} alt={"error404"}/>
        </div>
    );
};

export default Error404Page;
import React from "react";
import {Redirect, Route} from "react-router-dom";
import {getCookie} from "../common/utils/cookieUtils";

let isAdmin = getCookie("isAdmin");

function PrivateRoute ({children, ...rest}){
    console.log("PrivateRoute是否是管理员",isAdmin);
    return (
        <Route
            {...rest}
            render = {({location}) =>
                (isAdmin !== null) ? (
                    children
                ) : (
                    <Redirect
                        to = {{
                            pathname: "/login",
                            state: { from: location }
                        }}/>
                )
            }
        />
    );
}

export default PrivateRoute;
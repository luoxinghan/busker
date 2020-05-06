import React from "react";
import {
    NotLoginWrapper,
    NotLoginInfo,
    LoginInformation
} from "./style";
import {Link} from "react-router-dom";

function NotLoginPage(props) {
    return (
        <NotLoginWrapper>
            <NotLoginInfo>
                <h1>NOT<span>LOGGED IN</span></h1><br/>
                <LoginInformation className="back">
                    <p>You have not logged in.</p>
                    <p>Please <Link to={"/login"}>log in</Link> and try again.</p>
                </LoginInformation>
            </NotLoginInfo>
        </NotLoginWrapper>
    );

}

export default NotLoginPage;
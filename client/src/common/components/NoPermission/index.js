import React, {Component} from "react";
import {
    NoPermissionWrapper,
    NoPermissionInfo,
    LoginInformation
} from "./style";
import {Link, withRouter} from "react-router-dom";

class NoPermission extends Component {
    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <NoPermissionWrapper>
                <NoPermissionInfo>
                    <h1>No<span>Permission</span></h1><br/>
                    <LoginInformation className="back">
                        <p>Sorry, you do not have permission to access this page.</p>
                        <p>You can <span onClick={this.goBack}>return</span> to the previous interface, or
                            return to the <Link to={"/"}>home</Link>.</p>
                    </LoginInformation>
                </NoPermissionInfo>
            </NoPermissionWrapper>
        );
    }
}

export default withRouter(NoPermission);
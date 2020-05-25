import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {Button, Col, Row, Skeleton} from "antd";
import {Link, withRouter} from "react-router-dom";
import moment from "moment";
import {
    BuskerDetailWrapper,
    BuskerProfileWrapper,
    ProfileInfo
} from "./style";
import {createLoadingSelector} from "../../common/utils/selectors";
import {fromJS} from "immutable";

class UserDetail extends Component {
    render() {
        const {user, currentUser, loading} = this.props;
        return (
            <BuskerDetailWrapper>
                <Skeleton loading={loading}>
                    <BuskerProfileWrapper>
                        <img
                            className="profile-pic"
                            alt={user.get("imgUrl")}
                            src={user.get("imgUrl")}/>
                        <ProfileInfo>
                            <h1 className="name">{user.get("username")}</h1>
                            <p><span>Birthday: </span>{moment(user.get("dateOfBirth")).format("YYYY/MM/DD")}</p>
                            <p><span>SEX: </span>{user.get("sex") === 1 ? "Male" : "Female"}</p>
                            <p><span>BALANCE: </span>{user.get("balance")} $</p>
                            <p>YOU REGISTERED IN {moment(user.get("registeredTime")).format("LLL")}.</p>
                        </ProfileInfo>
                        {currentUser.get("id") === user.get("id") ?
                            <Link to={"/user/update/" + user.get("id")}><Button>Edit Profile</Button></Link> : null}
                    </BuskerProfileWrapper>
                </Skeleton>
            </BuskerDetailWrapper>
        );
    }

    componentDidMount() {
        let userId = this.props.match.params.id;
        let days = 10;
        this.props.getUserDetail({userId, days});
    }
}

const loadingSelector = createLoadingSelector(['GET_USER_DETAIL']);
const mapStateToProps = (state) => {
    return {
        user: state.get("userDetail").get("user"),
        currentUser: state.get("login").get("currentUser"),
        loading: loadingSelector(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserDetail(data) {
            dispatch(actionCreators.getUserDetail(data));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserDetail));
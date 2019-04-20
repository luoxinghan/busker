import React from 'react';
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {
    Addition,
    Avator,
    Button,
    HeaderWrapper,
    Nav,
    NavItem,
    NavLogo
} from './style';

const getLogArea = (logged, handleLogOut, handleLogIn) =>{
    if (logged) {
        return (
            <Avator
                onClick={handleLogOut}
            />
        );
    }  else {
        return (
            <Button
                onClick={handleLogIn}
            >Log In</Button>
        );
    }
};

function Header(props) {
    const {logged, handleLogOut, handleLogIn} = props;
    return (
        <HeaderWrapper>
            <NavLogo/>
            <Nav>
                <NavItem className='active'>Home</NavItem>
                <NavItem>Busker</NavItem>
                <NavItem>Trendency</NavItem>
                <NavItem>Performance</NavItem>
            </Nav>
            <Addition>
                {getLogArea(logged, handleLogOut, handleLogIn)}
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        logged: state.get("header").get("logged")
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogIn(){
            dispatch(actionCreators.getLogInAction());
        },
        handleLogOut(){
            dispatch(actionCreators.getLogOutAction());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
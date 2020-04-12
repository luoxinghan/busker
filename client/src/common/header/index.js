import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Dropdown, Menu} from 'antd';
import {actionCreators as loginActionCreators} from "../../pages/login/store";
import {Addition, Avatar, Button, HeaderWrapper, Nav, NavItem, NavLogo, HeaderInfo} from './style';

function Header(props) {
    const {isLogged, currentUser, logout} = props;
    return (
        <HeaderWrapper>
            <HeaderInfo>
                <NavLogo/>
                <Nav>
                    <Link to="/"><NavItem>HOME</NavItem></Link>
                    <Link to="/busker"><NavItem>BUSKERS</NavItem></Link>
                    <Link to="/moment"><NavItem>MOMENTS</NavItem></Link>
                    <Link to="/trail"><NavItem>TRAILS</NavItem></Link>
                    <Link to="/album"><NavItem>ALBUMS</NavItem></Link>
                </Nav>
                <Addition>
                    {
                        isLogged ?
                            <Dropdown overlay={
                                <Menu>
                                    <Menu.Item>
                                        <Link to={"/busker/detail/" + currentUser.get("id")}>Profile</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <span onClick={logout}>Exit</span>
                                    </Menu.Item>
                                </Menu>
                            } placement="bottomCenter">
                                <Avatar imgUrl={currentUser.get("imgUrl")}/>
                            </Dropdown> :
                            <Link to="/login"><Button>LOGIN</Button></Link>
                    }
                </Addition>
            </HeaderInfo>
        </HeaderWrapper>
    );

}

const mapStateToProps = (state) => {
    return {
        isLogged: state.get("login").get("isLogged"),
        currentUser: state.get("login").get("currentUser")
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout(){
            dispatch(loginActionCreators.changeLogout());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
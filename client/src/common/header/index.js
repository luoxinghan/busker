import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import {
    Addition,
    Avatar,
    Button,
    HeaderWrapper,
    Nav,
    NavItem,
    NavLogo
} from './style';

function Header(props) {
    const {isLogged,logout} = props;
    return (
        <HeaderWrapper>
            <NavLogo/>
            <Nav>
                <Link to="/"><NavItem className='active'>Home</NavItem></Link>
                <Link to="/busker"><NavItem>Busker</NavItem></Link>
                <Link to="/moment"><NavItem>Moment</NavItem></Link>
                <Link to="/performance"><NavItem>Performance</NavItem></Link>
            </Nav>
            <Addition>
                {
                    isLogged ?
                        <Dropdown overlay={
                            <Menu>
                                <Menu.Item>
                                    <Link to="/">Profile</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <span onClick={logout}>Exit</span>
                                </Menu.Item>
                            </Menu>
                        } placement="bottomCenter">
                            <Avatar imgUrl="https://avatars1.githubusercontent.com/u/30335361?s=460&v=4"/>
                        </Dropdown> :
                        <Link to="/login"><Button>log in</Button></Link>
                }
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.get("login").get("isLogged")
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
import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 58px;
    border-bottom: 1px solid #f1f1f1;
`;

export const NavLogo = styled.a.attrs({
   href: '/'
})`
    height: 58px;
    width: 110px;
    position: absolute;
    top: 0;
    left: 15px;
    display: block;
    background: url(${logoPic});
    background-size: 100% 105%;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 58px;
    float: left;
    &.active{
        color: #9abdb1;
    }
    padding: 0 20px;
    font-size: 17px;
    color: #333333;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 58px;
`;

export const Button = styled.button`
    float: right;
    margin-top: 14px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 28px;
    border: 1px solid #333;
    border-radius: 19px;
    font-size: 14px;
    background: none;
    color: #333;
`;

export const Avatar = styled.img`
    float: right;
    margin-right: 40px;
    margin-top: 8px;
    padding: 20px 20px;
    border: 1px solid #999999;
    border-radius: 10px;
    background: url("${props => props.imgUrl}");
    background-size:cover;
`;
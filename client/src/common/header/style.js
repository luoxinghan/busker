import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
`;

export const HeaderInfo = styled.div`
    min-width: 1180px;
    margin: 0 auto;
    height: 64px;
    border-bottom: 1px solid #f1f1f1;
    background: #000;
`;

export const NavLogo = styled.a.attrs({
   href: '/'
})`
    height: 64px;
    width: 150px;
    position: absolute;
    top: 0;
    left: 15px;
    display: block;
    background: url(${logoPic});
    background-size: 100% 105%;
`;

export const Nav = styled.div`
    width: 860px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 64px;
    float: left;
    &.active{
        color: #ffffff;
    }
    padding: 0 20px;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #ffffff;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 64px;
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    float: right;
    margin-right: 20px;
    padding: 0 15px;
    line-height: 28px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    font-size: 12px;
    background: #000;
    color: #ffffff;
`;

export const Avatar = styled.img`
    float: right;
    margin-right: 40px;
    padding: 20px 20px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    background: url("${props => props.imgUrl}");
    background-size:cover;
`;
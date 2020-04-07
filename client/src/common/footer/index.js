import React from "react";
import IconPic from "../../statics/bl.png";
import {Link} from "react-router-dom";
import {
    FooterWrapper,
    FooterInfo,
    FooterLeft,
    FooterMid,
    FollowUs
} from "./style";

function Footer() {
    return (
        <FooterWrapper>
            <FooterInfo>
                <FooterLeft>
                    <img
                        className="footer-pic"
                        alt="aa"
                        src={IconPic}
                    />
                    <p className="footer-copy-right">© 2019 格州青年旅社 All Rights Reserved.</p>
                </FooterLeft>
                <FooterMid>
                    <FollowUs>
                        <a href="https://www.instagram.com/luo_xing_han/"><span className="iconfont ins">&#xe639;</span></a>
                        <a href="https://www.instagram.com/luo_xing_han/"><span className="iconfont vk">&#xf25e;</span></a>
                        <a href="https://www.instagram.com/luo_xing_han/"><span className="iconfont wx">&#xe68b;</span></a>
                    </FollowUs>
                    <ul>
                        <li><Link className="link-content" to="/">Home</Link></li>
                        <li><Link className="link-content" to="/aboutus">About Us</Link></li>
                        <li><Link className="link-content" to="/feedback">Contact Us</Link></li>
                        <li><Link className="link-content" to="/sponsor">Sponsor Us</Link></li>
                    </ul>
                </FooterMid>
            </FooterInfo>
        </FooterWrapper>
    )
}

export default Footer;
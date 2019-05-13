import React, {Component} from "react";
import IconPic from "../../statics/bl.png";
import { Link } from "react-router-dom";
import {
    FooterWrapper,
    FooterLeft,
    FooterRight,
    FooterContactUs,
    FooterLinkItem
} from "./style";

class Footer extends Component{
    render() {
        return(
            <FooterWrapper>
                <div className="footer-info">
                    <FooterLeft>
                        <img
                            className="footer-pic"
                            alt="aa"
                            src={IconPic}
                        />
                        <p className="footer-copy-right">© 2019 格州青年旅社 All Rights Reserved.</p>
                        <FooterContactUs>
                            <a href="https://www.instagram.com/luo_xing_han/"><span className="iconfont">&#xe651;</span></a>
                            <a href="https://www.instagram.com/luo_xing_han/"><span className="iconfont">&#xe639;</span></a>
                            <a href="https://www.instagram.com/luo_xing_han/"><span className="iconfont">&#xf25e;</span></a>
                            <a href="https://www.instagram.com/luo_xing_han/"><span className="iconfont">&#xe8f0;</span></a>
                        </FooterContactUs>
                    </FooterLeft>
                    <FooterRight>
                        <FooterLinkItem>
                            <h3 className="link-title">HELP</h3>
                            <Link className="link-content" to="/"><p>Home</p></Link>
                            <Link className="link-content" to="/aboutus"><p>About Us</p></Link>
                            <Link className="link-content" to="/feedback"><p>Feedback</p></Link>
                        </FooterLinkItem>
                    </FooterRight>
                </div>
            </FooterWrapper>
        )
    }
}

export default Footer;
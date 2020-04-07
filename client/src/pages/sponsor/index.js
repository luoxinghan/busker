import React from "react";
import {
    SponsorWrapper,
    SponsorHeader,
    SponsorQRCode
} from "./style";
import {Content, Title} from "../../common/style";

function SponsorUs(props) {
    return (
        <SponsorWrapper>
            <Content>
                <SponsorHeader>
                    <Title><span>Sponsor Us</span></Title>
                    <p>Because the website is a non-profit website, the traffic and server load are relatively large, so we need your sponsorship to help us build a better website.</p>
                </SponsorHeader>
                <SponsorQRCode>
                    <div><span className="iconfont alipay">&#xe634;</span></div>
                    <img src="http://www.gxjyzyw.cn/data/upload/image/20180316/1521186883542907.png" alt="alipay"/>
                    <div><span className="iconfont wechat">&#xe617;</span><br/></div>
                    <img src="http://www.gxjyzyw.cn/data/upload/image/20180316/1521186714866910.png" alt="wechat pay"/>
                    <div><span className="iconfont paypal">&#xe614;</span><br/></div>
                    <img src="http://generator.1qr.fr/?id=y2t0&size=7&date=201505&cache=1" alt="paypal"/>
                </SponsorQRCode>
            </Content>
        </SponsorWrapper>
    );

}

export default SponsorUs;
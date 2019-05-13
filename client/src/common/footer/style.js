import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 50px 0px;
  background: #333;
  width: 100%;
  margin: 0 auto;
  .footer-info{
    width: 1024px;
    margin: 0 auto;
    overflow: hidden;
  }
  
`;

export const FooterLeft = styled.div`
  width: 35%;
  float: left;
  .footer-pic{
    width: 120px;
  }
  .footer-copy-right{
    color: #f0f0f0;
    padding-top: 15px;
    font-size: 14px;
  }
`;

export const FooterContactUs = styled.div`
  margin-top: 20px;
  a{
    text-decoration: none;
  }
  .iconfont {
    color: #f0f0f0;
    font-size: 24px;
    margin-right: 2px;
  }
`;

export const FooterRight = styled.div`
  width: 65%;
  float: left;
`;

export const FooterLinkItem = styled.div`
  width: 25%;
  float: left;
  padding-left: 8px;
  padding-right: 8px;
  .link-title{
    color: white;
    font-size: 16px;
  }
  .link-content{
    padding: 5px;
    color: white;
    text-decoration: none;
    font-size: 14px;
    opacity: 0.8;
  }
`;

import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: relative;
  
`;

export const FooterInfo = styled.div`
    min-width: 1180px;
    margin: 0 auto;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    background: #000;
`;

export const FooterLeft = styled.div`
  width: 30%;
  .footer-pic{
      max-width: 120px;
    }
  .footer-copy-right{
    color: #999;
      padding: 5px 0;
      font-size: 12px;
  }
`;

export const FooterMid = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  ul{
    display: flex;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 20px;
  }
  li{
    display: list-item;
    list-style-type: none;
    padding: 0 35px;
    .link-content{
      color: #ffffff;
      line-height: 100%;
    }
    .link-content:hover{
      color: #999999;
    }
  }
`;

export const FollowUs = styled.div`
  margin-right: 20px;
  a{
    text-decoration: none;
  }
  .iconfont {
    color: #ffffff;
    font-size: 24px;
    letter-spacing: 10px;
    transition: .2s;
  }
  .ins:hover{
      color: rgba(246, 82, 79, 1.0);
  }
  .vk:hover{
      color: rgba(79, 125, 179, 1.0);
  }
  .wx:hover{
      color: rgba(79, 190, 49, 1.0);
  }
`;

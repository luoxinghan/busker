import styled from "styled-components";

export const SponsorWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const SponsorHeader = styled.div`
  text-align: center;
  p{
    font-size: 1.6rem;
    word-wrap: break-word;
    color: #1a1a1a;
  }
`;

export const SponsorQRCode = styled.div`
  text-align: center;
  .iconfont{
      font-size: 3rem;
  }
  .alipay{
      color: rgb(0, 159, 233);
  }
  .wechat{
      color: rgb(9, 187, 7);
  }
  .paypal{
      color: rgb(23, 44, 112);
  }
  img{
    width: 200px;
    margin-bottom: 20px;
  }
`;
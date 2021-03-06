import styled from "styled-components";

export const DetailWrapper = styled.div`
  position: relative;
`;

export const TrailInfoArea = styled.div`
  width: 1180px;
  margin: 10px auto;
  padding: 10px 28px;
`;

export const TrailCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 20px;
  border-radius: 10px;
  display: flow;
`;

export const TrailImg = styled.img`
  width: 200px;
`;

export const TrailContent = styled.div`
  margin-left: 20px;
  color: #1a1a1a;
  .trail-name{
    font-size: 2.4rem;
  }
  .title{
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: .075em;
    font-weight: 600;
    color: #b3b3b3;
  }
  time{
    font-size: 1.4rem;
  }
  a{
    color: #ff3530;
  }
`;

export const LikeArea = styled.div`
  
`;

export const ShareArea = styled.div`
  padding: 10px 0;
  button{
    margin-right: 5px;
  }
  button:hover{
    opacity: 0.7;
  }
`;

export const TrailExtraInfo = styled.div`
  overflow: hidden;
  .des{
    font-size: 1.6rem;
    color: #1a1a1a;
    letter-spacing: 1px;
  }
`;

export const BuskersList = styled.div`
  display: flow;
  .busker-item{
    width: 80px;
    margin: 20px;
    text-align: center;
  }
  img{
    border-radius: 50%;
    width: 100%;
  }
  .busker-name{
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #1a1a1a;
  }
`;
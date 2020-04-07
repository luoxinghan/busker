import styled from "styled-components";

export const DetailWrapper = styled.div`
  position: relative;
  overflow: hidden;
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
  width: 250px;
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
`;
import styled from "styled-components";

export const TrailWrapper = styled.div`
  
`;

export const TrailList = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const TrailItem = styled.div`
  width: 960px;
  height: 300px;
  margin: 60px auto 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover{
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    background: #f9f9f9;
  }
  
  .poster-pic{
    float: left;
    height: 300px;
    width: 222px;
    margin-top: -30px;
    margin-left: 30px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const TrailInfo = styled.div`
  width: 660px;
  padding: 20px;
  font-size: 1.8rem;
  overflow: hidden;
  display: inline-block;
  .participant{
    font-size: 2.4rem;
  }
  .busker-name{
    font-size: 1.8rem;
  }
  .time{
    color: #555;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .address{
    font-size: 1.4rem;
    color: #999;
    span{
      font-weight: 600;
      color: #1a1a1a;
    }
  }
  .des{
    font-size: 1.6rem;
    line-height: 25px;
    color: #555;
  }
`;

export const TrailListMore = styled.div`
  width: 100px;
  margin: 20px auto;
  cursor: pointer;
  text-align: center;
  font-size: 2.5rem;
`;

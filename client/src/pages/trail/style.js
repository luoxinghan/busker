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
  font-size: 18px;
  overflow: hidden;
  display: inline-block;
  .time{
    color: #555;
  }
  .address{
    font-size: 16px;
    color: #999;
  }
  .des{
    font-size: 16px;
    line-height: 25px;
    color: #555;
  }
`;

export const TrailListMore = styled.div`
  width: 100px;
  margin: 20px auto;
  cursor: pointer;
  text-align: center;
  font-size: 25px;
`;

import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
`;

export const AboutUsHeader = styled.div`
  padding-top: 20px;
  text-align: center;
  h2{
    font-size: 24px;
    color: #999999;
  }
  p{
    font-size: 16px;
    color: #a4b0be;
  }
`;

export const TeamList = styled.div`
  
`;

export const TeamItem = styled.div`
  margin: 40px 0;
  overflow: hidden;
  position: relative;
  .team-pic{
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
  .img-left{
    float: left;
  }
`;

export const TeamInfo = styled.div`
  display: inline-block;
  width: 450px;
  margin-left: 20px;
  .name{
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    padding: 0;
    margin: 0;
  }
  .intro{
    padding: 2px 0;
    font-size: 14px;
    line-height: 14px;
    margin: 0;
  }
`;

export const WorkList = styled.div`
    overflow: hidden;
`;

export const WorkItem = styled.span`
    display: block;
    float: left;
    line-height: 20px;
    margin: 5px 10px 5px 0px;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
`;

export const Contact = styled.div`
  .iconfont{
    color: #70a1ff;
    font-size: 22px;
    margin-right: 2px;
  }
`;
import styled from "styled-components";

export const BuskerDetailWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const BuskerProfileWrapper = styled.div`
  width: 100%;
  margin: 30px auto;
  overflow: hidden;
  position: relative;
  .profile-pic{
    float: left;
    height: 200px;
    width: 200px;
    border-radius: 5px;
  }
  Button{
    position: absolute;
    right:0;
  }
`;

export const ProfileInfo = styled.div`
  width: 720px;
  padding: 5px 20px;
  font-size: 14px;
  color: #1a1a1a;
  display: inline-block;
  .name{
    font-size: 25px;
  }
`;

export const BuskerTrailWrapper = styled.div`
  width: 100%;
`;

export const TrailList = styled.div`
  overflow: hidden;
  width: 1024px;
  margin: 10px auto;
`;

export const TrailItem = styled.div`
  width: 204.8px;
  height: 310px;
  float: left;
  display: block;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  transition: .8s;
  .trail-pic{
     width: 100%;
     height: 222px;
     transition: .8s;
  }
  &:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background: #f3f3f3;
    .trail-pic{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }
  .time{
    padding: 0;
    margin: 5px 0;
    font-size: 14px;
  }
  .address{
    padding: 0;
    margin: 0;
    font-size: 10px;
  }
`;

export const BuskerMomentWrapper =styled.div`
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  height: 50px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #f1f1f1;
  h3{
    font-size: 20px;
    color: #333333;
  }
  Button{
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const MomentList = styled.div`
  overflow: hidden;
  width: 1024px;
  margin: 10px auto;
`;

export const MomentItem = styled.div`
  width: 100%;
  padding: 15px 0;
  margin: 5px 0;
  border-radius: 10px;
  transition: .8s;
  overflow: hidden;
  .moment-pic{
    float: left;
    display: block;
    width: 320px;
    height: 180px;
  }
  &:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background: #f3f3f3;
  }
`;

export const MomentInfo = styled.div`
  width: 680px;
  color: #555555;
  margin-left: 20px;
  display: inline-block;
  div{
    overflow: hidden;
    font-weight: 600;
  }
  .tendency{
    float: left;
    display: block;
    color: #d35400;
  }
  .add-time{
    float: right;
    display: block;
  }
  .content{
    color: #555;
    font-size: 14px;
  }
`;

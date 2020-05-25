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
  p{
    color: #999999;
    font-size: 14px;
    span{
      color: #1a1a1a;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
    }
  }
`;
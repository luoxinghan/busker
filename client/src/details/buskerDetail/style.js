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

export const BuskerTrailWrapper = styled.div`
  width: 100%;
`;

export const TrailsList = styled.div`
  overflow: hidden;
  width: 1024px;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
`;

export const TrailItem = styled.div`
  width: 230px;
  display: block;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  transition: .8s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: #f3f3f3;
  color: #1a1a1a;
  cursor: pointer;
  .trail-pic{
     width: 100%;
     height: 240px;
  }
  &:hover{
    opacity: 0.7;
  }
  h3{
    color: #1a1a1a;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  p{
    padding: 0;
    margin: 5px 0;
    font-size: 12px;
    span{
      color: #1a1a1a;
      font-weight: bold;
    }
  }
`;

export const BuskerMomentWrapper =styled.div`
  width: 100%;
`;

export const BuskerAlbumWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  height: 50px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #f1f1f1;
  h2{
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
  padding: 15px;
  margin: 15px 0;
  border-radius: 10px;
  transition: .8s;
  overflow: hidden;
  display: flex;
  background: #f3f3f3;
  .moment-pic{
    width: 30%;
    height: 180px;
  }
  &:hover{
    opacity: 0.7;
  }
`;

export const MomentInfo = styled.div`
  margin-left: 20px;
  width: 70%;
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
    color: #9f9f9f;
  }
  .content{
    color: #1a1a1a;
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .address{
    color: #999999;
    span{
      color: #1a1a1a;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  h2{
    font-size: 20px;
  }
`;

export const AlbumsList = styled.div`
  overflow: hidden;
  width: 1024px;
  margin: 10px auto;
  .flow{
      display: flex;
      flex-wrap: wrap;
  }
  .item{
      margin-bottom: 60px;
      text-align: center;
  }
`;
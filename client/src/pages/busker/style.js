import styled from "styled-components";

export const BuskerWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
`;

export const BuskerSort = styled.div`
  h2{
    font-size: 18px;
    color: #333;
    display: inline-block;
  }
  Button{
    margin: 0 10px;
  }
`;

export const BuskerList = styled.div`
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
  position:relative;
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const BuskerItem = styled.div`
  float: left;
  width: 20%;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
    
  &:hover .busker-info {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .busker-avator{
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const BuskerInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #999;
  overflow: hidden;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: .5s ease;
  transition: .5s ease;
  .name{
    color: white;
    font-size: 20px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
    text-align: center;
  }
  .text{
    color: white;
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

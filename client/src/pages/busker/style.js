import styled from "styled-components";

export const BuskerWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const RecommendBusker = styled.div`
  width: 1180px;
  margin: 10px auto;
  padding: 10px 28px;
`;

export const BuskerSort = styled.div`
  width: 1180px;
  margin: 10px auto;
  padding: 10px 28px;
  h2{
    font-size: 1.8rem;
    color: #333;
    display: inline-block;
  }
  Button{
    margin: 0 10px;
  }
`;

export const BuskerList = styled.div`
  width: 1180px;
  margin: 10px auto;
  padding: 10px 28px;
  .ant-pagination {
    margin: 20px 0;
  }
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const BuskerItem = styled.div`
  box-sizing: border-box;
  padding: 20px 0;
  &:hover .busker-info {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .busker-avator{
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const BuskerInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  align-items: center;
  background-color: #000000;
  overflow: hidden;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: .5s ease;
  transition: .5s ease;
  .name{
    text-transform: uppercase;
    color: white;
    letter-spacing: 2px;
    font-size: 2rem;
    font-family: "Georgia", "serif";
    font-style: italic;
    font-weight: bold;
    text-align: center;
  }
  .text{
    text-transform: uppercase;
    font-weight: 500;
    .title{
      color: #999999;
    }
    color: white;
    font-size: 1.2rem;
    text-align: center;
  }
`;

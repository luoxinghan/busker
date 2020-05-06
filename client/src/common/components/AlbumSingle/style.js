import styled from "styled-components";

export const Single = styled.div`
  height: 100px;
  width: 100%;
  padding: 20px;
  box-sizing: content-box;
  position: relative;
  display: flex;
  .music{
    position: relative;
    display: inline-block;
    height: 100%;
    .single-img{
      height: 100%;
    }
    .mock{
      background: #f2f2f2;
      opacity: 0.4;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 4;
    }
    i{
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: 35px;
      color: #ffffff;
      transform: translate(-50%, -50%);
      cursor: pointer;
      z-index: 10;
      transition: 0.2s;
      &:hover{
        color: #999999;
      }
    }
  }
  .single-content{
    margin-left: 20px;
    display: inline-block;
    h3{
      cursor:pointer;
      &:hover{
        color: #cccccc;
      }
    }
    .author{
      font-size: 12px;
      font-weight: 700;
      color: #b3b3b3;
      span{
        color: #1a1a1a;
      }
    }
    .type-tag{
      span{
        padding: 3px 6px;
        border: 1px solid #f0f0f0;
        border-radius: 5px;
        margin-right: 10px;
      }
    }
  }
  .publish-time{
    position: absolute;
    right: 0;
    font-size: 14px;
  }
`;
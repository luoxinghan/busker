import styled from "styled-components";

export const Single = styled.div`
  height: 100px;
  width: 100%;
  padding: 10px;
  box-sizing: content-box;
  position: relative;
    i{
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: 35px;
      color: #f0f0f0;
      transform: translate(-50%, -50%);
      cursor: pointer;
      z-index: 10;
      transition: 0.2s;
      &:hover{
        color: #999999;
      }
    }
  .single-content{
    .author{
      font-size: 12px;
      font-weight: 700;
      color: #b3b3b3;
      span{
        color: #1a1a1a;
      }
    }
  }
`;

export const SingleTitle = styled.div`
    display: flex;
    .type-tag{
      span{
        padding: 3px 6px;
        border: 1px solid #f0f0f0;
        border-radius: 5px;
        margin-right: 10px;
        font-size: 1.2rem;
      }
    }
`;
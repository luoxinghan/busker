import styled from "styled-components";

export const MomentWrapper = styled.div`
  
`;

export const MomentList = styled.section`
  width: 1024px;
  margin: 0 auto;
  position: relative;
  &::before {
    content: '';
    background: #C5CAE9;
    width: 5px;
    height: 95%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const MomentItem = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
  &:nth-child(even) .item-info {
    float: right;
    padding: 40px 30px 10px 30px;
  }
  &:nth-child(even) .item-info .date {
    right: auto;
    left: 0;
  }
  &:nth-child(even) .item-info::after {
    content: '';
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 30px;
    left: -15px;
    border-width: 10px 15px 10px 0;
    border-color: transparent #f5f5f5 transparent transparent;
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  .div-circle {
    width: 30px;
    height: 30px;
    background: #3F51B5;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-top: 25px;
    margin-left: -15px;
  }
`;

export const ItemInfo = styled.div`
    position: relative;
    width: 45%;
    padding: 10px 30px;
    border-radius: 4px;
    background: #f5f5f5;
    box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: .4s;
    p{
        color: #1a1a1a;
        font-size: 1.2rem;
        margin: 5px 0;
        span{
            text-transform: uppercase;
            letter-spacing: .075em;
            font-weight: 600;
            color: #b3b3b3;
        }
    }
  .date {
    background: #FF4081;
    display: inline-block;
    color: #FFFFFF;
    padding: 10px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .iconfont{
    font-size: 1.4rem;
  }
  .des{
    font-size: 1.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &:hover{
    opacity: 0.8;
  }
`;

export const ItemHeader = styled.div`
  height: 200px;
  position: relative;
  margin-bottom: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url("${props => props.bgUrl}") center center no-repeat;
  background-size: cover;
  h2 {
    color: #FFFFFF;
    position: absolute;
    bottom: 5px;
    left: 20px;
  }
`;

export const MomentMore = styled.p`
  text-align: center;
  margin: 20px;
  cursor: pointer;
  font-size: 1.8rem;
`;
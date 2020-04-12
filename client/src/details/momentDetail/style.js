import styled from "styled-components";

export const MomentDetailWrapper = styled.div`
  position: relative;
`;

export const MomentDetailInfo = styled.div`
  width: 1180px;
  margin: 10px auto;
  padding: 10px 28px;
`;

export const MomentImgWrapper = styled.div`
  width: 100%;
  display: block;
  .ant-carousel .slick-slide {
    text-align: center;
    height: 650px;
    line-height: 650px;
    background: #364d79;
    overflow: hidden;
    border-radius: 2px;
    border: 1px solid #333;
  }
  .ant-carousel .slick-slide h3 {
    font-size: 28px;
    color: #fff;
  }
`;

export const MomentContent = styled.div`
  padding: 30px 20px;
  width: 100%;
  display: flow;
`;

export const BuskerDetail = styled.div`
  width: 30%;
  p{
    font-size: 1.2rem;
    color: #1a1a1a;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0;
    margin: 2px 0;
    span{
      color: #999999;
      text-transform: none;
    }
  }
`;

export const MomentDescribe = styled.div`
  width: 70%;
  p{
    color: #222222;
    font-size: 1.6rem;
    line-height: 24px;
  }
  p:first-letter{
    float: left;
    font-size: 4.8em;
    line-height: 1.1em;
    margin: -.15em .08em -.2em 0;
  }
`;

export const ImgCarouselItem = styled.div`
  background: url("${props => props.imgUrl}");
  background-size: cover;
`;



export const MomentVideo = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  padding: 10px;
`;

export const VideoItem = styled.div`
  background-color: #000;
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
`;

export const BuskerName = styled.p`
  span:hover{
      cursor: pointer;
      color: #ff3530;
  }
`;
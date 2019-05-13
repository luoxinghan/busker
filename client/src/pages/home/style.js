import styled from "styled-components";

export const HomeCarousel = styled.div`
    width: 70%;
    margin: 20px auto;
    .ant-carousel .slick-slide {  
        text-align: center;
        height: 590px;
        line-height: 590px;
        background: #364d79;
        overflow: hidden;
        border-radius: 2px;
        border: 1px solid #333;
    }
    
    .ant-carousel .slick-slide h3 {
        font-size: 30px;
        color: #fff;
    }
`;

export const HomeCarouselItem = styled.div`
  background: url("${props => props.imgUrl}");
  background-size: 100% 100%;
`;

export const HomeWebDes = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  .title{
    font-size: 20px;
    letter-spacing: 2px;
    text-align: center;
  }
  .des{
    font-size: 16px;
  }
`;



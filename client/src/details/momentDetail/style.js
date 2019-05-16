import styled from "styled-components";

export const MomentDetailWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const DetailHeader = styled.div`
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid #f1f1f1;
  .iconfont{
    font-size: 16px;
  }
`;

export const BuskerName = styled.p`
  float: left;
  display: block;
  color: #333;
`;

export const Tendency = styled.p`
  float: right;
  display: block;
  color: #d35400;
`;

export const DetailBody = styled.div`
  padding: 20px 0;
  overflow: hidden;
`;

export const MomentImgWrapper = styled.div`
  width: 600px;
  float: left;
  display: block;
  .ant-carousel .slick-slide {
    text-align: center;
    height: 400px;
    line-height: 400px;
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

export const ImgCarouselItem = styled.div`
  background: url("${props => props.imgUrl}");
  background-size: cover;
`;

export const MomentContent = styled.div`
  width: 290px;
  float: right;
  display: inline-block;
`;

export const MomentVideoWrapper = styled.div`
  width: 910px;
  margin: 0 auto;
  overflow:hidden;
`;

export const VideoItem = styled.div`
  width: 320px;
  float: left;
  margin: 10px;
  display: block;
`;

export const DetailBottom = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-bottom: 20px;
  border-top: 1px solid #f1f1f1;
  .iconfont{
    font-size: 16px;
  }
`;
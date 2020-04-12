import styled from "styled-components";
import {keyFrameRun} from "../../common/keyFrames";

export const HomeWrapper = styled.div`
    position: relative;
`;

export const HomeCarousel = styled.div`
    width: 1180px;
    margin: 10px auto;
    padding: 10px 28px;
    .ant-carousel .slick-slide {  
        text-align: center;
        height: 650px;
        line-height: 650px;
        background: #364d79;
        overflow: hidden;
        border-radius: 2px;
    }
    
    .ant-carousel .slick-slide h3 {
        font-size: 3rem;
        color: #fff;
    }
`;

export const HomeCarouselItem = styled.div`
  background: url("${props => props.imgUrl}");
  background-size: 100% 100%;
`;

export const AlbumsWrapper = styled.div`
    width: 1180px;
    margin: 10px auto;
    padding: 10px 28px;
`;

export const AlbumsItem = styled.div`
    padding: 10px 0;
    display: flex;
    color: #1a1a1a;
    &:hover{
        cursor: pointer;
        .album-img{
            -webkit-animation: ${keyFrameRun} 6s linear 0s infinite;
        }
        .album-img:hover{
            -webkit-animation-play-state:paused;
        }
    }
`;

export const AlbumsImg = styled.div`
    .album-img{
       height: 160px;
       border-radius: 50%;
    }
    p{
      margin: 5px 0;
      font-size: 1.2rem;
      .busker-name{
        color: #999;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
`;

export const AlbumsInfo = styled.div`
    margin-left: 40px;
    width: 100%;
    h1{
       font-family: "Georgia", "serif";
       font-style: italic;
       font-weight: bold;
       font-size: 3.4rem;
       margin: 0;
       padding: 0;
    }
    h2{
       font-size: 2.4rem;
       margin: 0;
       padding: 0;
    }
`;

export const InfoName = styled.div`
    display: flex;
`;

export const Score = styled.div`
    margin-left: auto;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #1a1a1a;
    border-radius: 50%;
    font-size: 2em;
    color: #1a1a1a;
    background: #ffffff;
    font-weight: bold;
`;

export const HomeVideoWrapper = styled.div`
    width: 1180px;
    margin: 10px auto;
    padding: 10px 28px;
`;

export const HomeWebDes = styled.div`
    width: 1180px;
    margin: 10px auto;
    padding: 10px 28px;
    .des{
        color: #1a1a1a;
        font-size: 1.8rem;
        line-height: 24px;
    }
    .des:first-letter{
        float: left;
        font-size: 4.8em;
        line-height: 1.1em;
        margin: -.15em .08em -.2em 0;
    }
`;



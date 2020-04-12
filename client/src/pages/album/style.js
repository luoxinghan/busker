import styled from "styled-components";

export const AlbumsWrapper = styled.div`
  position: relative;
`;

export const AlbumsInfo = styled.div`
  width: 1180px;
  margin: 10px auto;
  padding: 10px 28px;
  .flow{
      display: flex;
      flex-wrap: wrap;
  }
  .item{
      margin-bottom: 60px;
      text-align: center;
  }
`;

export const AlbumItem = styled.div`  
  min-height: 1px;
  .pub-date{
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .075em;
    font-weight: 600;
    color: #b3b3b3;
   }
`;

export const AlbumImage = styled.div`
    img{
      width: 100%;
      margin-bottom: 20px;
      border: 1px solid #f0f0f0;
    }
    .author{
        font-size: 1.8rem;
        color: #2b2b2b;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    .album-name{
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.4;
        font-style: italic;
        color: #2b2b2b;
        margin-bottom: 16px;
        word-wrap: break-word;
        -webkit-transition: color .15s;
        transition: color .15s;
    }
    &:hover .album-name{
        color: #ff3530;
    }
`;

export const AlbumExtra = styled.div`
   .busker-name{
        text-decoration: none;
        color: #2b2b2b;
        -webkit-transition: color .15s;
        transition: color .15s;
        text-transform: uppercase;
        font-size: 1rem;
        letter-spacing: .075em;
        font-weight: 700;
   }
   .busker-name:hover{
        opacity: 0.7;
   }
`;
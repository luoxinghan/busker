import styled from "styled-components";

export const DetailWrapper = styled.div`
  position: relative;
`;

export const AlbumInfoArea = styled.div`
  width: 1180px;
  margin: 10px auto;
  padding: 10px 28px;
`;

export const AlbumHead = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #f2f2f2;
  padding: 45px 0 45px 45px;
  border-radius: 20px;
  align-items: center;
  .album-img{
     width: 30%;
  }
`;

export const AlbumAuthor = styled.div`
  vertical-align: center;
  text-align: center;
  width: 52%;
  h2{
    font-size: 3rem;
    margin: 10px 0;
  }
  h1{
    font-family: "Georgia", "serif";
    font-style: italic;
    font-weight: bold;
    font-size: 4.8rem;
    margin: 10px 0;
    padding: 0;
  }
  button{
    background: #1a1a1a;
    color: white;
    border: none;
  }
`;

export const AlbumScoreCircle = styled.div`
  width: 18%;
  div{
      width: 100px;
      height: 100px;
      margin: 0 auto;
      border-radius: 50%;
      border: 5px solid #1a1a1a;
      color: #1a1a1a;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      font-size: 5rem;
      font-weight: bold;
  }
`;

export const AlbumBody = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
`;

export const AlbumTitle = styled.div`
  width: 30%;
  p{
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .busker{
    color: #1a1a1a;
    word-spacing: 1px;
  }
  .time{
    margin-top: 5px;
    color: #b3b3b3;
    text-transform: uppercase;
  }
`;

export const AlbumInfo = styled.div`
  width: 70%;
  .des{
    color: #222222;
    font-size: 1.6rem;
    line-height: 24px;
  }
  .des:first-letter{
    float: left;
    font-size: 4.8em;
    line-height: 1.1em;
    margin: -.15em .08em -.2em 0;
  }
`;

export const SingleBody = styled.div`
  padding: 20px 0;
  width: 80%;
  margin: 0 auto;
`;

export const CommentsInfo = styled.div`
  width: 80%;
  margin: 0 auto;
  .ant-comment-avatar img{
    width: 100%;
    height: 100%;
    border: 1px solid #f0f0f0;
  }
`;

export const CommentWrite = styled.div`

`;

export const CommentList = styled.div`
  .ant-comment-content-author-name a{
    font-weight: 600;
    color: #222222;
  }
  .ant-rate{
    font-size: 1.4rem;
  }
  .ant-rate-star{
    margin-right: 4px;
  }
  .ant-comment{
    padding: 15px 0;
  }
  .ant-comment-inner{
    padding: 3px 0;
  }
`;
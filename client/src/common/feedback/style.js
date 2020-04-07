import styled from "styled-components";

export const FeedbackWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const FeedbackInfo = styled.div`
  padding: 10px 0;
  display: flex;
`;

export const FeedbackImg = styled.div`
  width: 40%;
  text-align: center;
  img{
    width: 80%;
  }
`;

export const FeedbackContent = styled.div`
  width: 60%;
  .feedback-form{
    width: 60%;
    margin: 0 auto;
  }
  .ant-btn{
    width: 100%;
    background: #000;
    border: 1px solid #000;
  }
`;
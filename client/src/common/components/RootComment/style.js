import styled from "styled-components";

export const CommentInputArea = styled.div`
  display: ${props => props.display};
  transition: 0.5s;
  .ant-input{
    width: auto;
    margin-right: 20px;
  }
`;
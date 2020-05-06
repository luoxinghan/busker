import styled from "styled-components";

export const NoPermissionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh
`;

export const NoPermissionInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1{
    font-size: 60px;
    text-transform: uppercase;
    letter-spacing: 1rem;
    font-weight: 800;
    text-align: center;
    span{
      background: #3498db;
      color: #f0f0f0;
      display: block;
    } 
  }
`;

export const LoginInformation = styled.div`
  width: 100%;
  text-align: center;
  p{
    font-size: 20px;
    margin: 0;
    color: #1a1a1a;
  }
`;
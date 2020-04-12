import styled from "styled-components";

export const Title = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.4rem;
    color: #000000;
    letter-spacing: 2px;
    margin-top: 0;
    margin-bottom: 40px;
    span{
        position: relative;
        display: inline-block;
        padding-bottom: 20px;
    }
    span:after {
        position: absolute;
        left: calc(50% - 20px);
        bottom: 0;
        width: 40px;
        height: 1px;
        background: #ff3530;
        content: "";
    }
`;

export const HorizontalTitle = styled.h1`
    text-transform: uppercase;
    text-align: left;
    font-size: 1.6rem;
    color: #000000;
    letter-spacing: 2px;
    margin-left: 20px;
    span{
        position: relative;
        display: inline-block;
        padding-bottom: 20px;
    }
    span:after {
        position: absolute;
        left: -20px;
        top: calc(50% - 20px);
        width: 3px;
        height: 22px;
        background: #f1c40f;
        content: "";
    }
`;

export const Content = styled.div`
    width: 1180px;
    margin: 10px auto;
    padding: 10px 28px;
`;
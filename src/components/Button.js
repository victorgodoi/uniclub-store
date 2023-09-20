import styled from "styled-components";

const Button = styled.button`
    width: 288px;
    height: 69px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid black;
    background: #000;
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 16px;
    font-weight: 600;
    line-height: 225%;
    letter-spacing: 0.96px;
    text-transform: uppercase;
    transition: all 0.5s;
    
    &:hover{
        cursor: pointer;
        border-color: black;
        background-color: #FFF;
        color: black;
    }
`
export default Button